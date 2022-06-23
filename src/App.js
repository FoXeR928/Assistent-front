import React from 'react';
import './App.css';
import Main from './elements/Main.js';
import Admin from './elements/Admin'
import Axios from "axios";

const api='http://127.0.0.1:11000/'

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state={
      showAuth:true,
      showLogin:false,
      showAdmin:false,
      user:'',
      password:'',
      message:'',
      userIn:''
    };
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
    event.preventDefault()
    Axios.get(api+'login?user='+this.state.user+'&password='+this.state.password)
    .then(res => {
      if(res.data.access==='user'){
        this.setState({showLogin:true})
        this.setState({showAuth:false})
        this.setState({userIn:res.data.user})
      }
      else if(res.data.access==='admin'){
        this.setState({showAdmin:true})
        this.setState({showAuth:false})
        this.setState({userIn:res.data.user})
      }
      else{
        alert('Неверный логин или пароль')
      }
    })
  }
  render (){
    return(
      <body>
        {this.state.showAuth?<div className='conteiner-auth'>
                <form onSubmit={this.authIn} className='form-auth -flex -column'>
                    <h2>Авторизация</h2>
                    <label className='label -margin'>Логин</label>
                    <input value={this.state.user} onChange={this.inputUser} required className='input -input -margin' type='text'/>
                    <label className='label -margin'>Пароль</label>
                    <input value={this.state.password} onChange={this.inputPassword} required className='input -input -margin' type='text'/>
                    <button className='butoon-form -button'>Войти</button>
                </form>
            </div>:null}
        {this.state.showLogin?<Main user={this.state.userIn}/>:null}
        {this.state.showAdmin?<Admin user={this.state.userIn}/>:null}
      </body>
    )
  }
}

export default App;
