# 301 Entrance Exam

### Instructions:
### Make sure before starting to:
- Turn off any means of communication (phone, Slack and Email).
- Start your screen recording.
- You are not allowed to use previous projects, notes , or GitHub.
- You can use Google search engine.
- Use the console to debug.

## ******************************************************

## Exam:
Create a new repository on your Github and name it 'Grades-Tracker'.

### Build a one-page website using HTML, CSS, and Vanilla Javascript. The wireframe of the targeted page is attached to Slack.
You will be building a simple webpage which contains the information about students and their grades.

As a user, I would like to be able to add students grades in specific courses so I can track the grades.
- Create a form in order to add the student name and course. 
The course should be one of a predefined list that contains the following courses: 
Arabic, English, Math, Science, Art

- Whenever you add a new student, you should generate the student's grade as an integer random number between 0 and 100.

As a user, I would like to view all of my students that I already added so that I can quickly view their grades.
- Whenever you add a student using the form, you should use the local storage in order to get all the students from it and render them as a table using DOM.

- *Stretch goal*
Add a clear button under the table, that when clicked will clear the table and the local storage

- *Stretch goal*
Add a fourth column to the table and fill it with "Fail" if the grade in that row is less than 50, and "Pass" otherwise 


## ******************************************************


### Do this work on the 'main' branch.

1. Create an HTML file and convert the wireframe into HTML structure.

2. Create a CSS file to apply the style.
- The used font is "Roboto" -> google font.

3. Create a js file to handle the functionality.
- Handle adding the students to the table and local storage.
- Handle calculating the random grade.
- Handle getting the students from the local storage and rendering them.

- *Stretch goal*
- Handle clearing the table and the local storage

- *Stretch goal*
- Add "Fail" if the grade in that row is less than 50, and "Pass" otherwise in a new column in the table

## ******************************************************


### Grades Rubric: 
- HTML (5 Marks)
  Header: 1
  Form: 4

- CSS (30 Marks)
  Header: 5
  Background image: 5
  form: 10
  Table: 10

- JavaScript (55 Marks)
  Constructor, properties and prototypes: 15
  Event listener and retrieving form data: 10
  Store data to local storage: 5
  Check and load data from local storage: 5
  Render the table: 20

- General (10 Marks)
  Code style (naming conventions, indentation ..): 5
  Deploying on GitHub Pages: 5

- Stretch goals (15 Marks)


#### P.S.: you MUST use constructor and local storage in order to solve this problem PLUS when you refresh the page, all the data should be persistent.

## ******************************************************

## Submission Instructions - as a private:
- Submit the link of your GitHub repo.
- Submit your live URL after deploying your site with GitHub pages.
- Submit the link of your recorded video (you can upload it to your Google drive or dropbox then share the link).
- After completing the exam, do **NOT** commit or push anything to your repo.