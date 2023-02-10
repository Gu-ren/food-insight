import React from "react";
import Home from "./Home";
import Recipe from "./Recipe";
import RecipeDetails from "./RecipeDetails";
import Signup from "./Signup";
import LogIn from "./LogIn";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/recipe" element={<Recipe />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/login" element={<LogIn />}></Route>
            <Route
              exact
              path="/recipeDetails/:id"
              element={<RecipeDetails />}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Index;
