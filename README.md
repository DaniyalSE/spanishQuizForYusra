# Spanish Quiz for Yusra

This is a simple and fun Spanish vocabulary quiz application built with React and Vite. It's designed to help users practice their Spanish language skills in an interactive way. (My Wife asked me to take a quiz of her Spanish orally, so I decided to make this for her as a gesture. She loved it ❤️❤).

## Features

- **Two-way translation:** Quizzes users on translating from Spanish to English and English to Spanish.
- **Multiple-choice questions:** Presents four options for each question.
- **Instant feedback:** Shows whether the selected answer is correct or incorrect.
- **Score tracking:** Keeps track of the user's score throughout the quiz.
- **Responsive design:** Works well on different screen sizes.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web projects.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Lucide-React:** A library of simply beautiful icons.
- **gh-pages:** A tool to deploy files to a gh-pages branch on GitHub.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/daniyalse/spanishQuizForYusra.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd spanish-quiz-for-yusra
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

### Usage

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Open your browser and go to `http://localhost:5173` (or the address shown in your terminal).**

## Deployment

This project is set up for deployment to GitHub Pages. To deploy the application, run the following command:

```bash
npm run deploy
```

This will build the project and push the contents of the `dist` directory to the `gh-pages` branch of your repository.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Serves the production build locally for preview.
- `npm run lint`: Lints the source code using ESLint.
- `npm run predeploy`: A script that runs before deployment (in this case, it runs the build script).
- `npm run deploy`: Deploys the application to GitHub Pages.

## Project Structure

```
.
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── package.json
├── README.md
└── vite.config.ts
```

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please open an issue or create a pull request.

## License

This project is licensed under the MIT License.
