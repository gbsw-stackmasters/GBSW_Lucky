import React, { useState } from 'react';
import axios from 'axios';
import GBSW from '../images/gbsw.jpg';
import Back from '../images/sonoma2.jpg';
import '../CSS/Sign.css';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  } 

  const inputStyle = { 
    outline: "none",
    paddingLeft: "14px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "13px",
    width: "450px",
    height: "70px",
    margin: "7px",
    background: "rgb(0,0,0,0)",
    border: "1px solid rgb(0,0,0,0)",
    borderBottom: "2px solid white",
    borderRadius: "4px",  
    color: "white",
    fontSize: "20px"
  }
  
  const border = {
    background: `url(${Back})`,
    padding: "35px",
    width: "700px",
    height: "53 0px",
    borderRadius: "60px",
    backdropFilter: "blur(90px)",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)"
  }

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3090/api/sign/in', formData);
      console.log(response.status)


      if (response.status === 401) {
        console.log('로그인 실패: ' + response.data.message);
        alert('로그인 요청 실패. 확인 후 다시 시도하세요.');
      } else if (response.status === 200 && response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
        console.log('로그인 요청 성공:', response.data);
        alert('로그인에 성공하였습니다.');
        navigate('/');
      }
    } catch (error) {
      alert('로그인 요청 실패. 확인 후 다시 시도하세요.');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={border}>
        <h1 style={{color: "white", fontSize: "40px"}}>로그인</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="input"
            name="username"
            placeholder="아이디"
            style={inputStyle}
            value={formData.username}
            onChange={handleFormChange}
            required
          /><br/>
          <input
            type="email"
            id="input"
            name="email"
            placeholder="이메일"
            style={inputStyle}
            value={formData.email}
            onChange={handleFormChange}
            required
          /><br/>
          <input
            type="password"
            id="input"
            name="password"
            placeholder="비밀번호"
            style={inputStyle}
            value={formData.password}
            onChange={handleFormChange}
            required
          /><br/>
          <br/>
          <input type="submit" value="로그인" className="button"/>
          <p style={{marginTop: "20px", marginBottom: "15px", color: "white"}}>
            아직 계정이 없으신가요? <b><a style={{textDecoration: "none", color: "white"}} href="./s_up"> 회원가입</a></b>
          </p>
          <img src={GBSW} alt="logo" style={{width: "60px"}}/>
        </form>
      </div>
    </div>
  )
}

export default SignIn;
