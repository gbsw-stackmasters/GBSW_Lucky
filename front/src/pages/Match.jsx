import React, { useState, useEffect } from 'react';
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
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    return `${year}년 ${month}월 ${day}일`;
  }

  const fortunes = [
    { content: '운세 내용1' },
    { content: '운세 내용2' },
    { content: '운세 내용3' },
    { content: '운세 내용4' },
    { content: '운세 내용5' },
    { content: '운세 내용6' },
    { content: '운세 내용7' },
    { content: '운세 내용8' },
    { content: '운세 내용9' },
    { content: '운세 내용10' },
    { content: '운세 내용11' },
    { content: '운세 내용12' },
    { content: '운세 내용13' },
    { content: '운세 내용14' },
    { content: '운세 내용15' },
    { content: '운세 내용16' },
    { content: '운세 내용17' },
    { content: '운세 내용18' },
    { content: '운세 내용19' },
    { content: '운세 내용20' },
    { content: '운세 내용21' },
  ];

  const [currentFortuneIndex, setCurrentFortuneIndex] = useState(0);
  const [showFortune, setShowFortune] = useState(false);
  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(getCurrentDate());
    }, 1000);

    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  const handleFortuneClick = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setCurrentFortuneIndex(randomIndex);
    setShowFortune(true);
  }

  const handleGoBack = () => {
    setShowFortune(false);
  }

  const currentFortune = fortunes[currentFortuneIndex];

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
              <p>{currentDate}</p>
              <p>{currentFortune.content}</p>
            </div>
            <button id="btn" onClick={handleGoBack} style={bt2}>
              뒤로 가기
            </button>
          </div>
        ) : (
          <input
            id="btn2"
            type="submit"
            value="내 운세 뽑기 !"
            style={bt}
            onClick={handleFortuneClick}
          />
        )}
      </div>
    </div>
  );
}

export default Match;
