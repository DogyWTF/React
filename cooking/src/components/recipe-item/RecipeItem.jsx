import styles from "./RecipeItem.module.css";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";

function RecipeItem({ recipe }) {
  const favorites = useFavorites();
  const { toggleFavorites } = useActions();

  const isExist = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      <img src={recipe.image} alt={recipe.name} width={100} />
      <div>
        <h3>{recipe.name}</h3>
        <button onClick={() => toggleFavorites(recipe)}>
          {isExist ? "Remove from" : "Add to favorites"}
        </button>
      </div>
    </div>
  );
}

export default RecipeItem;
