import React from 'react';
import styles from "./Work.module.scss"

type WorkPropsType = {
  style: any
  title: string
  description: string
}

export const Work = (props: WorkPropsType) => {
  return (
    <div className={styles.work}>
      <div className={styles.image} style={props.style}>
        <a className={styles.viewBtn}>Watch</a>
      </div>
      <div className={styles.workInfo}>
      <h3 className={styles.workTitle}>{props.title}</h3>
      <span className={styles.description}>{props.description}</span>
      </div>
    </div>)
}