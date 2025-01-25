# Realtor Data API - Project Documentation

## Overview
This project, known as **House API**, is a RESTful API designed to provide access to real estate data. It uses a public dataset and interacts with a read-only database.  

## Endpoints
The House API offers the following endpoints (defined in `api/src/api.js`):

*   **GET /**: Returns a welcome message.
*   **GET /properties**: Retrieves all the properties from the database.
* **GET /properties/:id**: Retrieves a specific property by its ID.
* **GET /properties/city/:city**: Retrieves all the properties from the database by city.
* **GET /properties/type/:type**: Retrieves all the properties from the database by type.

These endpoints allow you to interact with the real estate data stored in the read-only database.

## Technologies Used

*   **Node.js:** The core runtime environment for executing the JavaScript application.
*   **JavaScript:** The primary programming language used for the project's logic.
*   **Database (db.js):**  A database system (the specific type is defined in `api/db.js` ) is used to store and retrieve data.
*   **API (api.js):**  An API (defined in `api/src/api.js`) built to provide endpoints for interacting with the application's data and functionality.
*   **CSV Data Processing:** The `realtor-data.zip.csv` file indicates the project handles data in CSV format, likely used for initial data loading or data import/export operations.
* **npm:** Package manager for Node.js, used to manage the project's dependencies (defined in `package.json` and `package-lock.json`)
* **Nix:** Nix package manager is used to manage the project's environment and dependencies. (defined in `.idx/dev.nix`)
* **VSCode (or IDX):** The project includes configuration for visual studio code for development (defined in `.vscode/settings.json`)
*   **RESTful API:** The project exposes a RESTful API, allowing for standard HTTP methods (GET, etc.) to interact with the data.
*   **Read-Only Database:** The database is intended to be read-only, meaning you can only retrieve data, not modify it.

## File Structure

*   `app.js`: The main entry point for the Node.js application.
*   `api/db.js`: Contains the code for interacting with the database.
*   `api/src/api.js`: Implements the API endpoints and logic.
*   `realtor-data.zip.csv`: The data file containing realtor information in CSV format.
* `package.json`, `package-lock.json`: Manage the project dependencies.
* `.idx/dev.nix`: Project environment.
* `.vscode/settings.json`: Project configuration for visual studio code.
