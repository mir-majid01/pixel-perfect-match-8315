# WorldVault brand, trust, and support expansion

## Scope

- Add a reusable vault-badge emblem and a consistent logo lockup pairing it with the existing white/green `WORLD VAULT` wordmark.
- Use the compact lockup in the sticky header and a larger lockup above the footer tagline. The scrolled header will reduce height slightly while keeping the emblem and lettering crisp.
- Add an “About the Developer” section that states WorldVault is built and maintained by a solo Bedrock player, without invented team details, testimonials, or usage metrics.
- Add a compact “Built with” strip for Firebase and Google Drive API, framed around where backup metadata and user-owned files live.
- Add a full support section with three icon cards:
  - Telegram → `https://t.me/Mirmajid01`
  - WhatsApp → `https://wa.me/917889941591`
  - Email → `mailto:WorldVault@gmail.com`
- Open Telegram and WhatsApp safely in a new tab; email opens the user’s mail app.
- Add the required Mojang/Microsoft attribution and an automatically updating copyright year.
- Add a dedicated Privacy Policy page and link it from the footer, covering local file access, Google account/Drive access, metadata, retention, sharing, and contact. It will be clearly usable now rather than linking to a dead placeholder.

## Brand assets

- Create the blocky vault-door mark as a clean vector source: green ring/keyhole on dark obsidian.
- Export favicon files at 16×16 and 32×32, an Apple touch icon at 180×180, and a 192×192 maskable Android/Chrome icon.
- Add a web manifest that declares the maskable icon and app identity.
- Create a static 1200×630 social-share image with the same pixel sky, mountain, and vault aesthetic, the full logo lockup, and the value proposition “Back up your Minecraft Bedrock worlds before they’re gone.”
- Reference the share image in the home page’s Open Graph and Twitter metadata, along with self-referencing canonical and `og:url` tags.

## Page integration

- Extend header navigation with About and Support destinations without overcrowding mobile.
- Place About after the privacy section, then Support, then the existing download call-to-action.
- Rework the footer into the larger brand lockup, product/legal links, exact support links, trademark attribution, and current-year copyright.
- Preserve the current dark green palette, pixel display type, body type, border treatment, spacing rhythm, icon family, reveal motion, and reduced-motion behavior.

## Verification

- Check the home page and Privacy Policy metadata.
- Test all section links and contact destinations.
- Verify favicon and social image dimensions and references.
- Review the page at desktop and 408px mobile widths, including the header before and after scrolling, and confirm the new sections render without overlap.
