import { useFavorites } from "../../hooks/useFavorites";
import styles from "./Header.module.css";

export default function Header() {
  const favorites = useFavorites();
  return <header className={styles.header}><span>favorites: {favorites.length}</span></header>;
}
