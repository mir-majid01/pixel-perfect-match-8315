<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Brand UI uses `/public/worldvault-mark.png` through the root-relative `/worldvault-mark.png` URL so Vercel includes and serves it consistently; favicon and platform exports remain in `/public`.
- Keep the interactive app-screen showcase in a dedicated browser-safe site component; isolate preview state from the page and label illustrative screens honestly.
- Import scenic page imagery from project assets and define overlays and motion roles in global semantic tokens so production asset bundling and theme consistency are preserved.
