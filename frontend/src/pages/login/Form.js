import React from 'react';
import styled from 'styled-components';
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import './form.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AuthActionsCreator } from 'Actions/auth';
const FormItem = Form.Item;



// import * as AuthActionCreators from './AuthActionCreators'

const StyledCard = styled(Card)`
	width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 100px;
    justify-content: center;
`;

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
	  console.log(this.props.AuthActions);
	  
	this.props.AuthActions.signin();
	  
	//  this.props.signin();
	  
	//  console.log(this.props);
	//  const { AuthActionCreators, dispatch } = this.props;
	//  console.log('dispatch', dispatch);
	  
	// console.log(AuthActionCreators);
	// dispatch(AuthActionCreators.signin());
  }
  

  render() {
	console.log(this.props);
    return (
		<StyledCard title="로그인">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
         
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          
        </FormItem>
        <FormItem>
         
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
         )}
        </FormItem>
        <FormItem>
         
          <a className="login-form-forgot" href="">Forgot password</a>
		</FormItem>
		<FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>

          Or <a href="">register now!</a>
        </FormItem>
      </Form>
			</StyledCard>
    );
  }
}
// const WrappedLoginForm = Form.create()(LoginForm);
// export default WrappedLoginForm;

const mapStateToProps = (state) => ({
 
})

const mapDispatchToProps = (dispatch) => ({
	AuthActions: bindActionCreators(AuthActionsCreator,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);


// const WrappedLoginForm = Form.create()(LoginForm);

