import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Match from './pages/Match';
import logo from './images/gbsw.jpg'
import Profile from './pages/Profile';


function App() {
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
      <Link to="/" style={navStyle} className="at"><strong>홈</strong></Link>
      <Link to="match" style={navStyle} className="at"><strong>운세 보기</strong></Link>
      <Link to="profile" style={navStyle} className="at"><strong>팀 소개</strong></Link>
      <Link to="s_in" style={navStyle3} className="at"><strong>로그인</strong></Link>
      <Link to="s_up" style={navStyle2} className="at"><strong>회원가입</strong></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/match" element={<Match />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/s_in" element={<SignIn />}/>
        <Route path="/s_up" element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
