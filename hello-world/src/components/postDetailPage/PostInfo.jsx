import BoardText from "./PostDetailText"
function PostInfo(props) {
  let text = `${props.type} ${props.count}`
    return (
      <>
          <BoardText text = {text} type="boardInfo"></BoardText>
      </>
    );
  }
  
  export default PostInfo
;
  