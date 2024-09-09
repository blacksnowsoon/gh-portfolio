/* eslint-disable react-refresh/only-export-components */
//# sourceMappingURL=Data.js.map
export const PROJECTS = [
  {
    id:1,
    name: 'Dashboard Template',
    image: 'go-starter-project375x375.png',
    shorts: 'A starter project Template supports RTL and Responsive with dynamic sidebar',
    description: 'A starter Project for dashboard support RTL for whom wants to start a new project, can be user as system dashboard or admin dashboard.',
    usedLibs: ['Vitejs-react', 'mui/icons-material', 'mui/material', 'history', 'i18next', 'date-fns', 'react-helmet-async', 'stylis'],
    functions: ['nice search bar', 'dynamic sidebar', 'coockie message', 'RTL & LTR layout'],
    link: 'https://go-starter-project.vercel.app/',
    responsive: true,
  },
  {
    id:2,
    name: 'Casher Bill',
    image: 'bill1-375x475.png',
    shorts: 'A small web app for the casher of adabia port include login system, queries and reports, built from scratch.',
    description: 'Analyising the casher cycle and build an app working locally using indexed DB with all features as login system, multi users, reports, printing bills, export bills as PDF, export reports as CSV ',
    usedLibs: ['Vitejs-react', 'Dexie-js', 'date-fns', 'Jspdf', 'React-csv', 'React-datepicker', 'React-hook-form', 'html2canvas'],
    functions: ['authentication', 'printing', 'Querying Data from DB', 'exporting Data as CSV & PDF', 'form validation', 'apply animations', 'all CRUD operations'],
    link: 'https://casher-bill.vercel.app/',
    responsive: false,
  },
  {
    id:3,
    name: 'Static Website',
    image: 'isfp-375x475.png',
    shorts: 'Using Vitejs-React to redesign the ISFP website with no prebuilt components just react and react-router-dom packages.',
    description: 'giving the wibsite of the company where I am working a new responsive SPA design with theme option',
    usedLibs: ['Vitejs-react', 'react-router-hash-link'],
    functions: ['display mode', 'infinit sliders'],
    link: 'https://isfp-redesign.vercel.app/',
    responsive: true,
  },
  {
    id:4,
    name: 'A workshop website',
    image: 'workShop-375x475.png',
    shorts: 'A protfolio for small aluminum workshop acts as a catalogue.',
    description: 'A small website that has a dashoard lets the owner to add his content with full control plus some statistics with a good UI that lets users signin and save theme favorate kitchens ability to contact the brand with whats app or via direct call.',
    usedLibs: ['reactjs', 'firebase', 'firestore', 'firebase storage', 'prop-types', 'react-query', 'react-hook-form'],
    functions: ['google Signin', 'creating admin dashboard','reading files', 'upload images', 'validating forms', 'save user data', 'paginate', 'firebase hosting', 'authorization'],
    link: 'https://ahmedsaied.web.app/',
    responsive: true,
  },
  {
    id:5,
    name: 'Landing Page',
    image: 'landing-375x475.png',
    shorts: 'build a landing responsive page with a dynamic navigation bar based on created sections in the page',
    description: 'It is static responsve page with an dynamic nav bar creates a links to all the sections in the page based on the section tag with the id assign a home link to the hero section and footer to the footer',
    usedLibs: ['no Libs just vanila js ', 'css', 'html'],
    functions: ['responsive design', 'dynamic nav bar', 'manipulating DOM'],
    link: 'https://landing-page-udacity-fwd.vercel.app/',
    responsive: true,
  },
  {
    id: 6,
    name: 'Image Reducer API',
    image: 'api-375x475.png',
    shorts: 'This API allows you to resize images by specifying the desired width and height as a search params and a payload is the image base64 format',
    description: 'The Image Reduce API provides a simple and convenient way to resize images by providing the desired width and height along with the base64 encoded image file',
    usedLibs: ['Nodejs', 'sharpe', 'express', 'cors', 'jasmine', 'body-parser'],
    functions: ['creating the express server', 'optimize cors options & body-pareser','adding routes'],
    link: 'https://github.com/blacksnowsoon/Image-Reducer-Api',
    
  },
  {
    id: 7,
    name: 'Image Reducer Web App',
    image: 'image-resizer-375x475.png',
    shorts: 'Simple web app to resize images by providing the desired width and height along with the image file',
    description: 'The Image Reducer Web App provides a simple and convenient way to resize images by providing the desired width and height along with the image file',
    link: 'https://image-reducer-ui.vercel.app/',
    usedLibs: ['React', 'axios'],
    functions: ['responsive design', 'display mode', 'scroll up', 'animation', 'validating input', 'fetching data', 'Submting data'],
    responsive: true,
  },
  
]
export const COMMING_SOON = [
  {
    id: "08",
    name: 'POS Retail System',
    image: 'pos-375x475.png',
    shorts: 'Desktop web based Application POS system with full inventory management',
    description: 'A desktop web based application work locally for retail stores with full inventory management and order management, Users Privileges and more',
    link: '/#contact',
    hasLink: false,
    usedLibs: ['HTML', 'CSS', 'jQuery', 'Bootstrap', 'electron', 'nodejs', 'DataTable',],
    functions: ['NoSQL', 'users & Permissions', 'bills history', 'sorting', 'Export data CSV','Export data PDF', 'stock alarm', 'Standalone app'],
    responsive: false,
  }
]
export const CERTIFICATS = [
  {
    id:1,
    name: 'JavaScript',
    pdf: '/certificates/javascript.webp',
  },
  {
    id:2,
    name: 'SQL',
    pdf: '/certificates/sql.webp',
  },
  {
    id:3,
    name: 'React',
    pdf: '/certificates/react-2.webp',
  },
  {
    id:4,
    name: 'Frontend',
    pdf: '/certificates/frontEnd.webp',
  },
  {
    id:5,
    name: 'HTML - CSS',
    pdf: '/certificates/HTML.webp',
  },
  {
    id:6,
    name: 'React',
    pdf: '/certificates/react-1.webp',
  }
]

