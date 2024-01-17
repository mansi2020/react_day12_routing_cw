import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import axios from "axios";
import "./Foodsrecipe.css";
import Footer from "../Footer/Footer";

const Foodsrecipe = () => {
  let [foodData, setFoodData] = useState([]);

  let foodName = useParams();

  // get data
  useEffect(() => {
    const fetchdata = async () => {
      try {
        let response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?f=f"
        );
        setFoodData(response.data.meals);
        console.log(response.data.meals);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      {/* header */}
      <Header></Header>

      {/* food recipe details */}
      <div className="foodrecipe">
        {foodData.map((item) => {
          if (item.strMeal == foodName.id) {
            return (
              <div className="foodrecipedata">
                <img src={item.strMealThumb} alt="" />
                <div className="recipe_content">
                  <h1>{item.strMeal}</h1>
                  <h3>Recipe:</h3>
                  <p>{item.strInstructions}</p>
                  <a href={item.strYoutube}>Youtube Link</a>
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* footer */}
      <Footer></Footer>
    </>
  );
};

export default Foodsrecipe;
