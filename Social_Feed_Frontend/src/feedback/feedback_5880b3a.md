# Feedback on commit `5880b3a` — LeftBar Component Refactoring (WIP)

Hey Abhinav,

This commit tackles three things at once: extracting ProfileCard out of LeftBar, creating an `Svg` component to reduce inline SVG noise, and making the Menu component data-driven. All three are from the review feedback. Let's go through each.

---

## The Svg Component — Good Instinct, Solid Execution

This is the highlight of the commit:

```tsx
function Svg({ classname, path }: { classname: string; path: string }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className={classname}>
      <path d={path}></path>
    </svg>
  );
}
```

16 lines that solve a problem I flagged across the entire codebase. You noticed that every SVG in this project shares the same structure — only the className and path data differ — and you extracted exactly that. The `ProfileCard` now uses `<Svg classname="icon" path="m313-440..." />` instead of 8-line SVG blocks. That's the right move.

Two things to improve on it:

**1. The prop should be `className`, not `classname`.** React uses camelCase for HTML attributes — `className` is standard React. Using lowercase `classname` works because you're just passing it through to `className` on the SVG, but it breaks the convention every React developer expects. Anyone reading `<Svg classname="icon" />` will think it's a typo. Small fix, but conventions exist so that code is predictable.

**2. Height and width are hardcoded to 24.** The globe icon in the post timestamp uses `height="14" width="14"`. Your current `Svg` component can't handle that — it'll always render at 24x24. Make size a prop with a default:

```tsx
function Svg({ className, path, size = 24 }: { className: string; path: string; size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size} className={className}>
      <path d={path} />
    </svg>
  );
}
```

That way existing uses don't need to change, and the smaller icons work too.

---

## ProfileCard Extraction — Partially Done

You moved the profile page out of LeftBar into its own `ProfileCard` component. That's the right direction — this is the LeftBar decomposition from issue #4.

But the extraction is incomplete. Look at what `ProfileCard` still contains: the profile header with the elephant image, the edit profile buttons, the user info, the join date, the follower counts, the tab bar (Featured/Posts/Replies/Media), AND the full hardcoded post in the Replies tab — complete with all the inline SVGs that the rest of the codebase has already moved away from.

The Replies tab still has the exact same hardcoded Mr. Mark post with raw SVG blocks. You've already built `PostCard` for this — it renders posts from data. Use it here too. That's the whole point of reusable components: once you build `PostCard`, every place in the app that shows a post should use it, not re-create the markup from scratch.

Also, the profile data (username, handle, join date, follower counts) is still hardcoded directly in JSX. You know the pattern now — you did it for posts, hashtags, and news. Apply it here too. Create a profile data type, put the data in JSON or a constant, and render from it.

---

## The Menu Refactoring — This Commit Has a Problem

There are two `Menu` functions defined in `Menu.tsx`:

```tsx
// New generic version (line 5):
function Menu ({activeValue, setValue, clicked}:):JSX.Element{

// Old hardcoded version (line 18):
function Menu({ clicked, setClicked }: MenuProps): JSX.Element {
```

Two functions with the same name in the same file. The second one is the one that gets exported and used. The first one — the generic, data-driven version — just sits there, unreachable. This won't compile as-is because of the duplicate declaration, and the first function also has a syntax error in the type annotation (there's an empty `:)` after the props).

I can see what you were trying to do. You wanted to make Menu generic so it can render any set of tabs from a data array instead of hardcoding "Posts/Hashtags/People/News". That's exactly the right idea. But this is what I mean about committing work-in-progress code carefully — the new function isn't connected to anything, has a syntax error, and lives alongside the old function that still does the actual work.

Here's what the finished version should look like:

```tsx
type TabMenuProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

function Menu({ tabs, activeTab, onTabChange }: TabMenuProps): JSX.Element {
  return (
    <div className="border-bottom">
      {tabs.map((tab) => (
        <div key={tab} className="menu-items">
          <a
            className={activeTab === tab ? "active" : ""}
            onClick={() => onTabChange(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </a>
        </div>
      ))}
    </div>
  );
}
```

Then it works for trending tabs, profile tabs, notification tabs — anywhere you have a row of tab buttons. Delete the old function entirely once the new one works.

There's also a bug in your new version: `{activeValue.charAt(0).toUpperCase() + activeValue.slice(1)}` capitalises the *active* tab name and shows it for every tab. You meant to capitalise `click` (the current item in the loop), not `activeValue`.

**Also** — I notice the `menu-tabs.json` imports data but it's only used to populate `const trend: string[] = menuOf.clicked` in LeftBar, which isn't actually used anywhere in the render. It's declared and then ignored. Clean this up — either wire it into the Menu component or remove it until you're ready.

---

## One More Thing: The Old Habits

`ProfileCard.tsx` still has `// const [count, setCount] = useState(0)` and the `// import { useState }` comment at the top. `Menu.tsx` still has `console.log(clicked)`. These have been flagged in every review. I know they're small, but the reason I keep mentioning them is that they represent a pattern: you're focused on the new code you're writing and not cleaning up the file you're touching. Every time you open a file to make changes, take 30 seconds to scan for dead code and remove it. It's much easier to clean as you go than to do a cleanup pass later.

---

## Summary

The `Svg` component is genuinely good work — it's small, focused, reusable, and solves a real problem. The ProfileCard extraction is moving in the right direction but needs to go further (use PostCard for the replies tab, make profile data dynamic). The Menu refactoring is the right idea but was committed mid-thought with syntax errors and duplicate functions.

For the next commit on this branch, I'd suggest:

1. **Finish the generic Menu component** — delete the old one, fix the syntax, wire it up so both the trending tabs and profile tabs use it.
2. **Use PostCard inside ProfileCard's Replies tab** — don't leave hardcoded SVG markup in a file you're actively refactoring.
3. **Delete all commented-out code and console.logs in every file you touch.** Make this a habit, not a chore.

Then this branch is ready for a PR against issue #4.
