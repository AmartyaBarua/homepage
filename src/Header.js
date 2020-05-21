/** @jsx jsx */ //need this for emotion to work with create-react-app
//used gitignore.io to generate .gitignore file

import React from "react";
import ReactDOM from "react-dom";
import { css, jsx } from "@emotion/core";
import facepaint from "facepaint";

import home from "./home.png";
import mark from "./GitHub-Mark-64px.png";

const mq = facepaint([
  "@media(min-width: 420px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]); //do this if screen size is 420px or bigger and so on...

const headerStyle = css(
  mq({
    backgroundColor: "#A09F9F",
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
      <a href="/index" className="link" css={{ marginLeft: ".4em" }}>
        <div css={homeIconSize}>
          <img
            src={home}
            alt="home"
            css={{ maxWidth: "100%", height: "auto" }}
          ></img>
        </div>
      </a>
    </div>
    <div className="group-mobile" css={groupStyleMobile}>
      <div css={{ width: "32px", height: "32px", marginRight: ".8em" }}>
        <a href="/github" className="github-mobile">
          <img
            src={mark}
            alt="Mark"
            css={{ maxWidth: "100%", height: "auto" }}
          ></img>
        </a>
      </div>
    </div>
    <div className="group" css={groupStyle}>
      <a
        href="/github"
        className="github"
        css={{
          color: "#262626",
          textDecoration: "none",
          marginRight: ".8em",
          fontSize: ["none", "none", "1.6em", "2em"],
        }}
      >
        GitHub
      </a>
      <a
        href="/contact"
        className="blog"
        css={{
          color: "#262626",
          textDecoration: "none",
          marginRight: ".8em",
          fontSize: ["none", "none", "1.6em", "2em"],
        }}
      >
        Blog
      </a>
      <a
        href="/connect"
        className="connect"
        css={{
          color: "#262626",
          textDecoration: "none",
          marginRight: ".8em",
          fontSize: ["none", "none", "1.6em", "2em"],
        }}
      >
        Connect
      </a>
    </div>
  </div>
);

export default Header;
