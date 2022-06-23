import React from 'react';
import '../App.css';

class Profile extends React.Component {
    render(){
        return(
            <div className='profile' id='profile'>
              <h1>Профиль</h1>
              <form className='form -flex -column'>
                <h2>Замена пароля</h2>
                <label className='label -margin'>Пароль</label>
                <input required className='input -input -margin' type='text'/>
                <label className='label -margin'>Новый пароль</label>
                <input required className='input -input -margin' type='text'/>
                <label className='label -margin'>Повторить пароль</label>
                <input required className='input -input -margin' type='text'/>
                <button className='butoon-form -button'>Заменить</button>
              </form>
              <form className='form'>
                <h2>Добавлени программ</h2>
                <div className='path'>
                  <div className='-flex -column'>
                    <label className='label -margin'>Название</label>
                    <input required className='input -input -margin' type='text'/>
                  </div>
                  <div className='-flex -column'>
                    <label className='label -margin'>Путь</label>
                    <input required className='input -input -margin' type='text'/>
                  </div>
                  <button className='butoon-form -path -button'>Добавить</button>
                </div>
              </form>
            </div>
        )
    }
}
export default Profile;