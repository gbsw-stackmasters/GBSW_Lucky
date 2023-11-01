import React from 'react';
import '../CSS/Home.css'

function Home() {
  return (
    <div>
      <div id="main">
        <img
          id="sim"
          src="https://i.namu.wiki/i/aFotrUV4w6cnH16pltrM_CHCjr774x7LpXsu7bh4uKPfdoWhVpPBbuowjFY9wyzx_lMI9PuKWipURDpu9nybPg.webp"
          alt=""
        />
        <div>
          <h1>경소고 운세 사이트</h1>
          <div>
            <a href="/s_up" id="s">
              <div>
                <p>회원가입</p>
              </div>
            </a>
            <a href="/s_in">
              <div>
                <p>로그인</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
