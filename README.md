<p align="center">
   <img width="300px"  src="./readme-images/banner.PNG" />
</p>
<h1 align="center">write-er ✍</h1>
<h3 align="center">A simple blogging application with React-markdown.
</h3>

<p align="center">
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt=react>
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt=tailwindcss>
    <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt=redux>
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt=react-router>
    <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt=jwt>
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt=express>
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt=node>
</p>
<p align="center">
  <a href="#about-the-project">About The Project</a> •
  <a href="#local-setup">Local Setup</a>
  
</p>

<p align="center">
   <img width="700px"  src="./readme-images/preview1.PNG" />
</p>
<p align="center">
   <img width="700px" src="./readme-images/preview2.PNG" />
</p>

## About The Project
Write-er is a minimal blogging website based on [react-markdown](https://www.npmjs.com/package/react-markdown).

Features implemented:

1. **Text editor** - Implemented using [react-markdown](https://www.npmjs.com/package/react-markdown). Users can create, edit and delete their posts.
2. **User authentication** - It uses [JWT(JSON Web Tokens)](https://jwt.io/) for authentication. Passwords are encrypted using [bcrypt](https://www.npmjs.com/package/bcrypt).
3. **Post filtering** - Filtering based on the topic tag of the post.

## Local Setup

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/AthN3090/write-er-app.git
# Go into the repository
$ cd write-er-app

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

---

## Backend API

The API is written in Express. It handles all the CRUD requests, User authentication requests with JSON webtoken and deals with AWS s3 to store images.<br>
Link - [Backend code repo - Express + Node](https://github.com/AthN3090/write-er-api)
