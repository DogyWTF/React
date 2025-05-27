import { useState } from "react";
import CreateRecipe from "./components/create-recipe/CreateRecipe";
import Header from "./components/header/Header";
import RecipeItem from "./components/recipe-item/RecipeItem";
import { api } from "./store/api/api";
// import User from "./components/user/User";

// const userId = 1;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [queryTerm, setQueryTerm] = useState("");

  const {
    data: recipes,
    error,
    isLoading,
  } = api.useGetRecipesQuery(queryTerm);

  const handleSearch = (e) => {
    e.preventDefault();
    setQueryTerm(searchTerm);
  };

  return (
    <section>
      <Header />
      <CreateRecipe />
      {/*<User />*/}
      <div style={{ margin: "10px 0 0 10px" }}>
        <p>If you wanna find: </p>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter saerch term"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {isLoading ? (
          <h1 style={{ textAlign: "center", margin: "30px 0 0 0 " }}>
            Loading...
          </h1>
        ) : error ? (
          <h1 style={{ textAlign: "center", margin: "30px 0 0 0 " }}>
            {error.error}
          </h1>
        ) : recipes ? (
          recipes.map((recipe) => (
            <RecipeItem
              key={recipe.id}
              recipe={{ id: recipe.id, name: recipe.name, image: recipe.image }}
            />
          ))
        ) : (
          <h1 style={{ textAlign: "center", margin: "30px 0 0 0 " }}>
            Recipes not found
          </h1>
        )}
      </div>
    </section>
  );
}

export default App;
