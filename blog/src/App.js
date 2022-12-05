import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '전주 삼겹살 맛집';
  let [title, a] = useState(['남자 화장품 추천','전주 맛집','React 장인']);
  

  return (
    <div className="App">
      
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{title[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      
    </div>
  );
}

export default App;
