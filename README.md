Axion – Interactive Navigation Website

Axion is a front-end web project built to demonstrate a fully interactive navigation menu with scroll-based styling, smooth transitions, mobile responsiveness, and a modern dark UI theme.
The website showcases a collection of car models, reviews, a booking form, and a complete responsive layout using only HTML, CSS, and JavaScript.

Features
Navigation System

Fixed navbar visible on all pages

Style changes on scroll

Active section highlighting

Smooth scroll animation

Hover and focus animations

Mobile hamburger menu with drawer panel

UI Sections

Hero section with background image

Car model cards with images

Road test reviews

Maintenance tips

Deals panel

Contact information

Test drive booking form

Functional Enhancements

Intersection Observer for detecting visible sections

JavaScript-driven smooth scrolling

Mobile menu open/close logic

Form submission message handling

Tech Stack

Frontend:

HTML

CSS

JavaScript (ES6)

Tools:

VS Code

Git & GitHub

GitHub Pages (deployment)

Project Structure
PRODIGY_WD_01/
├── index.html            # Main webpage
├── style.css             # Stylesheet (dark theme + responsive design)
├── script.js             # Scroll logic, mobile menu, interactivity
├── images/               # Car and hero section images
│     ├── atlas-gt.jpg
│     ├── be6.jpg
│     ├── hero-bg.jpg
│     └── rover-x.jpg
└── README.md

How It Works
Navigation Logic

The navbar changes style when the user scrolls past a threshold.

The current section (Home, Models, Reviews, etc.) highlights automatically.

Clicking a menu link scrolls smoothly to the target section.

On smaller screens, the hamburger icon toggles a mobile drawer menu.

Page Content

Car model cards display images and short specifications.

Reviews section provides structured evaluations.

Booking form collects user details and shows a confirmation message.

Limitations

No backend integration

Form submissions are not stored anywhere

Static images (no CDN fallback)

Works as a single-page design (no multi-page routing)

Future Enhancements

Add animations on scroll

Add car comparison module

Add a backend for test drive booking

Implement light/dark mode toggle

Replace placeholder text with dynamic API data

How to Run
1. Clone the repository
git clone https://github.com/parthp137/PRODIGY_WD_01.git
cd PRODIGY_WD_01

2. Open the project

Open index.html directly in your browser
OR run a local server:

python -m http.server 8000


Then visit:
👉 http://localhost:8000