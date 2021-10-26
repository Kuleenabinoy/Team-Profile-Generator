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

![Screenshot 2021-10-26 12 40 35](https://user-images.githubusercontent.com/86656634/138794641-f76e1882-b681-40c1-9382-46a9584f0b31.png)

![Screenshot 2021-10-26 12 47 43](https://user-images.githubusercontent.com/86656634/138794806-4a3c211b-f140-474b-8520-e249395229d7.png)

## VideoLinks

1.Video showing all four tests passing from the command line.

https://watch.screencastify.com/v/oIKxgthL4T5x9xT0sdym

2.Video demonstrating how a user would invoke the application from the command line and how a user would enter responses to all of the prompts in the application.
https://watch.screencastify.com/v/aKbfmDzw6yIS8gpuMDbG

3.Video demonstrating a generated HTML file that matches the user input.
https://watch.screencastify.com/v/nxiLUSIOyU0mRkGz4fyC

4.Video demonstrating all functions Of the project Test,Commandline prompts,Validation,Html Generation, Html Page

https://watch.screencastify.com/v/71XSM3JnK12feEU8wC68
