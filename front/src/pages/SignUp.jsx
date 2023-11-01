import React, { useState } from 'react';
import axios from 'axios';
import GBSW from '../images/gbsw.jpg';
import Back from '../images/sonoma2.jpg'
import '../CSS/Sign.css';

function SignUp() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  const inputStyle = {
    outline: 'none',
    paddingLeft: '14px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '13px',
    width: '450px',
    height: '70px',
    margin: '7px',
    background: 'rgb(0,0,0,0)',
    border: '1px solid rgb(0,0,0,0)',
    borderBottom: '2px solid white',
    borderRadius: '4px',
    color: 'white',
    fontSize: '20px',
  };

  const border = {
    background: `url(${Back})`,
    padding: "35px",
    width: "700px",
    height: "530px",
    borderRadius: "60px",
    backdropFilter: "blur(90px)",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)"
  };

  const [formData, setFormData] = useState({
    username: '',  // 사용자 이름
    email: '', // 사용자 이메일
    password: '', // 사용자 비밀번호
  });

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
      const response = await axios.post('http://localhost:3090/api/sign/up', formData);
      console.log('회원가입 요청 성공:', response.data);
    } catch (error) {
      console.error('회원가입 요청 실패:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={border}>
        <h1 style={{ color: 'white', fontSize: '40px' }}>회원가입</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="input"
            name="name" // 스키마와 일치하도록 name 변경
            placeholder="아이디"
            style={inputStyle}
            value={formData.name}
            onChange={handleFormChange}
            required
          />
          <br />
          <input
            type="email"
            id="input"
            name="email"
            placeholder="이메일"
            style={inputStyle}
            value={formData.email}
            onChange={handleFormChange}
            required
          />
          <br />
          <input
            type="password"
            id="input"
            name="password"
            placeholder="비밀번호"
            style={inputStyle}
            value={formData.password}
            onChange={handleFormChange}
            required
          />
          <br />
          <br />
          <input type="submit" value="회원가입" className="button" />
          <br />
          <br />
          <p style={{marginTop: "2px", marginBottom: "10px", color: "white"}}>
            계정이 있으신가요? <b><a style={{textDecoration: "none", color: "white"}} href="./s_in"> 로그인</a></b>
          </p>
          <img src={GBSW} alt="logo" style={{ width: '60px' }} />
        </form>
      </div>
    </div>
  );
}

export default SignUp;