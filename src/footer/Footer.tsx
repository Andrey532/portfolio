import styles from "./Footer.module.css"
import stylesContainer from "../common/styles/Container.module.css"

export const Footer = () => {
  return (
    <div className={styles.footerBlock}>
      <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
        <h2 className={styles.titlePage}>Verstalo Verstalovich</h2>
        <div className={styles.ftrIcons}>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
        </div>
        <span className={styles.endTitle}>2023 nothing is protected</span>
      </div>
    </div>
  );
};
