import { useState } from "react";
import BoardInfo from "./BoardInfo";
import UserProfile from "./UserProfile";
import BoardDislike from "./BoardDislike";
import BoardContent from "./BoardContent";

function BoardPage() {
  const [postTime, setPostTime] = useState(1)
  const [viewsCount, setViewsCount] = useState(160);
  const [likeCount, setLikeCount] = useState(3);
  const [dislikeCount, setDislikeCount] = useState(1);
  const [commentCount, setCommentCount] = useState(1);
  const [user, setUser] = useState({
    userName: "이름없음",
    국적: "미분류",
    유형: "미분류",
    프로필사진: "기본",
  });
  const [boardContent, setBoardContent] = useState("여기는 알찬 게시글 내용입니다~")

  return (
    <div className="App">
      <h1>카테고리이름</h1>
      <hr />

      <h2>게시글 제목입니다.</h2>
      <hr />
      
      <div>
        <UserProfile user={user}></UserProfile>
        <BoardInfo type="게시시간" count={postTime}></BoardInfo>
        <BoardInfo type="조회" count={viewsCount}></BoardInfo>
        <BoardInfo type="추천" count={likeCount}></BoardInfo>
        <BoardInfo type="댓글" count={commentCount}></BoardInfo>
      </div>
      
      <hr />
      <div>
        <BoardContent text={boardContent}></BoardContent>
      </div>
      <BoardInfo type="추천" count={likeCount}></BoardInfo>
      <BoardInfo type="비추천" count={dislikeCount}></BoardInfo>
    </div>
  );
}

export default BoardPage;
