import React from 'react';
import styles from './MySkills.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const MySkills = () => {
  return (
    <div className={styles.skillsBlock}>
      <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
        <h2 className={styles.title}>My skills</h2>
        <div className={styles.skills}>
          <Skill title={"HTML"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor tellus ultricies nibh consequat aliquet."}/>
          <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in erat sed mauris feugiat viverra. Class aptent taciti sociosqu ad litora torquent per conubia."}/>
          <Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor tellus ultricies nibh consequat aliquet. Curabitur in erat sed mauris feugiat viverra. Class aptent taciti sociosqu ad litora torquent per conubia."}/>
          <Skill title={"TS"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor tellus ultricies nibh consequat aliquet. Curabitur in erat sed mauris feugiat viverra. Class aptent taciti sociosqu ad litora torquent per conubia."}/>
          <Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor tellus ultricies nibh consequat aliquet. Class aptent taciti sociosqu ad litora torquent per conubia."}/>
        </div>
      </div>
    </div>
  );
}