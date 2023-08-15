// MyHeader.jsx

import React from "react";
import "./MyHeader.css";

function MyHeader() {
  // 검색 기능을 수행하는 함수
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    // 검색어 처리 로직을 여기에 추가하세요
    console.log("검색어:", searchTerm);
  };

  return (
    <div className="Header1">
      <div className="Section1">
        <div className="Search">
          <input className="Search-box" 
            style={{borderRadius: 90,fontFamily: "Pretendard",outline: "none", color: "#333333", paddingLeft: 16,}}
            placeholder="한국에서 살아남는 법" 
            onChange={handleSearch}
          />
          <img className="Search-icon" src="img/search.png" alt="검색 아이콘"/>
        </div>
        <div className="Logo"
          style={{left: 0,top: 5,position: "absolute",backgroundImage: "linear-gradient(to right, #3366FF, #EB2D2D)",WebkitBackgroundClip: "text",color: "transparent",fontSize: 32,fontFamily: "PyeongChang Peace",fontWeight: "700",wordWrap: "break-word", cursor: "pointer",
        }}
        >
          헬로코리아
        </div>
      <div
          className="Sign"
        >
          로그인 / 회원가입
        </div>
      </div>
      
      <div className="Header2" style={{ background: "#3366FF"}}>
        <div className="Section2">
          <div className="Home">홈</div>
          <div className="Red-circle" style={{color: "#EB2D2D"}}/>
          <div className="Free">자유</div>
          <div className="Wed">결혼이민자</div>
          <div className="You">유학생</div>
          <div className="North">북한이탈주민</div>

          <div className="Write-btn" style={{background: '#ffffff' ,borderRadius: 90}}>
            <img className="Write-icon" src="img/write.png" alt="글쓰기 아이콘" />
            <div className="Write-text">글쓰기</div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default MyHeader;

