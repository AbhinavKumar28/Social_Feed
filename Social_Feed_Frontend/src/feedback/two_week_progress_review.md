# Two-Week Progress Review: March 16 – March 30

**Commits reviewed:** 6 (from `3880947` on Mar 18 to `a16f569` on Mar 26)
**Issues closed:** #4 (LeftBar decomposition), #2 (React Router)
**PRs merged:** #5, #6

---

## The Big Picture

Two weeks ago, LeftBar.tsx was 578 lines — the entire application jammed into one component. Today it's 63 lines. That number tells the story of these two weeks better than anything else I can say.

You closed the two biggest architectural issues from the original review (LeftBar decomposition and React Router), cleaned up dead code, compressed images, fixed the project name, extracted NewPost into a real component with proper event handling, and made the Menu component fully generic and reusable. This is solid, sustained work that tracks directly to the feedback you were given.

Let me break down the positives and negatives honestly.

---

## Growth: What's Clearly Improved

### 1. You now think in components

Look at your project structure today. You have Bookmarks, Favourite, Hash, Lists, Notification, Private, NewPost, ProfileCard — each a self-contained component with a single responsibility. Two weeks ago, these were all `{left === "X" && (...)}` blocks inside LeftBar. The refactoring wasn't just about moving code to new files — it required you to think about what each component needs (its own state? shared props? data from JSON?) and draw the boundaries correctly.

The Notification component is a good example. It has its own `notify` state, it imports the generic Menu component for the tabs, and it reads tab options from `menu-tabs.json`. That's three patterns (local state, reusable components, data-driven rendering) working together in a 43-line component. Clean.

### 2. The generic Menu component is done right

```tsx
function Menu({ items, active, setActive }: MenuProps): JSX.Element {
  return (
    <div className="border-bottom">
      {items.map((item: string, index: number) => (
        <div key={index} className="menu-items">
          <a className={active === item ? "active" : ""} onClick={() => setActive(item)}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        </div>
      ))}
    </div>
  );
}
```

18 lines. Used by TrendingCard's tabs, ProfileCard's tabs, and Notification's tabs. One component, three use cases. The broken duplicate-function version from the last WIP commit is gone. The syntax error is fixed. The capitalisation bug (using `activeValue` instead of `item`) is fixed. This is the kind of reusable component that saves you time on every future page that needs tabs.

### 3. You acted on feedback about the textarea event handling

In NewPost, you replaced the leaky `useEffect` + `addEventListener` pattern with a proper React `onChange` handler:

```tsx
const textinput = (e: React.ChangeEvent<HTMLTextAreaElement>): undefined => {
  const el = e.currentTarget;
  setText(el.value);
  el.style.height = "74px";
  el.style.height = el.scrollHeight + "px";
};
```

No more memory leak. No more `useRef` needed for the textarea. The resize logic lives in the event handler where it belongs. This shows you understood *why* the original pattern was wrong, not just that it was flagged.

### 4. ProfileCard now uses PostCard

The Replies tab went from 150+ lines of hardcoded SVG markup to:

```tsx
{profile === "posts and replies" &&
  posts.map((post: Post) => <PostCard key={post.id} post={post} />)}
```

One line. And you used `key={post.id}` instead of `key={index}` — the exact fix I mentioned in earlier feedback. This tells me you're reading the feedback carefully, not just skimming for the headline action items.

### 5. Images were compressed

`ai.png` went from 1.82 MB to 490 KB. `elephant.png` from 1.63 MB to 858 KB. That's roughly 2 MB saved. You heard the feedback and acted on it. Still room to go further (858 KB is large for a small profile image), but the habit is forming.

### 6. Project name and title were fixed

`package.json` name and `index.html` title now say `social-feed` instead of `package.json`. Small but it shows attention to the details outside the code itself.

### 7. Svg component was fixed

The `classname` prop (lowercase) was corrected to `className` (camelCase). The type was extracted into `SvgProps` in the types file. The Svg component is now used consistently across Bookmarks, Favourite, Hash, Lists, Private, NewPost, and ProfileCard. That's real adoption of the abstraction you built.

### 8. React Router is wired up

Routes.tsx now has proper routes, MainComponent receives `left`/`setLeft` as props, and RightBar uses `useNavigate()` to change URLs when navigating. The URL now reflects which page you're on. Issue #2 is closed. This was a non-trivial integration — you had to restructure how state flows from App through the router to MainComponent.

---

## What Still Needs Work

### 1. The commented-out code is STILL there

This has been flagged in every single review. Here's what's still in the codebase right now:

- `// const [count, setCount] = useState(0)` in **7 files** (App.tsx, Search.tsx, Trending.tsx, ProfileCard.tsx, TrendingCard.tsx, LeftBar.tsx, Notification.tsx)
- `// import { useState } from "react"` in 4 files
- `// import MainComponent` and the entire commented-out `<Router>` block in App.tsx
- `// import { useParams }` in RightBar.tsx

