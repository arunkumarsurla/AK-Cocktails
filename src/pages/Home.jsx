import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="">
    <p>🥂 Cocktail Explorer – React Project
Description:

A sleek React-based web app that allows users to search and explore cocktails using the CocktailDB API. The project demonstrates React fundamentals, dynamic routing with react-router-dom, and live API data fetching. Users can view a list of matching cocktails based on a search term and navigate to a detailed page for each drink.

Key Features:

Search cocktails by name (real-time API integration).

View cocktail image, category, and details.

Dynamic routing for individual cocktail pages using React Router.

Graceful loading and error handling for a better UX.

</p>
      <h1 className="home-heading">
        It's Time For Some Cocktails 🍹
      </h1>
      <p className="home-subtext">
        Discover refreshing drinks, explore flavors, and sip in style.
      </p>
      <div className="homepage-images">
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29ja3RhaWx8ZW58MHx8MHx8fDA%3D" />
            <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ja3RhaWx8ZW58MHx8MHx8fDA%3D" />

      </div>

<div style={{margin:"25px"}}>
 <Link to="/products" className="view-cocktails">
        View Cocktails
      </Link>
</div>
     
    </section>
  );
};

export default Home;
