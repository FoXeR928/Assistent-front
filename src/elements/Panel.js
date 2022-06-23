import React from 'react';
import Select from 'react-select'
import '../App.css';
import Axios from 'axios';

const api='http://127.0.0.1:11000/'

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        user:'',
        selectProgs : [],
        selectPc : [],
        id_prog: "",
        id_pc: "",
        time:''
    }
    this.inputTime = this.inputTime.bind(this);
  }
  
  componentDidMount() {
    this.setState({user:this.props.user})
    this.getOptions(this.props.user)
  }
  getOptions(user){
    Axios.get(api+'all_prog?user='+user)
    .then(res => {
      const options = res.data.result.map(function(value){
        return {"value" : value, "label" : value}
      })
      this.setState({selectProgs: options})
    })
    Axios.get(api+'all_pc?user='+user)
    .then(res => {
      const options = res.data.result.map(function(value){
        return {"value" : value, "label" : value}
      })
      this.setState({selectPc: options})
    })
  }
  inputTime(event) {
    this.setState({time: event.target.value});
} 
  takePc = (selectedOption) => {
    this.setState({id_pc:selectedOption.label})
  }
  takeProg = (selectedOption) => {
    this.setState({id_prog:selectedOption.label})
  }
  startPc(){
    Axios.get(api+'wake_pc?user='+this.state.user)
    .then(res => {
      alert(res.data.result)
    })
  }
  offPc(){
    Axios.get(api+'off_pc?time=now&user='+this.state.user)
    .then(res => {
      alert(res.data.result)
    })
  }
  offPcTime(){
    Axios.get(api+'off_pc?time='+this.state.time+'&user='+this.state.user)
    .then(res => {
      alert(res.data.result)
    })
  }
  startProg(){
    Axios.get(api+'start_prog?programm='+this.state.id_prog+'&user='+this.state.user)
    .then(res => {
      alert(res.data.result)
    })
  }
    render(){
        return(
            <div className='panel' id='panel'>
              <h1>Панель</h1>
              <div className='start -margin -flex'>
                <Select className='select -pc' onChange={this.takePc} options={this.state.selectPc}/>
                <button className='button-start -button' onClick={()=>this.startPc()}>Запустить пк</button>
                <button className='button-start -button' onClick={()=>this.offPc()}>Выключить пк</button>
                <input value={this.state.time} onChange={this.inputTime} required className='input -input -margin' type='number'/>
                <button className='button-start -button' onClick={()=>this.offPcTime()}>Выключить пк</button>
              </div>
              <div className='start -margin -flex'>
                <Select className='select -prog' onChange={this.takeProg} options={this.state.selectProgs}/>
                <button className='button-start -button' onClick={()=>this.startProg()}>Запуск программ</button>
              </div>
            </div>
        )
    }
}
export default Panel;