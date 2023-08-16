import { useState } from "react";
import PostInfo from "./PostInfo";
import UserProfile from "./UserProfile";

import PostDetailText from "./PostDetailText";
import styles from "./boardStyle.module.css";

function PostDetailPage() {
  const data = [
    {
      userName: "우직한머슴",
      userNation: "대한민국",
      userType: "현지인",
      userIcon: "기본",
    },
    {
      category: "소통",
      title: "베트남 분들 중 한국에 취직하신 분 있나요?",
      content:
        "안녕하세요 여러분, 저는 한국에 유학 온 베트남 유학생입니다. 한국에서의 유학 생활을 시작한지 얼마 되지 않았지만, 여러 가지 고민들이 저를 동시에 감싸고 있습니다. 이렇게 커뮤니티에 글을 남겨보는 것은 처음이지만, 저와 같은 유학생들과 소통하고 싶어서 이렇게 글을 쓰게 되었습니다. 많이 댓글 달아주세요~",
    },
  ];
  const [postTime, setPostTime] = useState(1);
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

  return (
    <div className="App">
      <div className={styles.category}>
        <PostDetailText text={data[1].category} type="category"></PostDetailText>
      </div>

      <div className={styles.title}>
        <PostDetailText text={data[1].title} type="title"></PostDetailText>
      </div>

      <div className={styles.boardInfo}>
        <UserProfile user={user}></UserProfile>
        <PostInfo type="게시시간" count={postTime}></PostInfo>
        <div></div>
        <PostInfo type="조회" count={viewsCount}></PostInfo>
        {" | "}
        <PostInfo type="추천" count={likeCount}></PostInfo>
        {" | "}
        <PostInfo type="댓글" count={commentCount}></PostInfo>
      </div>

      <div className={styles.content}>
        <PostDetailText text={data[1].content} type="content"></PostDetailText>
      </div>

      <PostInfo type="추천" count={likeCount}></PostInfo>
      <PostInfo type="비추천" count={dislikeCount}></PostInfo>
    </div>
  );
}

export default PostDetailPage;
