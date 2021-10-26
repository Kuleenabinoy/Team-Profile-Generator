# Team-Profile-Generator

## Description

A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Unit test done for every part of code to ensure that it passes each test.

## Table of Contents

-   [Description](#Description)
-   [UserStory](#UserStory)
-   [AcceptanceCriteria](#AcceptanceCriteria)
-   [Usage](#Usage)
-   [Tests](#Tests)
-   [ScreenShots](#ScreenShots)
-   [VideoLinks](#VideoLinks)

## UserStory

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## AcceptanceCriteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Usage

```md
Npm Module Inquirer is used for prompt questions from command line
Npm Module Chalk is used to display Validation messages and other messages .
```

## Tests

```md
Run `npm test` to run Jest for tests
```

## ScreenShots

## VideoLinks
