import styles from "./Title.module.scss";

export type TitlePT = {
  text: string
}

export const Title = (props: TitlePT) => {
  return (
    <div className={styles.titlePage}>
      <h2>{props.text}</h2>
    </div>
  );
};
