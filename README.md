# gk-Portfolio

A modern, responsive portfolio website for a Software Engineer & Business Analyst, built with React, Vite, and TailwindCSS.

## 🚀 Overview

This portfolio showcases my projects, skills, and professional journey. It features a dynamic, responsive design with smooth scrolling navigation, project galleries, and a contact form integrated with EmailJS.

**Live Demo:** [https://gh-portfolio-liard.vercel.app/](https://gh-portfolio-liard.vercel.app/) (as referenced in project data)

## ✨ Features

*   **Responsive Design:** Fully responsive layout that adapts to all screen sizes (Mobile, Tablet, Desktop).
*   **Dynamic Navigation:** Smooth scrolling to sections (About Me, Services, Projects, Certificates, Contact).
*   **Project Showcase:** Interactive gallery displaying projects with details, tech stacks, and screenshots.
*   **Certificates Section:** Display of achieved certifications.
*   **Contact Form:** Functional contact form powered by EmailJS.
*   **Modern UI/UX:**
    *   Glassmorphism effects.
    *   Custom animations using AOS (Animate On Scroll).
    *   Lightbox for image viewing (GLightbox).
    *   Slick Carousel for sliders.
    *   Dark/Light mode compatible (via DaisyUI themes).

## 🛠️ Tech Stack

*   **Core:** [React](https://reactjs.org/) (v18), [Vite](https://vitejs.dev/)
*   **Styling:** [TailwindCSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
*   **Routing:** [React Router DOM](https://reactrouter.com/)
*   **Animations:** [AOS](https://michalsnik.github.io/aos/)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **Utilities:**
    *   [EmailJS](https://www.emailjs.com/) (for emails)
    *   [GLightbox](https://biati-digital.github.io/glightbox/) (for image modals)
    *   [React Slick](https://react-slick.neostack.com/) (for carousels)
    *   [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup) (for form handling and validation)

## 📦 Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd gh-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **Open in browser:**
    Navigate to `http://localhost:5173/` (or the port shown in your terminal).

## 🏗️ Project Structure

```
gh-portfolio/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── assets/          # Project assets
│   ├── components/      # Reusable components (Navbar, Sections, etc.)
│   ├── general/         # General utilities and Router
│   ├── Pages/           # Page components
│   ├── stories/         # Storybook stories (if used)
│   ├── App.jsx          # Main App component
│   ├── Data.js          # Static data for projects and certificates
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles (Tailwind imports)
├── .eslintrc.cjs        # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── tailwind.config.cjs  # TailwindCSS configuration
└── vite.config.js       # Vite configuration
```

## 🔮 Future Improvements

*   **POS Retail System:** A desktop web-based application for retail stores with inventory management (Coming Soon).
*   **Blog Section:** Adding a blog to share technical articles and insights.
*   **Theme Toggle:** Explicit user control for switching between light and dark themes.

## 📄 License

This project is licensed under the MIT License.

---
*Created by Gharieb Khalifa*
