import PostDetailText from "./PostDetailText";
function UserProfile(props) {
  return (
    <>
      <PostDetailText text={props.user.프로필사진} type="userName"></PostDetailText>
      <PostDetailText text={props.user.userName} type="userName"></PostDetailText>
      <PostDetailText text={props.user.유형} type="userName"></PostDetailText>
    </>
  );
}

export default UserProfile;
