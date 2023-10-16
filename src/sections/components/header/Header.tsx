import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <header className={styles.HeaderContainert}>
      <img src="https://cdn.pixabay.com/photo/2017/05/12/15/16/hexagon-2307350_640.png" alt="user" className={styles['logo-right']} />
      <h1 >
        Mi pagina web
      </h1>
      <img src="https://cdn.pixabay.com/photo/2017/05/12/15/16/hexagon-2307350_640.png" alt="user" className={styles['logo-right']} />
    </header>
  )
}
