# Quick Start

This guide outlines the steps to set up your local development environment for your Telegram bot project.

## Prerequisites: 

- Node.js and npm installed on your system ([https://nodejs.org/](https://nodejs.org/))

## Steps:

1. **Obtain Bot Token:**
    - Visit @BotFather: [https://t.me/botfather](https://t.me/botfather) on Telegram.
    - Follow the instructions to create a new bot and obtain its token.

2. **Configure Bot Token:**
    - Create a file named `config.ts` in the `app/config` directory.
    - Copy the template code from `app/config/config.ts.template` and paste it into `config.ts`.
    - Replace the placeholder value in `config.ts` with your actual bot token.

3. **Set Up Firebase Database:**
    - Create a Firebase project and database ([https://firebase.google.com/](https://firebase.google.com/)).
    - Generate a service account and download the credentials file (JSON format).

4. **Configure Firebase Credentials:**
    - Create a file named `dbConfig.ts` in the `app/config` directory.
    - Copy the template code from `app/config/dbConfig.ts.template` and paste it into `dbConfig.ts`.
    - Replace the placeholder values in `dbConfig.ts` with the corresponding information from your downloaded Firebase service account credentials file.

5. **Install Dependencies:**
    - Open a terminal window and navigate to the root directory of your project.
    - Run the following command to install required packages:

    ```bash
    npm install
    ```

6. **Run the Bot:**
    - The bot is now ready to run. Use your preferred terminal command to start the development server.

## Contributions

Feel free to enhance the boilerplate by opening a pull request.
