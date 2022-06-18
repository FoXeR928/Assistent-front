import React from 'react';
import '../App.css';
import bar from '../img/menu-bar-icon-white.png'
import Panel from '../elements/Panel.js';
import Profile from '../elements/Profile.js';
import userIn from '../App.js'

class Main extends React.Component {
    constructor() {
        super();
        this.state={
            showPanel: true,
            showProfile: false,
            user:userIn
        }
        this.openPanel=this.openPanel.bind(this)
        this.openProfile=this.openProfile.bind(this)
    }
    handleClick() {
        const wrapper = document.getElementById('nav');
        wrapper.classList.toggle('is-nav-open')
    }
    openPanel(){
        this.setState({showPanel:true})
        this.setState({showProfile:false})
    }
      openProfile(){
        this.setState({showPanel:false})
        this.setState({showProfile:true})
    }
    render(){
        return(
        <div className='-flex'>
          <div className='Navigation -flex'>
            <div className='nav -flex -column' id='nav'>
              <button onClick={this.openPanel} className='button-nav -button'>Панель</button>
              <button onClick={this.openProfile} className='button-nav -button'>Профиль</button>
            </div>
            <div className='bar-conteiner'>
              <img onClick={this.handleClick} src={bar} className='menu-bar' id='bar' alt=''/>
            </div>
          </div>
          <main className='main'>
            {this.state.showPanel?<Panel/>:null}
            {this.state.showProfile?<Profile/>:null}
          </main>
        </div> 
    )
    }
    
}
export default Main;