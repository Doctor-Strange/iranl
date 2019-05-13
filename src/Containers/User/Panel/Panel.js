import React, { Component } from "react";
import classes from "./Panel.css";
import { withRouter, NavLink } from "react-router-dom";
import GearDashboar from "../../../Assets/GearDashboar.png";
import info from "../../../Assets/info.png";
import Userwallet from "../../../Assets/Userwallet.png";
import DashboardInfo from "../../../Components/DashboardInfo/DashboardInfo";

class Panel extends Component {
  render() {
    return (
      <div>
        <div className={classes.Quickaccess}>
          <NavLink to="/account/Wallet" className={classes.walet}>
            <img src={Userwallet} alt="Dashboard Icon" />
            <p>کیف پول</p>
          </NavLink>
          <a className={classes.info} href="">
            <img src={info} alt="Dashboard Icon" />
            <p>گزارشات</p>
          </a>
          <NavLink className={classes.accout} to="/account/EditProfile">
            <img src={GearDashboar} alt="Dashboard Icon" />
            <p>حساب کاربری</p>
          </NavLink>
        </div>
        <DashboardInfo />
        <div className={classes.panelControl}>
        <h3>آموزش ها</h3>        
          <div className={classes.teach}>
            <NavLink to="">+ آموزش ساخت حساب پرفکت مانی</NavLink>
            <NavLink to="">+ آموزش ساخت کیف پول دیجیتال</NavLink>
            <NavLink to="">+ آموزش پرداخت از درگاه پرفکت مانی</NavLink>
            <NavLink to="">+ آموزش شارژ حساب</NavLink>
            <NavLink to="">+ آموزش تسویه حساب</NavLink>
            <NavLink to="">+ تغییر آدرس کیف پول</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Panel);