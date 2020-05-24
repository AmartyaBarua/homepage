/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";
import facepaint from "facepaint";

const mq = facepaint([
  "@media(min-width: 420px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]);

const billBoardStyle = css(
  mq({
    margin: ".6em",
    padding: ".6em",
    backgroundColor: "#F7A298",
    borderRadius: ".4em",
  })
);

const descriptionStyle = css(
  mq({
    marginLeft: ".6em",
    marginRight: ".6em",
    marginBottom: ".4em",
    marginTop: ".2em",
    padding: ".6em",
    backgroundColor: "#1F0F0",
    borderLeft: "solid 1px #F7A298",
    borderBottom: "solid 1px #F7A298",
    borderRight: "solid 1px #F7A298",
    display: "flex",
    flexFlow: "column nowrap",
  })
);

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div>
        <div
          onClick={(e) => this.togglePanel(e)}
          className="billBoard"
          css={billBoardStyle}
        >
          {this.props.title}
        </div>
        {this.state.open ? (
          <div className="description" css={descriptionStyle}>
            {this.props.children}
            <div css={{ marginTop: ".6em", marginBottom: ".6em" }}>
              <a href={this.props.link}>here</a>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapsible;
