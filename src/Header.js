/** @jsx jsx */ //need this for emotion to work with create-react-app
//used gitignore.io to generate .gitignore file

import React from "react";
import ReactDOM from "react-dom";
import { css, jsx } from "@emotion/core";
import facepaint from "facepaint";

import home from "./home.png";
import mark from "./GitHub-Mark-64px.png";
import linkedin from "./linkedin-logo.png";

const mq = facepaint([
  "@media(min-width: 420px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]); //do this if screen size is 420px or bigger and so on...

const headerStyle = css(
  mq({
    backgroundColor: "#D8C3A4",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    height: ["4em", "7em", "7em", "7em"], //media query working
  })
);

const groupStyle = css(
  mq({
    display: ["none", "none", "flex"],
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignContent: "center",
  })
);

const groupStyleMobile = css(
  mq({
    display: ["flex", "flex", "none"],
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignContent: "center",
  })
);

const homeIconSize = css(
  mq({
    width: ["32px", "32px", "64px"],
    height: ["32px", "64"],
    marginLeft: ".4em",
    marginBottom: ["none", "none", "2em"],
  })
);

const headerFontStyle = css(
  mq({
    color: "#514E4E",
    textDecoration: "none",
    marginRight: ".8em",
    fontSize: ["none", "none", "1.6em", "2em"],
    textShadow: "5px 5px 5px #8E8D8A",
  })
);

const homeFontStyle = css(
  mq({
    marginLeft: ".8em",
    backgroundColor: "#D8C3A4",
    color: "#514E4E",
    padding: ".2em",
    textDecoration: "none",
    textShadow: "5px 5px 5px #8E8D8A",
    fontSize: ["1.2em", "1.2em", "1.6em", "2em"],
  })
);

const Header = () => (
  <div className="header" css={headerStyle}>
    <div
      className="home"
      css={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <a href="/index" className="link" css={homeFontStyle}>
        Home
        {/* <div css={homeIconSize}>
          <img
            src={home}
            alt="home"
            css={{ maxWidth: "100%", height: "auto" }}
          ></img>
        </div> */}
      </a>
    </div>
    <div className="group-mobile" css={groupStyleMobile}>
      <div css={{ width: "32px", height: "32px", marginRight: ".8em" }}>
        <a href="https://github.com/AmartyaBarua" className="github-mobile">
          <img
            src={mark}
            alt="Mark"
            css={{ maxWidth: "100%", height: "auto" }}
          ></img>
        </a>
      </div>
      <div css={{ width: "32px", height: "32px", marginRight: ".8em" }}>
        <a
          href="https://www.linkedin.com/in/amartya-barua-01190118a"
          className="linkedin-mobile"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            css={{ maxWidth: "100%", height: "auto" }}
          ></img>
        </a>
      </div>
    </div>
    <div className="group" css={groupStyle}>
      <a
        href="https://github.com/AmartyaBarua"
        className="github"
        css={headerFontStyle}
      >
        GitHub
      </a>
      <a
        href="https://medium.com/@amartyabarua"
        className="blog"
        css={headerFontStyle}
      >
        Blog
      </a>
      <a
        href="https://www.linkedin.com/in/amartya-barua-01190118a"
        className="connect"
        css={headerFontStyle}
      >
        Connect
      </a>
    </div>
  </div>
);

export default Header;
