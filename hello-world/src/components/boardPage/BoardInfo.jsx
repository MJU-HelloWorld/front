function BoardInfo(props) {
    return (
      <div>
          <div>{"["} {props.type} : {props.count} {"]"}</div>
      </div>
    );
  }
  
  export default BoardInfo;
  