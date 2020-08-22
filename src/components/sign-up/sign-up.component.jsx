import React from 'react';
import FormInput from '../form-input/form-input.component'

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            firstName : '',
            lastName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({firstName : '',lastName : '',email : '',password : '',confirmPassword : ''});
    }
    handleChange = (event) =>{
        const {value,name} = event.target;
        this.setState({[name] : value});
    }
    render(){
        return(
            <div className='sign-up'>
                <h1>I don't have account</h1>
                <span>Complete the formular to subscribe</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='first name' type='text' name='firstName' value={this.state.firstName} handleChange={this.handleChange} required/>
                    <FormInput label='last name' type='text' name="lastName" value={this.state.lastName} handleChange={this.handleChange} required/>
                    <FormInput label='email' type='email' name="email" value={this.state.email}  handleChange={this.handleChange} required/>
                    <FormInput label='password' type='password' name="password" value={this.state.password} handleChange={this.handleChange} required/>
                    <FormInput label='confirm passsword' name='confirmPassword'value={this.state.confirmPassword} type='password' handleChange={this.handleChange} required/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default SignUp;