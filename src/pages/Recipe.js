import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";
import axios from "axios";
import "./Index";
import Pagination from "../components/Pagination";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("steak");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const params = useParams();

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await axios.get(`http://localhost:5000/recipes/${query}`);
    console.log(response.data);
    setRecipes(response.data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const response = await axios.get(
      `http://localhost:5000/recipes/${params.id}`
    );
    console.log(response.data);
    setRecipes(response.data);
  };

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = recipes.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <Nav />
      <div className="recipe">
        <h1>Recipes</h1>
        <form onSubmit={getSearch} className="search">
          <div className="form">
            <button>
              <svg
                width="17"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="search"
              >
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  strokeWidth="1.333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <input
              className="input"
              placeholder="What are you looking for?"
              required=""
              type="text"
              value={search}
              onChange={updateSearch}
            />
            <button className="reset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <button className="searchBtn">
            <p>Seach</p>
          </button>
        </form>

        <RecipeList recipes={currentPost} />
        <Pagination
          totalPosts={recipes.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Recipe;
