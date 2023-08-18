import { Link } from "react-router-dom";
import "./MyHeader.css";
import searchIcon from "../../assets/imgs/search.png";
import writeIcon from "../../assets/imgs/write.png";


function MyHeader() {
  // 검색 기능을 수행하는 함수
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    // 검색어 처리 로직을 여기에 추가하세요
    console.log("검색어:", searchTerm);
  };

  return (
    <div className="Header1" style={{background: "#ffffff"}}>
      <div className="Section1">
        <div className="Search">
          <input className="Search-box" 
            style={{borderRadius: 90,fontFamily: "Pretendard",outline: "none", color: "#333333", paddingLeft: 16,}}
            placeholder="한국에서 살아남는 법" 
            onChange={handleSearch}
          />
          <img className="Search-icon" src={searchIcon} alt="검색 아이콘"/>
        </div>
        <Link to={"/"} className="Logo"
          style={{left: 0,top: 5,position: "absolute",backgroundImage: "linear-gradient(to right, #3366FF, #EB2D2D)",WebkitBackgroundClip: "text",color: "transparent",fontSize: 32,fontFamily: "PyeongChang Peace",fontWeight: "700",wordWrap: "break-word", cursor: "pointer",
        }}
        >
          헬로코리아
        </Link>
        <Link to={"/login"} className="Sign"> 로그인 / 회원가입</Link>
      </div>
      
      <nav className="Header2" style={{ background: "#3366FF"}}>
        <ul className="Section2">
          <div className="LeftLinks">
            <Link to={"/"} className="Home">홈</Link>
            <div className="Red-circle" style={{color: "#EB2D2D"}}/>
            <Link to={"/PostDetail/자유"} className="Free">자유</Link>
            <Link to={"/PostDetail/유학생"} className="You">유학생</Link>
            <Link to={"/PostDetail/결혼이민자"} className="Wed">결혼이민자</Link>
            <Link to={"/PostDetail/북한이탈주민"} className="North">북한이탈주민</Link>
          </div>
          <div className="RightLinks">
            <Link to={"/write"} className="Write-btn" style={{background: '#ffffff' ,borderRadius: 90}}>
              <img className="Write-icon" src={writeIcon} alt="글쓰기 아이콘" />
              <div className="Write-text">글쓰기</div>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
    
  );
}

export default MyHeader;

