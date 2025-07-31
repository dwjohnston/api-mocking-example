# Basic Node.js/TypeScript/Express Todo API

This is a simple Express server written in TypeScript. It uses a module-scoped object as an in-memory database and exposes a single endpoint:

- `GET /todos`: Returns a list of todos.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run the server:
   ```sh
   npx ts-node src/index.ts
   ```

## Project Structure
- `src/index.ts`: Main server file
- `.github/copilot-instructions.md`: Copilot custom instructions
