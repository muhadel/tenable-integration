import React, { Component } from "react";
import { connect } from "react-redux";
import Popover from "../../components/uielements/popover";
import IntlMessages from "../../components/utility/intlMessages";
import userpic from "../../image/user1.png";

import authAction from "../../redux/auth/actions";
import TopbarDropdownWrapper from "./topbarDropdown.style";
import { Link } from "react-router-dom";

const { logout } = authAction;

class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.handelLogout = this.handelLogout.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }
  handelLogout = () => {
    this.props.logout();
  };

  render() {
    const content = (
      <TopbarDropdownWrapper className="isoUserDropdown">
        <Link className="isoDropdownLink" to="/dashboard/setting">
          <IntlMessages id="themeSwitcher.settings" />
        </Link>

        {/* <a className="isoDropdownLink" href="# ">
          <IntlMessages id="sidebar.feedback" />
        </a>
        <a className="isoDropdownLink" href="# ">
          <IntlMessages id="topbar.help" />
        </a> */}

        <span
          className="isoDropdownLink"
          onClick={this.handelLogout}
          style={{ cursor: "pointer" }}
        >
          <IntlMessages id="topbar.logout" />
        </span>
      </TopbarDropdownWrapper>
    );

    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        arrowPointAtCenter={true}
        placement="bottomLeft"
      >
        <div className="isoImgWrapper">
          <img alt="user" src={userpic} />
          <span className="userActivity online" />
        </div>
      </Popover>
    );
  }
}
export default connect(null, { logout })(TopbarUser);
