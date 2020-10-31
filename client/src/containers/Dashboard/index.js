import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spring } from 'react-spring/renderprops';
// import Loader from "../../components/utility/loader";

import LayoutWrapper from '../../components/utility/layoutWrapper.js';

//Images
import inventoryImg from '../../image/inventory.png';
import userImg from '../../image/user.png';
import basketImg from '../../image/basket.png';
import cartImg from '../../image/cart.png';
import tagImg from '../../image/tag.png';
import couponImg from '../../image/coupon.png';
import unusedImg from '../../image/unused.png';
import calculatorImg from '../../image/calculator.png';
//Charts
// import HorizontalBarChart from "../../components/chart/HorizontalBarChart";
// import DoughnutChart from "../../components/chart/doughnutChart";
// import LineChart from "../../components/chart/lineChart";
//Actions
// import analyticsActions from "../../redux/analytics/actions";
// const { getDashboardAnalytics } = analyticsActions;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      analytics: {},
      loaded: false,
    };
  }
  // componentWillMount() {
  //   this.props.getDashboardAnalytics();
  // }
  componentWillReceiveProps(nextProps) {
    this.setState({
      analytics: nextProps.Analytics,
      loaded: true,
    });
  }
  render() {
    //Spinner
    // if (!this.state.loaded) {
    //   return (
    //     <div className="container">
    //       <div className="text-center m-4">
    //         <Loader />
    //       </div>
    //     </div>
    //   );
    // }

    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
    });
    // const { rowStyle, colStyle } = basicStyle;
    const wisgetPageStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      overflow: 'hidden',
    };

    return (
      <Spring from={{ opacity: 0, marginTop: -20 }} to={{ opacity: 1, marginTop: 0 }} config={{ delay: 100 }}>
        {(props) => (
          <LayoutWrapper style={props}>
            <div style={{ wisgetPageStyle }}>
              Dashboard
              {/* <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 row">
                    <div className="col-6 col-sm-6 col-lg-3">
                      <div className="analytics-box">
                        <img src={inventoryImg} alt="logo" width="30" style={{ float: 'left' }} />
                        <div className="analytics-box-single-title" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                          Inventory Count
                        </div>
                        <div className="clearfix" />
                        <div className="analytics-box-single-number">
                          <center>0</center>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-lg-3">
                      <div className="analytics-box">
                        <img src={userImg} width="30" alt="logo" style={{ float: 'left' }} />
                        <div className="analytics-box-single-title">Customer Count</div>
                        <div className="clearfix" />
                        <div className="analytics-box-single-number">
                          <center>0</center>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-lg-3">
                      <div className="analytics-box">
                        <img src={basketImg} width="30" style={{ float: 'left' }} alt=" logo" />
                        <div className="analytics-box-single-title">Avg Cart Size</div>
                        <div className="clearfix" />
                        <div className="analytics-box-single-number">
                          <center>{formatter.format(0)}</center>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-lg-3">
                      <div className="analytics-box">
                        <img src={cartImg} width="30" style={{ float: 'left' }} alt=" logo" />
                        <div className="analytics-box-single-title">Avg Cart Value</div>
                        <div className="clearfix" />
                        <div className="analytics-box-single-number">
                          <center>
                            {formatter.format(0)} <span className="currency">EGP</span>
                          </center>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-lg-3">
                      <div className="analytics-box">
                        <img src={tagImg} width="30" style={{ float: 'left' }} alt="discount logo" />
                        <div className="analytics-box-single-title">Discounts</div>
                        <div className="clearfix" />
                        <div className="analytics-box-single-number">
                          <center>
                            {formatter.format(0)} <span className="currency">EGP</span>
                          </center>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-lg-3">
                      <div className="analytics-box">
                        <img src={couponImg} width="30" style={{ float: 'left' }} alt="giftcard logo" />
                        <div className="analytics-box-single-title">GiftCards Issued</div>
                        <div className="clearfix" />
                        <div className="analytics-box-single-number">
                          <center>{0}</center>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-lg-3">
                      <div className="analytics-box">
                        <img src={unusedImg} width="30" style={{ float: 'left' }} alt="Unused giftcards logo" />
                        <div className="analytics-box-single-title">Unused GiftCards</div>
                        <div className="clearfix" />
                        <div className="analytics-box-single-number">
                          <center>
                            {0} <span className="currency">EGP</span>
                          </center>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-lg-3">
                      <div className="analytics-box">
                        <img src={calculatorImg} width="30" style={{ float: 'left' }} alt="tax logo" />
                        <div className="analytics-box-single-title">Tax Collected</div>
                        <div className="clearfix" />
                        <div className="analytics-box-single-number">
                          <center>
                            {formatter.format(0)} <span className="currency">EGP</span>
                          </center>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
           
            */}
            </div>
          </LayoutWrapper>
        )}
      </Spring>
    );
  }
}
// const mapStateToProps = ({}) => {
//   return {};
// };

export default connect(null, {})(Dashboard);
