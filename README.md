# react_node_starter_app
Basic starter react app

For the backend logic install the express dependency:

    npm i express
    
Start it up from root folder:

    npm install
    npm start
    
Install packages for react front end. Move into the correct directory and start it up:

    cd client
    npm install
    npm start
    
Visit the site in the browser.

    http://localhost:3000
    
You should see a boilerplate React page show up (Note: ignore the "profile-page" in the link, any path after localhost:3000 will take you to the same page, due to the routing logic in App.js).

![Client](https://github.com/amnolan/react_node_starter_app/blob/main/screenshots/screenshot_client.png)

Now try going to:

    http://localhost:3001/api

You should see:

    
    {"message":"Hello from server!"}
    
![Server](https://github.com/amnolan/react_node_starter_app/blob/main/screenshots/screenshot_server.png)
