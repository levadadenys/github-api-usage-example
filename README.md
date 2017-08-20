How to use: just run in terminal ``npm run start`` from the project's folder.


Single page application, which allows to get list of github users. 
Each row contains login, profile link (html_url) and avatar preview(100x100). 
Clicking on row results opening new route with bigger avatar version and additional user info from "https://api.github.com/users/:username”, such as name, followers, following, created_at, company, email, location, blog, bio.
Application allows browsing 100 users starting from random id. Also it`s possible to refresh users list, starting from random id.

Used technologies: ES6, React, Redux, React-Router, SASS, Create-react-app.