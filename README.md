# DI_Bootcamp_Hackaton_2: Language Learning RPG

**Language Learning RPG** is a gamified language-learning application that uses RPG and dungeon crawler elements to make vocabulary acquisition engaging and fun. Players battle enemies by using their knowledge of words, blending educational goals with the excitement of gameplay.

---

## Table of Contents
- [About the Project](#about-the-project)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Code Overview](#code-overview)
  - [Key Classes](#key-classes)
  - [Word Categories](#word-categories)
- [Contributing](#contributing)
- [License](#license)


---

## About the Project
Language Learning RPG is designed to help users improve their vocabulary by challenging them to defeat enemies in a dungeon crawler-style game. Players type words based on categories to launch attacks, making learning immersive and interactive.

---

## Folder Structure
The project is organized into the following structure:

    /config data.js           -> Hardcoded category data 
        entityClass.js        -> Parent class for the Enemy and Player 
        enemyClass.js         -> Class for creating the Enemy 
        playerClass.js        -> Class for creating the Player

    /controllers
        catControllers.js     -> Category controller 
        enemyController.js    -> Enemy controller 
        playerController.js   -> Player controller

    /routes 
        catRouter.js          -> Routes for category-related operations 
        enemyRouter.js        -> Routes for enemy-related operations 
        playerRouter.js       -> Routes for player-related operations

    /public 
        battle.css            -> Styles for the battle screen 
        style.css             -> General styles for the project 
        script.js             -> Frontend interactions with the backend and DOM 
        index.html            -> Main HTML file for the project

    /utils 
        enemyGenerator.js     -> Generates enemies on the screen 
        wordChecker.js        -> Checks word validity and determines attack strength

    .gitignore                -> Specifies files to be ignored by Git package.json # Project dependencies and scripts 
    server.js                 -> Connects frontend and backend

---

## Installation

Clone the repository:
   ```bash
   git clone https://github.com/noudas/DI_Bootcamp_Hackaton_2.git
   cd DI_Bootcamp_Hackaton_2
   ```

Install dependencies:

```bash
npm install
```

Run the server:

``` bash
node server.js
```

---

## Usage
* Open your browser and navigate to http://localhost:5000 (or the port specified in your configuration).
* Start the game by choosing an enemy.
* Enter words in the input field to attack enemies.
* Defeat enemies to progress through the dungeon and learn new words!

---

