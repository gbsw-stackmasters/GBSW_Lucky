import React from 'react';
import '../CSS/Profile.css';
import RR from '../images/RL.png'
import NR from '../images/nest-logo.svg'
import MG from '../images/mg.png'
import AX from '../images/ax.png'
import PJ from '../images/profilej.jpeg'
import PCH from '../images/pch.png'
import PS from '../images/ps.jpeg'

const pfb = {
  margin: "auto"
}

const h2 = {
  color: "white",
  marginTop: "50px",
  marginRight: "45vw"
}

const h3 = {
  color: "white",
  marginTop: "50px",
  marginRight: "45vw",
  fontSize: "45px"
}

const pr = {
  fontSize: "40px"
}

const lgb = {
  marginTop: "35px",
  marginRight: "250px"
}


const lgf = {
  marginTop: "35px",
  marginRight: "250px"
}


function Profile() {
  return (
    <div>
      <div style={pfb}>
        <h1>팀 소개</h1>
        <h2 style={h2}>팀원 소개</h2>
        <div className="profile">
          <div className="pf1">
            <img src={PS} alt="" style={{borderRadius: "50%"}}/>
            <p style={pr}>김승환</p>
            <span>Backend</span>
            <br />
            <a id="al" href="https://github.com/silofn523">Github</a>
          </div>
          <div className="pf2">
            <img src={PCH} alt="" style={{borderRadius: "50%"}}/>
            <p style={pr}>최한울</p>
            <span>Frontend & Design</span>
            <br />
            <a id="al" href="https://github.com/chaos-0809">Github</a>
          </div>
          <div className="pf3">
            <img src={PJ} alt="" style={{borderRadius: "50%"}}/>
            <p style={pr}>유진승</p>
            <span>Frontend & Backend</span>
            <br />
            <a id="al" href="https://github.com/jinseung0327">Github</a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h2 style={h2}>사용한 기술 스택</h2>
        <h3 style={h3}>Frontend</h3>
        <img style={lgf} src={RR} alt=""/>
        <img style={lgf} src={AX} alt=""/>
        <h3 style={h3}>Backend</h3>
        <img style={lgb} src={NR} alt=""/>
        <img style={lgb} src={MG} alt=""/>
      </div>
      <br />
      <br />
      <span id="tm">Team by FS_GBSW</span>
      <br />
      <div id="b"></div>
    </div>
  );
}

export default Profile;