You made a dedicated cleanup commit on March 19 (`341bfa9: feat: comments removed and refactored`) — and it did remove some. But it didn't get all of them. The `// const [count, setCount]` line is a Vite template artifact that has survived 21 commits across 5 weeks.

I'm going to stop gently flagging this. **Open every `.tsx` file in your project and delete every commented-out line that isn't an intentional TODO. Do it in one commit. Do it today.** This is a professional hygiene issue and it should not appear in the next review.

### 2. The router implementation is halfway done

You added React Router, and `useNavigate` works in RightBar. But the routing is still a hybrid — the actual view rendering is still driven by the `left` state string passed as props, not by the URL. If I navigate to `/profile` and refresh the page, I'll see the trending page (the default state) because the URL parameter isn't read on mount to set the initial state.

True routing means the URL is the source of truth. You should be using `useParams()` in MainComponent or LeftBar to read the `:section` parameter and determine which page to show — not relying on a `useState` that defaults to `"trending"` regardless of the URL.

Also, some items in RightBar use `handleMenuChange` (which calls `navigate`), but the Bookmarks link still uses the old `setLeft("bookmarks")` directly — it was missed in the conversion. Inconsistency like this creates bugs.

### 3. The `left` state is still threaded through too many layers

The state flows: `App → Rout → MainComponent → LeftBar/RightBar`. Four levels of prop drilling for a single piece of state. React Router should eliminate the need for this entirely — the URL *is* the state. Once you read the section from the URL parameter, you don't need to pass `left` and `setLeft` as props at all. The component tree becomes simpler and the data flow becomes obvious.

### 4. Empty components still exist

`Account.tsx`, `Content.tsx`, and `Items.tsx` are still empty components that render nothing. They were created in commit 1 and haven't been touched since. Delete them or use them. They add cognitive noise to the project.

### 5. PostCard still has hardcoded SVGs for the action bar

The Svg component is used extensively in the new page components, but PostCard — one of the most important components — still has 5 raw inline SVG blocks for the reply/boost/star/bookmark/ellipsis action buttons. These are the same icons that appear in every post. Extract them using your Svg component, or better yet, create an `ActionBar` component since the same 5 buttons appear as a group everywhere.

### 6. RightBar is now the biggest file at 227 lines

The LeftBar went from 578 → 63. But RightBar was never refactored. It's 227 lines of navigation links, each with a full inline SVG, an onClick handler, and class names. This is the same pattern LeftBar had before — it's the next candidate for the Svg component treatment and possibly extracting a `NavLink` component.

### 7. Images are duplicated

Every image exists in both `public/images/` AND `src/assets/`. That's two copies of every file in the repo. Decide on one location. Components that import images via JS should use `src/assets/`. Components that reference images via URL strings (from JSON data) should use `public/images/`. But don't keep both copies.

### 8. The README is still the Vite boilerplate

Fifth review. Still the default Vite README. You know what to do.

---

## Speed and Cadence

6 commits over 14 days (roughly 1 every 2.3 days). The cadence is reasonable for the scope of work. What's more notable is the *quality* of the commits:

- `3880947` (Mar 18) — WIP commit: ProfileCard refactor + image compression + Menu fix. Multiple concerns but marked as WIP, which is honest.
- `7333caa` (Mar 18) — Same day: finished the LeftBar refactoring, closed issue #4. All new page components added. This is the highest-impact commit in the project's history.
- `341bfa9` (Mar 19) — Cleanup commit: comments removed, package name fixed. The right instinct, even if incomplete.
- `68ac559` (Mar 23) — Router added, issue #2 closed. Structural change touching 5 files.
- `c01e405` (Mar 24) — Router debugging. This being a separate commit suggests the router didn't work on first try, which is normal.
- `a16f569` (Mar 26) — Router fixes + made post button functional. Commit message dropped the `feat:` prefix — keep using it, consistency matters.

The overall pace is good. You're working in focused chunks, using WIP commits honestly, and closing issues systematically. The two-commits-in-one-day pattern on March 18 (WIP then completion) shows a productive working session.

---

## Summary Comparison: 2 Weeks Ago vs. Now

| Metric | March 16 | March 30 |
|---|---|---|
| LeftBar.tsx lines | 578 | 63 |
| Number of page components | 1 (LeftBar did everything) | 10 separate components |
| Data-driven components | TrendingCard only | TrendingCard, ProfileCard, all card types |
| Generic reusable components | None | Menu, Svg, PostCard |
| React Router | Installed but unused | Wired up (partially) |
| GitHub workflow | Feature branches + PRs + issues | Continued consistently |
| Largest file | LeftBar (578) | RightBar (227) |

The trajectory is clear and positive. You're applying patterns across the codebase once you learn them, you're following the prioritised task list from reviews, and the code is getting genuinely better with each commit.

The remaining work is: finish the router properly (URL as source of truth), apply the Svg component to PostCard and RightBar, kill the remaining dead code and empty components, deduplicate images, and write the README. None of these are hard — they're just discipline.

Keep going.
