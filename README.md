
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#challenges">Challenges</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

https://user-images.githubusercontent.com/91854884/183329906-a6972ed3-67f2-4210-9398-aad9351970f9.mp4



[View Live Site here](https://tumekenz.herokuapp.com/)

[View Client Side here](https://github.com/memopussle/client_tumeke_nz)

[View Server Side here](https://github.com/memopussle/tuimekenz_server)

Tui Meke NZ: A travel website that offers information on tours in Aotearoa and allows users to search for attractions, hotels and restaurants anywhere in the world. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
 

- [React](https://reactjs.org/)

- [NodeJS](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [MongoDB Atlas](https://www.mongodb.com/atlas/database)

- [Google Cloud Console](https://console.cloud.google.com/)

- [Redux-toolkit](https://redux-toolkit.js.org/)

- [Material UI](https://mui.com/)

I used React mainly for displaying the core of the project. To call REST API, I used NodeJS, Express, and store the data on MongoDB Atlas. Google Cloud Console services was used for google map and display attractions, hotels, restaurants on the map. To simplify data fetching methods, I used RTK Query from redux-toolkit and Material-UI to enhance the overall looking and design. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features
  <ol>
        <li><p>User-friendly navigation</p></li>
        <li><p>View of available tours</p></li>
        <li><p>Users can search for attractions, hotels and restaurants, which will show on Google Map</p></li>
        <li><p>For now, the user can view all tours, and create, update and delete the selected tours. But soon, I will implement an authorization that only allows the company to update the tours on the website.</p></li>
  </ol>


### Challenges

This is an ongoing project where I hope to implement more features in the future as I progress throughout my course and other personal learnings. I face a couple of challenges along the project:
- How to pass properties from parent components to children components
- How to fetch requests from server side to client side with a clean and simple writing

#### Solution/Workaround
- **Properties Passing**: I have to figure out how to make properties available Because some components need to use/share the same states. Due to the vanilla ReactJS nature that states can't be shared within same-level components, I have raised states to be on parent components. It works perfectly fine if I only want to pass props down to 1-2 levels. However, if there are more than 3levels of children components that need to use/share the same properties ( which is known as prop drilling in React), I would have opted out of this level-raising solution and gone with Context API or redux-toolkit to create global states.
- **Fetch requests from the server-side**: To create, update and delete tours on the tour page, I need to write requests in NodeJS and call those requests on the client-side. My first option is to use the standard Fetch method with async/await. It's working but complicated, lengthy, and not scalable in the long run. My second thought is to use redux, which I'm learning, but it takes a while to practice and understand fully. Therefore I choose redux-toolkit - modern Redux with custom hooks API, which is easier to learn and simplifies data fetching logic. With Redux-toolkit, I created a store that wraps the application with APIs, Redux-toolkit will take care of complicated process behind the scenes, make it clean and scalable.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

These are instructions on how you may set up this project locally.

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/memopussle/tuimekenz_server.git
   git clone https://github.com/memopussle/client_tumeke_nz.git
     //server and client folder are in seperate repositories
   ```
2. Install npm packages. Open 2 terminals: one terminal is for client side and the other is for server side. Install npm packages on both sides.

- Install npm package in client side

   ```sh
   
   npm install
   
   ```
- Install npm package in server side
   
   ```sh
   
   npm install
   ```
3. Create an .env file in client side. and insert your own google API key and Travel Advisor API key like below:

   ```js
   REACT_APP_GOOGLE_MAPS_API_KEY= YOUR_GOOGLE_MAPS_API_KEY
   REACT_APP_RAPID_API_TRAVEL_API_KEY= YOUR_RAPID_API_TRAVEL_ADVISOR_KEY
   ```


4. Start server side
   ```sh
   npm run dev
   ```
   
 5. start client side
 ```sh
 npm start
 
 ```
 
<p>Open http://localhost:5000 with your browser to see server side.</p>
<p>Open http://localhost:3000 with your browser to see client side.</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
[Thu Giang](mailto:xanhtham.cuc@gmail.com?subject=[GitHub]%20Source%20Han%20Sans)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
