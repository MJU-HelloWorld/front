function UserProfile(props) {
    return (
      <>
      <span>{props.user.프로필사진}</span>
      <b>{props.user.userName}</b>
      <span>{props.user.유형}</span>
      
      </>
    );
  }
  
  export default UserProfile;
  