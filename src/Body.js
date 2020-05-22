/** @jsx jsx */ //need this for emotion to work with create-react-app

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { css, jsx } from "@emotion/core";
import facepaint from "facepaint";

import Collapsible from "./Collapsible";

const mq = facepaint([
  "@media(min-width: 420px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]);

const bodyStyle = css(
  mq({
    display: "flex",
    flexFlow: ["column nowrap"],
    justifyContent: ["space-evenly"],
    alignItems: ["center"],
    alignContent: ["space-around"],
  })
);

const cardStyle = css(
  mq({
    backgroundColor: "#F1F0F0",
    borderRadius: "1em",
    width: ["75%"],
    height: ["auto"],
    margin: ["1em"],
  })
);

const skillListStyle = css(
  mq({ margin: ".6em", display: "flex", flexFlow: ["row wrap"] })
);

const projectCard = css(
  mq({ backgroundColor: "white", width: "75%", height: "auto" })
);

function Body() {
  const [project, setProject] = useState("python");

  return (
    <div className="body" css={bodyStyle}>
      <div className="skill" css={cardStyle}>
        <div css={{ margin: "1em" }}>Skill</div>
        <div css={skillListStyle}>
          <button onClick={() => setProject("python")}>Python</button>
          <button onClick={() => setProject("react")}>React.js</button>
          <button onClick={() => setProject("c++")}>C++</button>
          <button onClick={() => setProject("c")}>C</button>
          <button onClick={() => setProject("matlab")}>MATLAB</button>
          <button onClick={() => setProject("ai")}>Machine Learning</button>
        </div>
      </div>
      <div className="projects" css={cardStyle}>
        <div css={{ margin: "1em" }}>Projects</div>
        {(function () {
          switch (project) {
            case "python":
              return (
                <div
                  css={{
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "space-around",
                  }}
                >
                  <Collapsible
                    title="Nobias Data Visualization App"
                    children="Single page application to visualize trends in user browsing
                    history"
                    link="/here"
                  />
                  <Collapsible
                    title="Kaggle CareerCon 2019"
                    children="Kaggle machine learning competition. 89% model accuracy."
                    link="/link"
                  />
                  <Collapsible
                    title="Animation Recommender System"
                    children="Netflix like recommender system. Made with Python."
                    link="/link"
                  />
                </div>
              );
            case "c++":
              return (
                <div
                  css={{
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "space-around",
                  }}
                >
                  <Collapsible
                    title="Predator Prey Simulation"
                    children="This simulation explores the mathematical model proposed by Alfred Lotka (1910) and Vito Volterra (1926)."
                    link="/here"
                  />
                </div>
              );
            case "c":
              return (
                <div
                  css={{
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "space-around",
                  }}
                >
                  <Collapsible
                    title="tail.c"
                    children="Tail function for the XV6 operating system released by MIT."
                    link="/here"
                  />
                </div>
              );
            case "matlab":
              return (
                <div
                  css={{
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "space-around",
                  }}
                >
                  <Collapsible
                    title="Delta Robot Inverse Kinematics"
                    children="Function to calculate input angles of a delta robot (for Lego NXT)."
                    link="/here"
                  />
                </div>
              );
            case "ai":
              return (
                <div
                  css={{
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "space-around",
                  }}
                >
                  <Collapsible
                    title="Kaggle CareerCon 2019"
                    children="Kaggle machine learning competition. 89% model accuracy."
                    link="/link"
                  />
                  <Collapsible
                    title="Animation Recommender System"
                    children="Netflix like recommender system. Made with Python."
                    link="/link"
                  />
                </div>
              );
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}

export default Body;
