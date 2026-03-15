# Trouble – Math Quiz Game 🎲

Trouble is an interactive browser-based math quiz game where players are given a **target answer** and must determine which mathematical expressions produce that result. Some options are correct, while others are intentionally misleading.

The game challenges players to think quickly and select the correct questions before time runs out.

---

## 🎮 Features

* Interactive math quiz gameplay
* Single answer with multiple possible questions
* Mix of correct and misleading options
* Score tracking system
* Fast-paced gameplay
* Clean UI with custom assets

---

## 🛠 Tech Stack

* **Next.js** – Web framework for building the application
* **Phaser.js** – Game engine used for rendering the game logic
* **TypeScript** – Type-safe development
* **CSS / Tailwind** – Styling and layout

---

## 📂 Project Structure

```
app/
 ├ game/        # Main game logic and Phaser setup
 ├ scores/      # Score display page
 └ page.tsx     # Landing page

public/
 ├ assets/      # Game images and tiles
 └ sounds/      # Audio assets

package.json
next.config.ts
```

---

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open the project in your browser:

```
http://localhost:3000
```

---

## 🧠 How the Game Works

1. A **target answer** is displayed.
2. Multiple **math expressions** appear on the screen.
3. Some expressions evaluate to the target answer.
4. Others are incorrect.
5. The player must **select the correct expressions** to score points.

---

## 🏗 Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment

This project can be deployed using:

* Vercel
* Netlify
* GitHub Pages (static export)

---



https://ttrouble.vercel.app/

