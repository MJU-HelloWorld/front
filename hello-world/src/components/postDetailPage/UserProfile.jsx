import PostDetailText from "./PostDetailText";
import userIcon from "../../assets/imgs/userIcon.png";
import styles from "./boardStyle.module.css";
function UserProfile(props) {
  return (
    <>
      <div className={styles.userIcon}>
        <img src={userIcon} alt="userIcon"></img>
      </div>

      <div className={styles.userExplainContainer}>
        <div className={styles.userExplain}>
          <PostDetailText
            text={props.user.userName}
            type="userName"
          ></PostDetailText>
          <PostDetailText
            text={props.user.userType}
            type="userType"
          ></PostDetailText>
        </div>
        <PostDetailText
          type="boardTime"
          text={`${props.postTime}시간 전`}
        ></PostDetailText>
      </div>
    </>
  );
}

export default UserProfile;
