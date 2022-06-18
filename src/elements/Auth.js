import React from 'react';
import '../App.css';
import Axios from "axios";

const api='http://127.0.0.1:11000/'

class Auth extends React.Component {
    constructor() {
        super();
        this.state={
            user:'',
            password:'',
            userIn:'',
            access:''

        }
        this.inputUser = this.inputUser.bind(this);
        this.inputPassword = this.inputPassword.bind(this);
        this.authIn = this.authIn.bind(this);
    }
    inputUser(event) {
        this.setState({user: event.target.value});
    }
    inputPassword(event) {
        this.setState({password: event.target.value});
    }
    authIn(event){
        event.preventDefault();
        Axios.get(api+'login?user='+this.state.user+'&password='+this.state.password)
        .then(res => {
            this.setState({userIn:(res.data).user});
            this.setState({access:(res.data).access})
        })
    }
    render(){
        return(
            <div className='conteiner-auth'>
                <form onSubmit={this.authIn} className='form-auth -flex -column'>
                    <h2>Авторизация</h2>
                    <label className='label -margin'>Логин</label>
                    <input value={this.state.user} onChange={this.inputUser} required className='input -input -margin' type='text'/>
                    <label className='label -margin'>Пароль</label>
                    <input value={this.state.password} onChange={this.inputPassword} required className='input -input -margin' type='text'/>
                    <button className='butoon-form -button'>Войти</button>
                </form>
            </div>
        )
    }
}
export default Auth;