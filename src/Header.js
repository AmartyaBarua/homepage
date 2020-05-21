/** @jsx jsx */ //need this for emotion to work with create-react-app
//used gitignore.io to generate .gitignore file

import React from "react";
import ReactDOM from "react-dom";
import { css, jsx } from "@emotion/core"; //need this instead of {css}
import facepaint from "facepaint";

const mq = facepaint([
  "@media(min-width: 420px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]); //do this if screen size is 420px or bigger and so on...

const headerStyle = css(
  mq({
    backgroundColor: "#000154",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    height: ["5em", "10em", "15em", "20em"], //media query working
  })
);

const Header = () => (
  <div className="header" css={headerStyle}>
    <div className="home">
      <a
        href="/index"
        className="link"
        css={{ color: "white", marginLeft: ".4em" }}
      >
        Home
      </a>
    </div>
    <div className="group">
      <a
        href="/github"
        className="github"
        css={{ color: "white", marginRight: ".4em" }}
      >
        GitHub
      </a>
      <a
        href="/contact"
        className="blog"
        css={{ color: "white", marginRight: ".4em" }}
      >
        Blog
      </a>
      <a
        href="/connect"
        className="connect"
        css={{ color: "white", marginRight: ".4em" }}
      >
        LinkedIn
      </a>
      <a
        href="/pictures"
        className="photos"
        css={{ color: "white", marginRight: ".4em" }}
      >
        Photography
      </a>
    </div>
  </div>
);

export default Header;
