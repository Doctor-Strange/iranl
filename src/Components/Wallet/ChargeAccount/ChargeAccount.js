import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./ChargeAccount.css";

import perfect from "../../../Assets/user/perfectmoneygate.jpg";

class ChargeAccount extends Component {
  render() {
    return (
      <div className={classes.panelControl}>
        <h3>اتصال به درگاه :</h3>
        <div className={classes.Gates}>
          <img src={perfect} alt="درگاه پرفکت مانی" />
          <p>پرفکت مانی</p>
        </div>
        <div className={classes.teach}>
          <NavLink onClick={GotoTop} to="/" to="">
            + آموزش پرداخت از درگاه
          </NavLink>
          <NavLink onClick={GotoTop} to="/Learn" to="">
            + آموزش ساخت کیف پول پرفکت مانی
          </NavLink>
        </div>
      </div>
    );
  }
}

const GotoTop = () => {
  window.scrollTo(0, 0);
};

export default withRouter(ChargeAccount);
