import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CocktailDetail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCocktailDetails = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setCocktail(data.drinks ? data.drinks[0] : null);
    } catch (error) {
      console.error("Error fetching cocktail details:", error);
      setCocktail(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktailDetails();
  }, [id]);

  if (isLoading) return <p>Loading details...</p>;

  if (!cocktail) return <p>No cocktail found.</p>;

  return (
    <div className="product-detail"  style={{display:"flex", flexDirection:"row",margin:"20px",justifyContent:"center",alignItems:"center"}}>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{width:"25vw",height:"25vw"}}/>
      <div style={{margin:"20px",textAlign:"center",justifyContent:"center",alignItems:"center"}}>
      <h1>{cocktail.strDrink}</h1>
      <p><strong>Category:</strong> {cocktail.strCategory}</p>
      <p><strong>Alcoholic:</strong> {cocktail.strAlcoholic}</p>
      <p><strong>Glass:</strong> {cocktail.strGlass}</p>
      <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>
      <Link to="/products" className="back-link">← Back to products</Link>
      </div>
     
    </div>
  );
};

export default CocktailDetail;
