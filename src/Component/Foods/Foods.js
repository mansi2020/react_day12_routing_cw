import { useEffect, useState } from "react";
import axios from "axios";
import "./Foods.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Foods = () => {
  let [foodData, setFoodData] = useState([]);

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
    <div className="food_container">
      {/* header */}
      <Header />

      {/* food container */}
      <div className="food_container_data">
        {foodData.map((item) => (
          <div className="food_container_div">
            <img src={item.strMealThumb} alt="" />
            <p>{item.strMeal}</p>
            {/* <a href={item.strYoutube}>Youtube Link</a><br /> */}
            <Link to={`/foods/${item.strMeal}`}>View Recipe</Link>
          </div>
        ))}
      </div>

      {/* footer */}
      {/* <Footer/> */}
    </div>
  );
};

export default Foods;
