import styles from '../common/font.module.css'
function BoardText(props) {
  let textType = "styles.textContent"
 
  switch(props.type){
    case "category": {
      textType = "textCategory"
      break;
    }
    case "title": {
      textType = "textTitle"
      break;
    }
    case "content": {
      textType = "textContent"
      break;
    }
    case "userName": {
      textType = "textUserName"
      break;
    }
    case "boardTime": {
      textType = "textBoardTime"
      break;
    }
    case "boardInfo": {
      textType = "textBoardInfo"
      break;
    }
    default:{
      textType ="textContent"
      break;
    }
  }

  return <>
    <span className={styles[textType]}>{props.text}</span>
  </>;
}

export default BoardText;

