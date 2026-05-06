# Design Brief: Full Modern Portfolio (Dark Theme)

## Objective
Extend the modern dark theme from the landing page to the entire portfolio. Rebuild all sections (Experience, Projects, Skills, Contact) to match the quality, layout, and theme of `https://abdulbasit-005.vercel.app/`.

## Target Audience
Tech recruiters and engineering managers.

## Aesthetic Direction
- **Consistent Dark Theme**: Background `#050505`, crimson/red glows (`#dc143c`).
- **Glassmorphism**: Use semi-transparent, blurred cards for project and experience items.
- **Modern Typography**: Space Grotesk for headings/body, JetBrains Mono for code elements.
- **Section Transitions**: Smooth scroll or clear visual separation with high-quality spacing.

## Content Structure (Full Restore)
1. **Hero**: Split layout (Name/About on left, Code Editor on right).
2. **Experience**: Timeline or grid of work history (Swipe Savvy, Medfilo, GWU, NSL Hub, Vasavi Lab).
3. **Projects**: Cards for InsightAd, Mediguide, Smart Logistics Platform. Include tech tags and GitHub links.
4. **Skills**: Categorized skill clouds (Languages, Frameworks, Data/Analytics).
5. **Contact**: Form and social links.

## Navigation
- Fixed top navbar with links to #work, #projects, #skills, #contact.
- High-quality hover effects on nav links.

## Technical Constraints
- **Framework**: Next.js (App Router).
- **Styling**: Standard CSS (updating `src/app/globals.css`).
- **Reuse**: Reuse existing components if possible, but restyle them to fit the new theme.

## Key Files
- `src/app/page.js` (Restored sections)
- `src/app/globals.css` (Updated global styles)
- `src/app/layout.js` (Navigation and global wrapper)
