# static_node_and_express_site-v1
 
This is a simple web application built with Node.js and Express to showcase a static portfolio site. It uses Pug as the template engine to render dynamic content.

## Table of Contents

- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [File Structure](#file-structure)
- [License](#license)

## Project Description

This project is a static web application that displays a portfolio of projects. It serves as a starting point for creating your own portfolio site. The application includes the following features:

- Displaying a list of projects with descriptions.
- Providing detailed project pages.
- An "About" page.
- Error handling for 404 pages.

## Installation

Clone the repository to your local machine:

   git clone https://github.com/yourusername/static_node_and_express_site.git

   Navigate to the project directory:

    cd static_node_and_express_site
    Install the project dependencies:

    npm install

Usage
To start the application, run the following command:

npm start
This will start the Express.js server, and you can access the site by opening a web browser and navigating to http://localhost:3000.



Routes
/ - The home page that displays the portfolio projects.
/about - The "About" page with information about the site.
/project/:id - Detailed project pages, where :id is the project ID.
404 Error Page - If a route is not found, a custom "Page Not Found" page is displayed.


File Structure
app.js - The main application file that configures Express and defines routes.
data.json - Contains project data used in the application.
public/ - Static files such as CSS, images, and the favicon.
views/ - Pug templates for rendering pages.
README.md - This documentation file.
.gitignore - Specifies files and directories to be ignored by Git.
package.json - Node.js project configuration.
package-lock.json - Records the exact versions of installed packages.


Custom CSS 
## Favicon

//use the favicon
//credits: https://expressjs.com/en/resources/middleware/serve-favicon.html
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

I have added a favicon to the site by installing the favicon and using it.

To see how I have done it check the credits
