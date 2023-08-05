import React from "react";
import styles from "./MyWorks.module.scss";
import stylesContainer from "../common/styles/Container.module.css";
import { Work } from "./work/Work";
import { Title } from "../common/components/title/Title";
import  SocNetImg from "../assets/image/soc-net.jpg";
import  TodolistImg from "../assets/image/todolist.jpg";
import  PortfolioImg from "../assets/image/portfolio.png";

export const MyWorks = () => {

  const social = {
    backgroundImage: `url(${SocNetImg})`
  };

  const todolist = {
    backgroundImage: `url(${TodolistImg})`
  };

  const portfolio = {
    backgroundImage: `url(${PortfolioImg})`
  };

  return (
    <div className={styles.worksBlock}>
      <div className={`${stylesContainer.container} ${styles.worksContainer}`}>
        <Title text={"My works"} />
        <div className={styles.works}>
          <Work
            style={social}
            title={"Socil Nettwork"}
            description={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempore at soluta doloremque accusamus repellat. Consequuntur repellat sed ipsam quia."
            }
          />
          <Work
          style={todolist}
            title={"Todolist"}
            description={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At debitis voluptate natus consequuntur, eius velit?"
            }
          />
          <Work
          style={portfolio}
            title={"Portfolio"}
            description={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quaerat veniam possimus?"
            }
          />
          <Work
          style={social}
            title={"Restraunt site layout"}
            description={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque a culpa debitis esse amet ipsum voluptatibus, obcaecati fuga sapiente nesciunt dolorum incidunt iure."
            }
          />
        </div>
      </div>
    </div>
  );
};
