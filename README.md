
# 🔤 Wordle Clone

A lightweight, responsive web-based clone of the popular word-guessing game **Wordle**, built using pure HTML, CSS, and vanilla JavaScript.

---

## 🎮 How to Play

1. **Guess the Word:** You have **6 attempts** to guess the hidden 5-letter word.
2. **Type your guess:** Use either your physical keyboard or the interactive on-screen keyboard.
3. **Submit:** Press **Enter** once you've typed all 5 letters to submit your guess.
4. **Color Feedback:**
   - 🟩 **Green:** The letter is in the word and in the **correct position**.
   - 🟨 **Yellow:** The letter is in the word but in the **wrong position**.
   - ⬛ **Gray:** The letter is **not** in the word at all.

---

## ✨ Features

- **Interactive Virtual Keyboard:** Clickable key buttons that sync with user input and display real-time color feedback matching tile status.
- **Physical Keyboard Support:** Handles `A-Z` typing, `Backspace` for corrections, and `Enter` for submission.
- **Accurate Letter-Matching Engine:** Two-pass evaluation algorithm that correctly handles duplicate letters (e.g., entering `SSSSS` against `SQUID` only highlights the valid `S` and marks the rest gray).
- **Guarded Input Validation:** Requires a full 5-letter word entry before allowing submission.
- **Responsive Layout:** Clean CSS grid design adapted for desktop and mobile devices.

---

## 📁 Project Structure

```text
├── index.html       # Game structure and layout
├── style.css        # Board styling, animations, and tile color themes
└── script.js        # Game loop, input handling, and letter-checking logic

```

---

## 🚀 Getting Started

No build steps or dependencies required!

1. Clone or download the repository:
```bash
git clone [https://github.com/your-username/wordle-clone.git](https://github.com/your-username/wordle-clone.git)

```


2. Open `index.html` directly in any modern web browser.

---

## 🛠️ Tech Stack

* **HTML5** – Semantic structure
* **CSS3** – Grid/Flexbox layout and tile feedback styling
* **JavaScript (ES6+)** – DOM manipulation, event listeners, and two-pass array validation

