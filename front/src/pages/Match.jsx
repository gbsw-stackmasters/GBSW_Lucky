import React, { useState } from 'react';
import '../CSS/Match.css';

const border = {
  backgroundColor: "white",
  marginTop: "5vh",
  margin: "auto",
  padding: "35px",
  width: "800px",
  height: "600px",
  borderRadius: "60px",
  backgroundSize: "cover",
  backdropFilter: "blur(60px)",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.9)",
}

const bt = {
  marginTop: "460px",
}

const bt2 = {
  marginTop: "200px",
  width: "320px",
  height: "50px"
}

function Match() {
  const [fortune, setFortune] = useState({ date: null, content: null });
  const [showFortune, setShowFortune] = useState(false);

  const handleFortuneClick = () => {
    const fakeFortune = "오늘의 운세 내용"; 

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${year}년 ${month}월 ${day}일`;

    setFortune({ date: formattedDate, content: fakeFortune });
    setShowFortune(true);
  }

  const handleGoBack = () => {
    setShowFortune(false);
  }

  return (
    <div>
      <h1>오늘의 운세</h1>
      <br />
      <div style={border}> 
        <h2>운세 자판기</h2>
        <br />
        {showFortune ? (
          <div id="fortune">
            <div id="des">
              <p>{fortune.date}</p>
              <p>{fortune.content}</p>
            </div>
            <button id="btn" onClick={handleGoBack} style={bt2}>뒤로 가기</button>
          </div>
        ) : (
          <input id="btn2" type="submit" value="내 운세 뽑기 !" style={bt} onClick={handleFortuneClick} />
        )}
      </div>
    </div>
  )
}

export default Match;
