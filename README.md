Axion – Interactive Navigation Website

Axion is a front-end web project designed to demonstrate a fully interactive navigation system with smooth scrolling, active section highlighting, mobile responsiveness, and a clean dark-themed interface. It is built using HTML, CSS, and JavaScript.

Features
Navigation System

Fixed navigation bar

Smooth scrolling between sections

Scroll-based style changes

Hover and active link highlighting

Responsive hamburger menu for mobile devices

UI Sections

Home (Hero section)

Car Models

Reviews

Maintenance tips

Deals section

Contact details

Test drive booking form

Functionality

Section-based active link detection

Mobile drawer open/close behavior

Form message display on submission

Tech Stack

Frontend: HTML, CSS, JavaScript
Tools: VS Code, Git, GitHub Pages

Design Overview

The website follows a modern dark-theme layout and contains the following primary sections:

Hero section with background image

Model cards with vehicle images

Review articles

Informational sections (maintenance, deals, contact)

A simple interactive form

All animations and interactions are implemented using JavaScript.

Limitations

No backend integration for real data storage

Form submissions are not saved or emailed

Static images (no CDN fallback)

Single-page structure (no routing)

Future Enhancements

Backend integration for storing form data

Animation improvements

Light/Dark mode toggle

Car comparison module

API-based data for models and reviews

Project Structure
├── index.html               # Main webpage
├── style.css                # Styling and layout
├── script.js                # Scroll logic and interactivity
├── images/                  # Car and hero images
│     ├── atlas-gt.jpg
│     ├── be6.jpg
│     ├── hero-bg.jpg
│     └── rover-x.jpg
└── README.md

How to Run

Clone the repository:

git clone https://github.com/parthp137/PRODIGY_WD_01.git
cd PRODIGY_WD_01


Open the project in a browser:

Open index.html directly, or

Start a local server:

python -m http.server 8000


Then open:
http://localhost:8000
