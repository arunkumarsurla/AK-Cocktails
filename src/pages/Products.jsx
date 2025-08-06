import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("cocktail");

  const fetchCocktails = async (term) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
      );
      const data = await response.json();
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error("Error fetching cocktails:", error);
      setCocktails([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const term = searchTerm.trim();
    if (term === "") {
      setCocktails([]);
      setIsLoading(false);
      return;
    }
    fetchCocktails(term);
  }, [searchTerm]);

  return (
    <section className="product-section">
      <input
        type="text"
        placeholder="Search cocktails..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        value={searchTerm}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : cocktails.length === 0 ? (
        <p>No cocktails found. Try a different search.</p>
      ) : (
        <div className="product-items">
          {cocktails.map((item) => (
            <div className="product-card" key={item.idDrink}>
              <img src={item.strDrinkThumb} alt={item.strDrink} />
              <h2>{item.strDrink}</h2>
              <p>{item.strCategory}</p>
              <Link to={`/product/${item.idDrink}`} className="details-link">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
