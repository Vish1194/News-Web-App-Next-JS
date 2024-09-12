# Newz Wrld - A News Web App

## Live Server:
### You can access the live version of the News App at 

# https://news-wrld-app.web.app/

## Description:

The Newz Wrld App is a web application built using React.js with Next.js framework for the front-end and Next.js framework for the back-end API. It allows users to explore news articles from various categories and search for specific news topics.

### Key Features:

#### News Categories: Browse news articles organized into different categories (e.g., Technology, Sports, World, Entertainment, Science).
#### Search Functionality: Search for news articles using keywords or phrases.
#### User-Friendly Interface: Intuitive and easy-to-navigate design for a seamless user experience.
#### Responsive Design: Optimized for various screen sizes and devices.

## Technologies Used:

#### Front-End: React.js, Next.js
#### Back-End: Next.js (API)
#### Language : Javascript

## Getting Started:

### 1. Prerequisites: 
Ensure you have Node.js (version 14 or later) and npm (or yarn) installed on your system. You can download them from https://nodejs.org/.
### 2.Cloning the Repository:

    git clone https://github.com/<your-username>/<your-repository-name>.

### 3.Installing Dependencies:

Navigate to newapp_api project's root directory.
Run 

    npm install (or yarn install) 
    
to install the required dependencies for both the front-end and back-end projects. This will create a node_modules folder within project directory.

Similarly Navigate to newsapp_frontend project's root directory.
Run 

    npm install (or yarn install) 
    
to install the required dependencies for both the front-end and back-end projects. This will create a node_modules folder within project directory.

### 4.Environment Setup:

##### 1. Create a file named .env in the root directory of both newapp_api and newapp_frontend folders.
##### 2. In newapp_api/.env:
        Add NEWS_API_KEY=your_api_key.
Replace your_api_key with your own API key obtained from gnews.io ([invalid URL removed]). Sign up for an account to generate your API key.
##### 3. In newapp_frontend/.env:
        Add API_URL=http://localhost:3000 (or your back-end server's URL if deployed elsewhere).


## Running the Project

### Starting the Back-End API:

To navigate to the newapp_api folder:


    cd newapp_api

Start the back-end server using:

    npm run dev

This will typically start the API server on port 3000. You can access the API documentation or endpoints (if applicable) at http://localhost:3000/

### Starting the Front-End:

Open new Terminal/CLI

To navigate to the newapp_frontend folder:

    cd newapp_frontend

Start the front-end server using:

    npm run dev

This will typically start the front-end server on port 4000. You can access your front-end application at http://localhost:4000.


#### Something to say,
gnews.io provides only a limited number of requests, and I needed a way to cache top headlines for atleast 30 minutes to reduce the number of requests sent each time the web page is opened. So Next.js-based API is well suited as it provide a cache and revalidation mechanism easily and efficiently and it is more compatible with the Vercel cloud platform, so it will be easy to deploy the backend.
I deployed the frontend in firebase and backend in vercel, so keep it simple I created two isolated projects which is also easy to understand.

##### Have a great day 🌞.
