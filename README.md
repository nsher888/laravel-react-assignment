# Laravel React Form Project

Welcome to the Laravel React Form project! This web application allows you to create, update, and delete forms using Laravel as the backend API and React for the frontend, built with Vite as the build tool.

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [Usage](#usage)
5. [Project Structure](#project-structure)

---

## Requirements

Before you begin, ensure you have met the following requirements:

-   [Node.js](https://nodejs.org/) installed on your machine.
-   [Composer](https://getcomposer.org/) installed on your machine.
-   [PHP](https://www.php.net/) installed on your machine.
-   [Laravel](https://laravel.com/) installed globally (you can install it using Composer).
-   [MySQL](https://www.mysql.com/) or any other database of your choice.

## Installation

Follow these steps to set up the project:

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd laravel-react-assignment
    ```

3. Install Laravel dependencies using Composer:

    ```bash
    composer install
    ```

4. Install React dependencies using npm:

    ```bash
    cd client
    npm install
    ```

5. Create a `.env` file in the project root directory and configure your database connection by copying the `.env.example` file and modifying it with your database credentials.

6. Generate a Laravel application key:

    ```bash
    php artisan key:generate
    ```

7. Run database migrations:

    ```bash
    php artisan migrate
    ```

## Running the Application

Now that you have installed the project, follow these instructions to run it:

1. Start the Laravel API server. It will run on port 8000 by default:

    ```bash
    php artisan serve
    ```

2. Start the Vite development server for the React frontend. It will run on port 3000 by default:

    ```bash
    cd react
    npm run dev
    ```

## Usage

You can access the Laravel React Form application by opening your web browser and navigating to `http://localhost:3000`.

### Application Features

-   **Create Form**: Click the "New Form" button to create a new form.
-   **Edit Form**: Click the "Edit" button next to a form to edit its details.
-   **Delete Form**: Click the "Delete" button next to a form to delete it.
-   **Form Validation**: The application uses React Hook Form for form validation.
-   **React Router**: React Router is used for client-side routing.
-   **CRUD Operations**: You can perform Create, Read, Update, and Delete operations on forms.

## Project Structure

The project has the following structure:

-   `app/`: Laravel application
-   `react/`: React frontend built with Vite
