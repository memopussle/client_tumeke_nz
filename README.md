
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



[View Live Site here](https://clothing-shop-overthesea.herokuapp.com/)

[View Client Side here](https://github.com/memopussle/client_tumeke_nz)

[View Server Side here](https://github.com/memopussle/tuimekenz_server)

Tui Meke NZ: A travel website that offers information on tours in Aotearoa and allows users to search for attractions, hotels and restaurants anywhere in the world. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

The technologies that I used to build this application include React, Nodejs, Express, Mongo Atlas  and fetch APIs. This project also consumes Google Map Services to display attractions, hotels and restaurants at desired locations.For design part, Material UI was used to achieve clean and consistent look. 


[![Technologies used](https://skills.thijs.gg/icons?i=react,nodejs,mongodb&theme=light)](https://skills.thijs.gg)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features
  <ol>
        <li><p>User-friendly navigation</p></li>
        <li><p>View of available tours</p></li>
        <li><p>Users can search for attractions, hotels and restaurants, which will show on Google Map.</p></li>
  </ol>


### Challenges

To complete this project, I needed to gain foundational knowledge in Axios fetching methods and Google Services in a short amount of time. There are a few features that I hope to implement in the future, and example of which is, applying REST APIs methods that allow the user to view all tours, add the wanted tours to cart, remove unwanted products from their cart and/or return to browsing if they wish to select more products before proceeding to checkout.

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
