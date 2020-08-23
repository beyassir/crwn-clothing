import React from 'react';
import FormInput from '../form-input/form-input.component';
import { auth , createUserProfileDocument } from '../../firebase/firebase.utils' 

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            });
        }catch(error){
            console.log(error);
        }

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
                    <FormInput label='displayName' type='text' name='displayName' value={this.state.displayName} handleChange={this.handleChange} required/>
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