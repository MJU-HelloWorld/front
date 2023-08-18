import React from 'react';
import MyHeader from '../common/MyHeader';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="App">
      <MyHeader></MyHeader>
      <div>난 홈페이지 부분입니다^^</div>
      <Link to="/sign-up">회원가입</Link>
    </div>
  );
}

export default Homepage;
