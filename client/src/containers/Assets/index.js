import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import { connect } from 'react-redux';
import { Layout, Table, Tag, Icon } from 'antd';
import 'antd/dist/antd.css';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import Loader from '../../components/utility/loader';
import assetsActions from '../../redux/assets/actions';
const { getAssets } = assetsActions;

const { Content } = Layout;

class AssetsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      assets: null,
    };
  }

  componentDidMount() {
    this.props.getAssets();
  }
  componentWillReceiveProps({ assets }) {
    console.log('assets', assets);

    this.setState({
      assets: assets,
      loaded: true,
    });
  }
  render() {
    const columns = [
      {
        title: () => (
          <center
            style={{
              margin: '0px',
              fontWeight: 500,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Name
          </center>
        ),
        dataIndex: 'name',
        key: 'name',
        width: '15%',
        render: (text) => {
          return (
            <span
              style={{
                fontWeight: 500,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {text ? text : null}
            </span>
          );
        },
      },
      {
        title: () => (
          <center
            style={{
              margin: '0px',
              fontWeight: 500,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Description
          </center>
        ),
        dataIndex: 'description',
        key: 'description',
        width: '25%',
        render: (text) => {
          return (
            <span
              style={{
                fontWeight: 500,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {text ? text : null}
            </span>
          );
        },
      },
      /*
      {
        title: () => (
          <div
            style={{
              margin: '0px',
              fontWeight: 500,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Description
          </div>
        ),
        dataIndex: 'description',
        key: 'description',
        width: '40%',
        render: (text) => {
          return (
            <span
              style={{
                fontWeight: 500,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {text === true ? (
                <Tag
                  style={{
                    fontWeight: 300,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                  color="green"
                >
                  Active
                </Tag>
              ) : null}
              {text === false ? (
                <Tag
                  style={{
                    fontWeight: 300,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                  color="red"
                >
                  Not Active
                </Tag>
              ) : null}
            </span>
          );
        },
      },*/
      {
        title: () => (
          <div
            style={{
              margin: '0px',
              fontWeight: 500,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Type
          </div>
        ),
        dataIndex: 'type',
        key: 'type',
        width: '11%',
        render: (text) => {
          return (
            <span
              style={{
                fontWeight: 500,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {text ? text : 'no type'}
            </span>
          );
        },
      },

      {
        title: () => (
          <div
            style={{
              margin: '0px',
              fontWeight: 500,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Actions
          </div>
        ),

        width: '5%',
        dataIndex: 'actions',
        render: (text, record) => {
          return (
            <div>
              <span
              // className="m-3"
              // onClick={() => this.showRestModal(record._id, record.name)}
              // disabled={editingKey !== ""}
              >
                <Icon
                  // onClick={() => this.handleClickOnManageAdmins(record._id)}
                  title="Manage Admins"
                  style={{ cursor: 'pointer' }}
                  type="setting"
                  theme="twoTone"
                />
              </span>
            </div>
          );
        },
      },
    ];
    console.log('assets', this.state.assets);

    return (
      <Spring from={{ opacity: 0, marginTop: -20 }} to={{ opacity: 1, marginTop: 0 }} config={{ delay: 100 }}>
        {(props) => (
          <LayoutWrapper style={props}>
            <Content style={{ padding: '0 20px', marginTop: '-10px' }}>
              {this.state.loaded === false ? (
                <Loader />
              ) : (
                <div
                  style={{
                    borderRadius: '10px',
                    boxShadow: '0 7px 12px 0 rgba(22,37,63,.09)',
                    background: '#fff',
                    padding: 24,
                    minHeight: 380,
                  }}
                >
                  <p
                    className="Montserrat mb-2"
                    style={{
                      fontWeight: 500,
                      fontSize: 30,
                      fontFamily: "'Montserrat', sans-serif",
                      color: 'rgba(0, 0, 0, 0.65)',
                    }}
                  >
                    Assets
                  </p>
                  <Table columns={columns} dataSource={this.state.assets} />
                </div>
              )}
            </Content>
          </LayoutWrapper>
        )}
      </Spring>
    );
  }
}

const mapStateToProps = ({ assets }) => {
  return {
    assets,
  };
};
export default connect(mapStateToProps, {
  getAssets,
})(AssetsTable);
