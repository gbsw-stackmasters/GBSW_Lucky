import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Match from './pages/Match';
import logo from './images/gbsw.jpg';
import Profile from './pages/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 변수

  const handleLogout = () => {
    const confirmLogout = window.confirm('로그아웃하시겠습니까?'); // 로그아웃 확인 알림

    if (confirmLogout) {
      // 로그아웃 처리
      localStorage.removeItem('accessToken');
      setIsLoggedIn(false); // 로그인 상태 업데이트
    }
  };

  const navContainerStyle = {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center" 
  };

  const navStyle = {
    fontSize: "25px",
    display: "inline-block", 
    marginLeft: "20px",
    color: "rgb(66, 64, 64)"
  };

  const navStyle2 = {
    fontSize: "25px",
    display: "inline-block", 
    marginRight: "30px",
    color: "rgb(66, 64, 64)"
  };

  const navStyle3 = {
    fontSize: "25px",
    display: "inline-block", 
    marginLeft: "1050px",
    color: "rgb(66, 64, 64)"
  };

  const navStyle4 = {
    fontSize: "25px",
    display: "inline-block", 
    marginLeft: "1050px",
    marginRight: "25px",
    color: "rgb(66, 64, 64)"
  };

  const logoStyle = {
    marginTop: "14px",
    maxWidth: "55px", 
    maxHeight: "55px", 
    marginLeft: "15px"
  };

  return (
    <div className="App">
      <nav style={navContainerStyle}>
        <Link to="/" style={navStyle}>
          <img src={logo} alt="로고" style={logoStyle} />
        </Link>
        <Link to="/" style={navStyle}>
          <strong>홈</strong>
        </Link>
        <Link to="match" style={navStyle}>
          <strong>운세 보기</strong>
        </Link>
        <Link to="profile" style={navStyle}>
          <strong>팀 소개</strong>
        </Link>
        {isLoggedIn ? (
          <Link to="/" style={navStyle4} onClick={handleLogout}>
            <strong>로그아웃</strong>
          </Link>
        ) : (
          <>
            <Link to="s_in" style={navStyle3}>
              <strong>로그인</strong>
            </Link>
            <Link to="s_up" style={navStyle2}>
              <strong>회원가입</strong>
            </Link>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match" element={<Match />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/s_in"
          element={
            isLoggedIn ? (
              <Home /> // 이미 로그인된 상태이므로 홈 페이지로 리디렉션
            ) : (
              <SignIn setIsLoggedIn={setIsLoggedIn} /> // 로그인 페이지
            )
          }
        />
        <Route path="/s_up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
