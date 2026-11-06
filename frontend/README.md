# A Little Birthday Surprise ♡ 🎂🐾

A complete, premium, interactive birthday surprise web application made with React, Vite, and aesthetic CSS. Designed with warmth, cuteness, and emotional storytelling.

---

## 🌟 Features

- **Six Sequential Screens**:
  1. **The Little Surprise**: Cozy sunlit bedroom scene with two fluffy kittens and breathing call-to-action button.
  2. **Choose Your Cutie**: Interactive selection between Kitten A (fluffy white kitten on blush-pink) and Kitten B (brown tabby kitten on soft lavender) with glowing hover/tap feedback.
  3. **The Cute Reveal**: The chosen kitten wearing a hand-drawn crown with playful congratulations.
  4. **A Letter Just for Her**: Elegant stationery letter with warm personal wishes and soft floral motifs.
  5. **Her Special Photo**: Polaroid-style photo frame with subtle washi tape, gentle rotation, and live photo replacement.
  6. **The Final Birthday Surprise**: Cinematic sunset with two kittens looking at a glowing horizon, heartfelt wishes, and smooth replay button.
- **Visual Design**:
  - Warm ivory (`#FFF8F1`), Blush pink (`#F4C4CF`), Dusty rose (`#D88FA5`), Soft lavender (`#E6DDF5`), Deep rose text (`#704653`), and Warm brown (`#8A6C63`).
  - Google Fonts (*Caveat*, *Dancing Script*, *Quicksand*, *Nunito*).
  - Floating ambient hearts and sparkles.
- **Audio Lullaby**:
  - Built-in gentle Web Audio API music-box lullaby player (no external audio files required).
  - Explicit play/mute toggle button in the header (disabled by default as per requirements).
- **Mobile First**: Optimized for standard mobile viewports (390×844) while looking polished on desktops and tablets.

---

## 🚀 How to Run Locally

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📸 How to Customize Her Photo

There are two easy ways:

1. **Direct file replacement**:
   Drop her photo into `frontend/public/images/her-photo.jpg`. The website will automatically display it.
2. **Via Configuration file**:
   Open [frontend/src/config/birthdayConfig.js](file:///c:/Users/madha/Desktop/Madam_ji/frontend/src/config/birthdayConfig.js) and change `photoAssetPath` to any image URL or local path.
3. **Live in-browser preview**:
   Screen 5 includes a *"Test preview photo"* button that lets you select any photo directly from your computer to see how it looks in real-time.

---

## ✍️ How to Personalize Nickname & Messages

All messages and settings are centralized in one single file:
👉 [frontend/src/config/birthdayConfig.js](file:///c:/Users/madha/Desktop/Madam_ji/frontend/src/config/birthdayConfig.js)

- Set `nickname: "HerNickname"` (if left empty, it defaults naturally to *"Beautiful"* or *"you"*).
- Edit letter paragraphs, captions, or button labels easily.

---

## 🌐 Deploy to Vercel in 2 Minutes

### Method 1: Vercel CLI
```bash
cd frontend
npx vercel
```

### Method 2: GitHub + Vercel Dashboard
1. Push this folder to a GitHub repository.
2. In [Vercel](https://vercel.com), import your repository.
3. If importing the root repository, set **Root Directory** to `frontend`.
4. Click **Deploy**! (Vercel will automatically detect Vite and run `npm run build`).
