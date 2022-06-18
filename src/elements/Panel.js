import React from 'react';
import '../App.css';

class Panel extends React.Component {
    render(){
        return(
            <div className='panel' id='panel'>
              <h1>Панель</h1>
              <div className='start -margin -flex'>
                <select className='select-pc'>
                </select>
                <button className='button-start -button'>Запустить пк</button>
                <button className='button-start -button'>Выключить пк</button>
              </div>
              <div className='start -margin -flex'>
                <select className='select-pc'>
                </select>
                <button className='button-start -button'>Запуск программ</button>
              </div>
            </div>
        )
    }
}
export default Panel;