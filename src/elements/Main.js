import React from 'react';
import '../App.css';
import bar from '../img/menu-bar-icon-white.png'
import Panel from '../elements/Panel.js';
import Profile from '../elements/Profile.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            showPanel: false,
            showProfile: false,
            user:''
        }
        this.openPanel=this.openPanel.bind(this)
        this.openProfile=this.openProfile.bind(this)
    }
    componentDidMount() {
      this.setState({user:this.props.user})
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
            {this.state.showPanel?<Panel user={this.state.user}/>:null}
            {this.state.showProfile?<Profile user={this.state.user}/>:null}
          </main>
        </div> 
    )
    }
    
}
export default Main;