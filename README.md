# NYT Wordle Clone

This project is a clone of the popular [NYT Wordle](https://www.nytimes.com/games/wordle/index.html) game, built using [Next.js](https://nextjs.org) and [React](https://react.dev). It aims to faithfully recreate the Wordle experience, including daily puzzles, keyboard input, and feedback for guesses.

## Features

-[x] Daily word puzzles, just like the original Wordle
-[x] Responsive UI for desktop and mobile devices
-[ ] Interactive on-screen keyboard and support for physical keyboard input
-[x] Colored feedback for correct, misplaced, and incorrect letters
-[] Game statistics and streak tracking (local storage)
-[] Shareable results (copy to clipboard)
-[x] Accessible and fast performance

## Getting Started

To run the project locally, follow these steps:

1. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

2. **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to play the game.

## Project Structure

- `app/page.tsx`: Main game logic and UI
- `components/`: Reusable React components (Board, Keyboard, Modal, etc.)
- `lib/`: Utility functions (word list, validation, statistics)
- `styles/`: CSS modules and global styles

## Customization

- Change the word list in `lib/words.ts` to use your own set of words.
- Update UI styles in `styles/` to match your preferred theme.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — Features and API reference
- [React Documentation](https://react.dev/learn) — Learn React fundamentals
- [NYT Wordle](https://www.nytimes.com/games/wordle/index.html) — The original game

## Deployment

Deploy your Wordle clone easily using [Vercel](https://vercel.com/new). For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

Feel free to contribute or suggest improvements by opening issues or pull requests!

