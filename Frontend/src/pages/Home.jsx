import React from "react";
import { useNavigate } from "react-router-dom";
import Recipeitems from "../comp/Recipeitems";

export const Home = () => {
  const navigate=useNavigate();
  return (
    <>
      <section className="home">
        <div className="left">
          <h1>Delicious Recipes</h1>
          <h5>
            Discover a world of culinary delights with our collection of
            delicious recipes. From quick and easy meals to gourmet dishes, we
            have something for every taste and occasion. Start cooking today and
            bring joy to your table!
          </h5>
          <button onClick={()=>navigate("/addRecipe")}>Share Your Recipe</button>
        </div>
        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjaXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            alt="Delicious Food"
            width="320px"
            height="300px"
          />
        </div>
      </section>
       
      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d4f6e8"
            fill-opacity="1"
            d="M0,288L21.8,282.7C43.6,277,87,267,131,250.7C174.5,235,218,213,262,170.7C305.5,128,349,64,393,37.3C436.4,11,480,21,524,42.7C567.3,64,611,96,655,112C698.2,128,742,128,785,138.7C829.1,149,873,171,916,176C960,181,1004,171,1047,144C1090.9,117,1135,75,1178,90.7C1221.8,107,1265,181,1309,176C1352.7,171,1396,85,1418,42.7L1440,0L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="recipe">
        <Recipeitems />
      </div>
     
    </>
  );
};
