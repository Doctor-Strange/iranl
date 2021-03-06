import React, { Component } from "react";
import classes from "./menuItems.css";
import Hoc from "../../../Hoc/Hoc";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import {
  AuthRedux,
  getWalletInformation,
  getDataFromStorage,
  getWalletInformationFromStorage
} from "../../../Store/Action";

import Loader from "../../../UI/Loader";

// var CryptoJS = require("crypto-js");

class MenuItems extends Component {
  state = {
    perfectmoney: null,
    lukyCoin: "..."
  };

  onItemClick = () => {
    this.props.OnItemClick();
  };

  LOGOUT = () => {
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");
    sessionStorage.removeItem("cacheInfo");
    this.props.AuthRedux();
    this.props.OnItemClick();
  };

  componentDidMount = () => {
    // if  Auth is false and User Object is exist do the Automatic login
    if (!this.props.AuthorizeStatus && localStorage["user"]) {
      this.props.getDataFromStorage();
      // read Storage and put information in redux
    }
  };

  componentWillReceiveProps = props => {
    if (props.AuthorizeStatus && !sessionStorage["cacheInfo"]) {
      const { Token } = props.AuthData;
      this.props.getWalletInformation(Token);
    } else if (props.wallet) {
      const { TotalAmount, CoinCount } = props.wallet;
      this.setState({
        perfectmoney: TotalAmount,
        lukyCoin: CoinCount
      });
    } else if (props.AuthorizeStatus && sessionStorage["cacheInfo"]) {
      this.props.getWalletInformationFromStorage();
    }
  };

  render() {
    let Amount = this.state.perfectmoney !== null ? (
      this.state.perfectmoney
    ) : (
      <Loader
        styleProps={{
          width: "15px",
          height: "15px",
          margin: "0 5px",
          display: "inline-block",
          border: "2px solid transparent",
          borderTop: "2px solid #ffffff"
        }}
      />
    );
    const { AuthorizeStatus } = this.props;
    const Items = AuthorizeStatus ? (
      <Hoc>
        <li className={classes.difLi} onClick={this.onItemClick}>
          <NavLink to="/account">حساب کاربری</NavLink>
        </li>
        <li onClick={this.onItemClick}>
          <NavLink to="/account/Wallet">{Amount} سکه</NavLink>
        </li>
        <li onClick={this.onItemClick}>
          <NavLink to="/account/Charge">شارژ</NavLink>
        </li>
        <li onClick={this.onItemClick}>
          <NavLink to="/account/WithDrawal">برداشت</NavLink>
        </li>
        <li onClick={this.LOGOUT} className={classes.LogBtn}>
          خروج
        </li>
      </Hoc>
    ) : (
      <li onClick={this.props.OnDrawelClick} className={classes.LogBtn}>
        ورود / ثبت نام
      </li>
    );
    return <ul className={classes.menulist}>{Items}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    redirect: state.AUTH.redirect,
    AuthorizeStatus: state.AUTH.AuthorizeStatus,
    AuthData: state.AUTH.AuthData,
    wallet: state.WALLET.wallet
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AuthRedux: data => dispatch(AuthRedux(data)),
    getDataFromStorage: () => dispatch(getDataFromStorage()),
    getWalletInformation: data => dispatch(getWalletInformation(data)),
    getWalletInformationFromStorage: () =>
      dispatch(getWalletInformationFromStorage())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MenuItems)
);
