# 🦴 Orthopedic Hero Section — VS Code Setup Guide

A complete interactive hero section with animated skeleton, flowing veins, 
and clickable joint panels.

---

## 📁 File Structure

```
ortho-hero/
├── index.html   ← Main page
├── style.css    ← All styling + animations
├── main.js      ← Interactivity + body part data
└── README.md    ← This file
```

---

## 🚀 Step-by-Step Setup in VS Code

### Step 1 — Install Live Server Extension
Open VS Code → Extensions (Ctrl+Shift+X) → search **"Live Server"** by Ritwick Dey → Install.
This gives you hot-reload so every save reflects instantly in the browser.

### Step 2 — Open the Project Folder
File → Open Folder → select your `ortho-hero/` directory.

### Step 3 — Launch in Browser
Right-click `index.html` in the Explorer → **"Open with Live Server"**
Your browser opens at `http://127.0.0.1:5500/index.html`

### Step 4 — Customise Doctor Details
In `index.html`, find the NAV section and replace:
```html
<div class="nav-logo">Dr. A. Mehta <span>MD, FRCS</span></div>
```
with your doctor's name and credentials.

Also update the hero heading and stats in `.hero-text`.

### Step 5 — Add / Edit Body Part Data
In `main.js`, the `bodyPartData` object holds all content.
Each key matches a `data-part` attribute on the SVG hotspot.

**To add a new body part:**
```js
"wrist": {
  title: "Wrist",
  icon: "✋",
  badge: "Radiocarpal Joint",
  conditions: [
    "Carpal tunnel syndrome",
    "Scaphoid fracture",
    "TFCC tear",
    "De Quervain's tenosynovitis"
  ],
  diagnostics: [
    "MRI wrist for ligament/TFCC",
    "X-ray for fractures",
    "Nerve conduction study",
    "Tinel's & Phalen's test"
  ],
  treatments: [
    "Carpal Tunnel Release", "TFCC Repair",
    "Wrist Arthroscopy", "Splinting",
    "Cortisone Injection", "Physiotherapy"
  ]
}
```

Then add the SVG hotspot in `index.html` inside the `<svg>` block:
```html
<g class="hotspot" data-part="wrist" tabindex="0" role="button" aria-label="Wrist joint">
  <circle cx="88" cy="296" r="14" fill="#00c9a7" fill-opacity="0.08" stroke="#00c9a7" stroke-width="1.5" class="hotspot-ring"/>
  <circle cx="88" cy="296" r="5" fill="#00c9a7" fill-opacity="0.6" class="hotspot-dot"/>
</g>
```
Adjust `cx` and `cy` to position over the correct bone.

### Step 6 — Change Colours
In `style.css`, edit the `:root` variables:
```css
:root {
  --teal:    #00c9a7;   /* hotspot / vein glow colour */
  --bg-deep: #040d1a;   /* main background */
  --bone:    #c8d8f0;   /* skeleton bone colour */
  --red-vein:#ff4757;   /* artery colour */
}
```

### Step 7 — Replace the Font
Currently using Google Fonts (Playfair Display + Syne + DM Sans).
Replace in `index.html` `<head>` with any Google Fonts link you prefer.
Then update font references in `style.css`.

### Step 8 — Deploy
When ready, you can deploy to:
- **Vercel**: `npx vercel` in project folder
- **Netlify**: drag and drop the folder to netlify.com
- **GitHub Pages**: push to a repo and enable Pages in Settings

---

## 🎨 Design Tokens

| Token | Value | Used For |
|-------|-------|---------|
| `--teal` | `#00c9a7` | Veins, hotspots, accents |
| `--red-vein` | `#ff4757` | Arteries (pulsing red) |
| `--bg-deep` | `#040d1a` | Hero background |
| `--bg-panel` | `#0c1530` | Info panel card |
| `--bone` | `#c8d8f0` | Skeleton bones |
| Playfair Display | serif | Headings + panel title |
| Syne | sans-serif | Labels + tags + CTAs |
| DM Sans | sans-serif | Body text |

---

## 🔧 Extending — Adding Animations

To add a glowing pulse to a specific bone when its panel is open,
add this to `main.js` inside `openPanel()`:

```js
// Highlight the related bone
document.querySelectorAll('.bones line, .bones path').forEach(b => {
  b.style.stroke = '#6a8eb0'; // dim all
});
// Then brighten specific bone by ID
const boneLine = document.getElementById(`bone-${partKey}`);
if (boneLine) boneLine.style.stroke = '#00c9a7';
```
And add `id="bone-left-knee"` etc. to the corresponding `<line>` elements in the SVG.

---

## 📱 Responsive Behaviour
- **Desktop (>1100px)**: 3-column layout — text | skeleton | panel
- **Tablet (700-1100px)**: 2-column, panel floats as overlay
- **Mobile (<700px)**: Single column, panel is full-screen overlay

---

## ✅ Clickable Joints (included)
- Left & Right Shoulder
- Spine / Lumbar
- Left & Right Hip
- Left & Right Knee
- Left & Right Ankle

## ➕ Joints You Can Add Next
- Elbow (left & right)
- Wrist (left & right)
- Cervical Spine (neck)
- Sacroiliac Joint
