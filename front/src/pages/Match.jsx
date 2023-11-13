import React, { useState, useEffect } from "react";
import "../CSS/Match.css";

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
};

const bt = {
  marginTop: "460px",
};

const bt2 = {
  marginTop: "200px",
  width: "320px",
  height: "50px",
};

function Match() {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    return `< ${year}년 ${month}월 ${day}일 >`;
  };

  const fortunes = [
    { content: "기숙사에서 라면을 먹지 마세요." },
    { content: "길을 걷다가 김신우를 만나지 마세요." },
    {
      content: "충분한 수면을 취하세요. 충분한 수면은 키 성장에 도움이 됩니다.",
    },
    { content: "아침을 드세요. 아침 섭취는 두뇌회전에 도움을 줍니다." },
    { content: "안경을 쓰지 마세요." },
    { content: "기숙사 밖을 나가지 마세요." },
    { content: "주변인들을 믿으세요." },
    { content: "선생님들의 말씀을 잘 따르세요." },
    { content: "수업시간에 자지 마세요." },
    { content: "연인을 사귀세요." },
    { content: "연인을 사귀지 마세요." },
    { content: "지나친 카페인은 몸에 독이 됩니다. 카페인을 줄이세요" },
    {
      content:
          "만약 당신이 스트레스를 받고 있다면 오늘 하루는 아무생각 없이 놀아보세요.",
    },
    { content: "過猶不及 (과유불급) 이란 말이 있습니다. 무엇이든 적당히..." },
    {
      content:
          "轉禍爲福 (전화위복) 이란 말이 있습니다. 노력한다면 불행을 행복으로 바꿀 수 있습니다. 위기라면 끝 없이 노력하세요.",
    },
    { content: "뭉치면 어떤 위기라도 해쳐 나갈 수 있을 것 입니다." },
    { content: "빚이 있다면 어서 갚으세요." },
    { content: "취업만이 답이 아닙니다." },
    { content: "자신의 장점을 살리세요. 모든 사람은 장점이 있습니다." },
    { content: "지금 잠시동안 힘들더라도 포기하지마세요." },
    {
      content:
          "벼는 익을수록 고개를 숙인다 라는 말이 있습니다. 기고만장 해지지 마세요.",
    },
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
  };

  const handleGoBack = () => {
    setShowFortune(false);
  };

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