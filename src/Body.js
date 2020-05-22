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
    flexFlow: ["column nowrap", "column nowrap", "row nowrap", "row nowrap"],
    justifyContent: ["space-evenly"],
    alignItems: ["center", "center", "flex-start", "flex-start"],
    alignContent: "space-around",
  })
);

const bigDisplay = css(
  mq({
    display: ["none", "none", "flex", "flex"],
    backgroundColor: "#F1F0F0",
    flexFlow: "column nowrap",
    borderRadius: "1em",
    width: "65%",
    height: "auto",
    marginTop: "2em",
    marginLeft: "2em",
    marginBottom: "2em",
    marginRight: "1em",
  })
);

const skillDisplay = css(
  mq({
    display: ["none", "none", "flex", "flex"],
    backgroundColor: "#F1F0F0",
    flexFlow: "column nowrap",
    borderRadius: "1em",
    width: "20%",
    height: "auto",
    marginTop: "2em",
    marginLeft: "1em",
    marginBottom: "2em",
    marginRight: "2em",
  })
);

const cardStyleMobile = css(
  mq({
    display: ["flex", "flex", "none", "none"],
    flexFlow: ["column nowrap", "column nowrap"],
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

const buttonStyle = css(mq({ margin: ".1em" }));

function Body() {
  const [project, setProject] = useState("Python");

  return (
    <div className="body" css={bodyStyle}>
      <div className="bigDisplay" css={bigDisplay}>
        <div css={{ marginLeft: "1em", marginTop: "1em" }}>{project}</div>
        {(function () {
          switch (project) {
            case "Python":
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
            case "C++":
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
            case "C":
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
            case "MATLAB":
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
            case "AI":
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
      <div className="skill-full" css={skillDisplay}>
        <div css={{ marginLeft: "1em", marginTop: "1em" }}>Skills</div>
        <div css={skillListStyle}>
          <button onClick={() => setProject("Python")} css={buttonStyle}>
            Python
          </button>
          <button onClick={() => setProject("React")} css={buttonStyle}>
            React.js
          </button>
          <button onClick={() => setProject("C++")} css={buttonStyle}>
            C++
          </button>
          <button onClick={() => setProject("C")} css={buttonStyle}>
            C
          </button>
          <button onClick={() => setProject("MATLAB")} css={buttonStyle}>
            MATLAB
          </button>
          <button onClick={() => setProject("AI")} css={buttonStyle}>
            Machine Learning
          </button>
        </div>
      </div>
      <div className="skill" css={cardStyleMobile}>
        <div css={{ margin: "1em" }}>Skill</div>
        <div css={skillListStyle}>
          <button onClick={() => setProject("python")} css={buttonStyle}>
            Python
          </button>
          <button onClick={() => setProject("react")} css={buttonStyle}>
            React.js
          </button>
          <button onClick={() => setProject("c++")} css={buttonStyle}>
            C++
          </button>
          <button onClick={() => setProject("c")} css={buttonStyle}>
            C
          </button>
          <button onClick={() => setProject("matlab")} css={buttonStyle}>
            MATLAB
          </button>
          <button onClick={() => setProject("ai")} css={buttonStyle}>
            Machine Learning
          </button>
        </div>
      </div>
      <div className="projects" css={cardStyleMobile}>
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
