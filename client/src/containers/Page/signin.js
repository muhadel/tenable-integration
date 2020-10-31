import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import barq_logo from '../../image/barq_logo.png';
import barq_logo from '../../image/logo/n3.png';

//Loading Components
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button } from 'antd';

import SignInStyleWrapper from './signin.style';
//Auth actions
import authAction from '../../redux/auth/actions';
const { login } = authAction;

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    errors: {},
    redirectToReferrer: false,
    loginBtnLoading: false,
  };
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps({ auth: { isAuthenticated, errors } }) {
    //Check if authenticated
    if (this.props.auth.isAuthenticated !== isAuthenticated && isAuthenticated === true) {
      this.setState({ errors: {}, redirectToReferrer: true });
    }
    if (errors) {
      this.setState({ errors });
    }
  }
  handleSubmit = (e) => {
    // this.props.history.push('/dashboard');
    this.setState({
      loginBtnLoading: true,
    });
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //  Login action creator
        this.props
          .login(values)
          .then(() => {
            this.setState({
              loginBtnLoading: false,
            });
          })
          .catch(() => {
            this.setState({
              loginBtnLoading: false,
            });
          });
      }
    });
  };

  render() {
    const { errors } = this.state;
    console.log('errors', errors);

    const from = { pathname: '/dashboard' };
    const { redirectToReferrer } = this.state;

    //Rendering to dashboard after checking authorization
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    const {
      getFieldDecorator,
      // getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;

    // Only show error after a field is touched.
    const usernameError = (isFieldTouched('username') && getFieldError('username')) || errors.username;
    const passwordError = (isFieldTouched('password') && getFieldError('password')) || errors.password;

    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <img src={barq_logo} style={{ height: '35px', marginTop: '-9px', width: 'auto' }} alt="Barq Logo" />
            </div>

            <div className="isoSignInForm">
              {/* form here */}
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(<Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
                </Form.Item>
                <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                  )}
                </Form.Item>
                <Form.Item>
                  <Button
                    loading={this.state.loginBtnLoading}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    // disabled={hasErrors(getFieldsError())}
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

//validating the commeing actions and state
SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired
};

const SignInForm = Form.create({ name: 'signin_form' })(SignIn);

//Auth (which is in state = isLoggedIn)
export default connect(
  ({ Auth }) => ({
    auth: Auth,
  }),
  { login }
  // login
)(SignInForm);
