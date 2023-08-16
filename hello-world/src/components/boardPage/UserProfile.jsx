import BoardText from "./BoardText";
function UserProfile(props) {
  return (
    <>
      <BoardText text={props.user.프로필사진} type="userName"></BoardText>
      <BoardText text={props.user.userName} type="userName"></BoardText>
      <BoardText text={props.user.유형} type="userName"></BoardText>
    </>
  );
}

export default UserProfile;
