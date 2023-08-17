import { useState } from "react";
import PostInfo from "./PostInfo";
import UserProfile from "./UserProfile";

import PostDetailText from "./PostDetailText";
import styles from "./boardStyle.module.css";

function PostDetailPage() {
  const [postData, setPostData] = useState({
    writer: "우직한머슴",
    category: "학업",
    title: "학교가기 싫어요",
    content:
      "방학 동안에 집에 나간 횟수도 한 자릿수인데, 학교를 가게된다면 전 매일 밖으로 나가야해요. 근데 너무 가기싫어요. 어쩌죠?",
    postTime: 3,
    viewCount: 17,
    likeCount: 5,
    dislikeCount: 3,
    commentCount: 2,
  });
  const [userData, setUserData] = useState({
    userName: "우직한머슴",
    userNation: "대한민국",
    userType: "현지인",
    userIcon: "기본",
  });

  return (
    <div className="App">
      <div className={styles.category}>
        <PostDetailText text={postData.category} type="category" />
      </div>

      <div className={styles.title}>
        <PostDetailText text={postData.title} type="title" />
      </div>

      <div className={styles.postInfo}>
        <div className={styles.userProfileContainer}>
          <UserProfile
            user={userData}
            postTime={postData.postTime}
          ></UserProfile>
        </div>
        <div>
          <PostInfo type="조회" count={postData.viewCount}></PostInfo>
          {" | "}
          <PostInfo type="추천" count={postData.likeCount}></PostInfo>
          {" | "}
          <PostInfo type="댓글" count={postData.commentCount}></PostInfo>
        </div>
      </div>

      <div className={styles.content}>
        <PostDetailText text={postData.content} type="content"></PostDetailText>
      </div>

      <PostInfo type="추천" count={postData.likeCount}></PostInfo>
      <PostInfo type="비추천" count={postData.dislikeCount}></PostInfo>
    </div>
  );
}

export default PostDetailPage;
