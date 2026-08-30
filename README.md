# Capstone Project — Web Design for Everybody (Coursera)

Submitted: 30 August 2026  

## Theme
The project uses science as its central theme, with four sub‑pages covering Physics, Chemistry, Biology, and additional interactive features.

## Structure
The main page (`index.html`) uses Bootstrap and links to the following pages:

- physics.html
- chemistry.html
- biology.html
- more_stuff.html

## Page Details and Design Choices

### Physics
- Built with Bootstrap
- Includes a carousel and an accordion
- Contains a short quiz using radio buttons
- JavaScript checks answers and updates the score

### Chemistry
- Built using HTML and CSS only
- Responsive layout created with `@media` queries
- Displays four images that rearrange depending on screen width:
  - One horizontal row
  - A 2×2 grid
  - A single column
- Includes a short quiz using text input
- JavaScript validates answers and calculates the score

### Biology
- Uses the same HTML/CSS layout approach as Chemistry
- Contains one yes/no question
- JavaScript handles the response

### more_stuff
- Uses Bootstrap
- Demonstrates embedding Google Maps
- A dropdown list allows the user to select a scientist; the map updates to show their birthplace
- Includes an example of a sticky footer:
  - The footer stays at the bottom of the viewport when content is short
  - It moves down naturally when the map becomes large

## Learning Resources
Bootstrap was learned primarily from the Net Ninja tutorials on YouTube:  
https://www.youtube.com/watch?v=O_9u1P5YjVc

## Learning Outcomes
Through this project I learned:

- How to structure multi‑page websites
- How to use Bootstrap components such as the carousel, accordion, and grid
- How to write responsive layouts using media queries
- How to embed external content such as Google Maps
- How to use JavaScript for quizzes, scoring, and DOM updates
