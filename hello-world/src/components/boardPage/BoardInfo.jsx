import BoardText from "./BoardText"
function BoardInfo(props) {
  let text = `${props.type} ${props.count}`
    return (
      <>
          <BoardText text = {text} type="boardInfo"></BoardText>
      </>
    );
  }
  
  export default BoardInfo;
  