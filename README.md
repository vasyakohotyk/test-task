# Interactive Workspace && Bitcoin Tracker

## Description
Two test tasks, the first is an interactive page with blocks and the ability to manipulate them, the second task is tracking Bitcoin transactions

## Features
- **Draggable and resizable blocks**: Users can drag and resize blocks in the workspace.
- **Real-time updates**: Displays live data, such as Bitcoin transactions, using WebSockets.
- **Loading spinner**: Displays a spinner while data is loading or during long-running tasks.
- **Smooth animations**: Transitions and animations are handled by `framer-motion`.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/vasyakohotyk/test-task.git
    ```

2. Navigate to the project directory:
    ```bash
    cd test-task
    ```

3. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

4. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

## Usage

Once the project is running, visit `http://localhost:3000` in your browser to view the application.

## Technologies Used
- **React.js**: Frontend framework used to build the UI.
- **TypeScript**: Used for type safety and better code quality.
- **Framer Motion**: For smooth animations and transitions.
- **react-router-dom**: Used for routing in the application.
- **react-rnd**: Library used for creating draggable and resizable components.
- **react-spinner**: For displaying loading indicators during data fetching or processing.

## Contributing
If you'd like to contribute, please fork the repository, create a new branch, and make your changes. Afterward, create a pull request with a clear description of your changes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.
