# Mind Activation

Mind Activation is a Memory Game project where players can test their memory skills by matching pairs of cards. It provides an entertaining and challenging experience for users of all ages.

## Features

- Responsive Design: The game is fully responsive and can be played on various devices, including desktops, tablets, and mobile phones.

## Installation

To install and run the Mind Activation project locally, please follow these steps:

1. Clone the repository:

```bash
git clone git@github.com:migueldiganchi/mind-activation_app.git
```

2. Navigate to the project directory:

```bash
cd mind-activation_app
```

3. Install the dependencies using npm:

```bash
npm install
```

4. Run the development server:

```bash
npm install
```

Open [http://localhost:9393](http://localhost:9393) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure

The project follows a directory structure that promotes modularity and organization. Here's an overview of the main directories:

- `components`: This directory contains reusable components used throughout the application.
  - `Page.js`: The base component for each page, providing consistent layout and structure.
  - `Game`: This directory contains components specific to the game functionality.
    - `GameBoard.js`: Represents the game board where the cards are displayed and interacted with.
    - `GameInfo.js`: Displays information about the user's progress and scores.
    - `GameLoader.js`: Renders a loading effect while the game data is being fetched.
    - `GameOverBox.js`: Presents information and actions related to the game's result.
    - `GameStatus.js`: Provides information and feedback to the user during the game.
    - `Cards`: This directory contains components related to the game cards.
      - `Card.js`: Represents an individual card in the game.
      - `CardGrid.js`: Renders the grid of cards in the game.

- `pages`: This directory contains the application's pages.
  - `index.js`: The main page of the application where the game is presented along with the characters.
  - `game.js`: The page that hosts the game itself.
  
## Implementation Details

One important aspect of the implementation is the separation of concerns. The `GameBoard` component is responsible for making the API call to load the characters and can be used both from the homepage and within the game. This promotes code reusability and ensures consistency in the game data fetching process.

The use of the `Page` component as the base for each page helps maintain a consistent layout and structure throughout the application.

The `Card` component represents an individual card in the game, while the `CardGrid` component renders the grid of cards. This separation allows for better organization and encapsulation of card-related functionality.

## Technologies Used

The Mind Activation project is built with the following technologies:

- Next.js: A React framework for building server-side rendered and static websites.
- React: A JavaScript library for building user interfaces.
- Sass: A CSS preprocessor that enhances the styling capabilities of CSS.
- Axios: A library for making HTTP requests to fetch data from APIs.
