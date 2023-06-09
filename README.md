# ai-api
REST API built with Node / Express

[![Netlify Status](https://api.netlify.com/api/v1/badges/e2d8c1b6-52d4-4863-bc6e-84917f862bb9/deploy-status)](https://app.netlify.com/sites/ai-api-clidstrom/deploys)

# Getting Started
Before you can run this project, you must have a valid API key from Open AI.


# Install
```sh
npm install express axios
```

# Run
```sh
node app.js
```

Remember to replace 'Bearer YOUR_OPENAI_API_KEY' with your actual API key.

Your API is now running and you can make POST requests to http://localhost:3000/chat.

NOTE:
In these workflow files, when you push to the main branch, it will:

Checkout your code
Install dependencies with npm install
Build your project with npm run build
Deploy your project to Netlify using the Netlify CLI