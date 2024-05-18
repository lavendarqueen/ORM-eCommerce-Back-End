# ORM-eCommerce-Back-End

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath) ![dotenv](https://img.shields.io/badge/dotenv-16.4.5-green) ![bcrypt](https://img.shields.io/badge/bcrypt-5.1.1-violet) ![Sequelize](https://img.shields.io/badge/Sequelize-v6.37.3-blue) ![Express](https://img.shields.io/badge/Express-4.19.2-green)

## Description

This is an eCommerce Back End application using object-relational mapping, a postgresSQL database, and Sequelize intended to help companies compete in e-Commerce. I built this project because I wanted to learn more about databases and server side functionality. In addition to learning postgresSQL and Sequelize, I also learned about routes and CRUD functions (Create, Read, Update, and Delete).

## Table of Contents

- [Walk-Through-Video](#walk_through_video)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [Contributions](#contributions)
- [Questions](#questions)
- [User Story](#user-story)

## Installation

Please watch the following walk-through video, which will demonstrate the installation and usage instructions:

https://github.com/lavendarqueen/ORM-eCommerce-Back-End/assets/159203938/c344ad8e-e4ee-4fa8-9eb4-715043c995b0

The user can create a new database by opening the schema.sql file and entering the new database name in lines 2 and 5 using the convention: databasename_db.

The user will need to enter the following information in the .env file in order to connect with the database:

- The exact name of the database as referenced in the schema.sql file;
- The user's username (example: Postgres); and
- The user's password.

Once this is done, the user can seed the database entering the following command in the command in the command line interface (CLI): npm run seed

## Usage

The user will then start the server by entering the following command in the CLI:
npm run watch

Once the server starts, the user will be directed to

    ![alt text](assets/images/screenshot.png)

## Tests

All the routes in the ORM-eCommerce-Back-End were tested using Insomnia. Please review the walk-through video.

## Credits

I collaborated with Instructor Ben Machock, Teacher's Assistant Casey Miller, Tutor Megan Meyers, and Melissa Cade.

I also used the following third-party assets:

- Sequelize v6: https://sequelize.org/docs/v6/
- 
- MDN web docs at https://developer.mozilla.org/en-US/
- W3 Schools at https://www.w3schools.com/
- StackOverflow at https://stackoverflow.com/

## License

![License](https://img.shields.io/badge/License-MIT-blue.svg)

Copyright (c) 2024 Phyllis Ann Lataille

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributions

Any contributions made in the spirit of sharing ideas and concepts, will be greatly appreciated. If you have any suggestions that would make this app better, please fork the repo and create a pull request. You can also open an issue with the tag "contribute". Please give this project a star!

### Instructions for forking:

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/fileName)
3. Commit your Changes (git commit -m)
4. Push to the Branch (git push origin feature/newFeature)
5. Open a Pull Request

## Questions

Please contact me with any questions or comments:

- Email: lataillep@gmail.com
- GitHub username: lavendarqueen
- Deployed repository: https://ORM-eCommerce-Back-End-ytjo.onrender.com
- GitHub repository: https://github.com/lavendarqueen/ORM-eCommerce-Back-End
- Walk-Through Video: https://github.com/lavendarqueen/ORM-eCommerce-Back-End...

## User Story

AS a manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

### Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
