import styles from "./Contacts.module.css"
import stylesContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
  return (
    <div className={styles.contactsBlock}>
      <div className={`${stylesContainer.container} ${styles.contactsContainer}`}> 
        <h2 className={styles.titlePage}>Contacts</h2>
        <form className={styles.contactForm}>
          <input type="text" />
          <input type="text" />
          <textarea/>
        <button type="submit" className={styles.sbmtBtn}>Send</button>
        </form>
      </div>
    </div>
  );
};
