import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.coponent';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
}

handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({email : '',password : ''});
}
handleChange = (event) =>{
    const {value,name} = event.target;
    this.setState({[name] : value});
}
    render(){
        return(
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' type="email" name="email" handleChange={this.handleChange} value={this.state.email} required/>
                    <FormInput label='password' type="password" name="password" value={this.state.password} handleChange={this.handleChange} required />
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        {''}
                        Sign In with Google{''}
                        </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;