import styles from '../common/font.module.css'
function BreakLine(props) {
    let type;
    switch(props.type){
        case "bold":{
            type="line_bold"
            break;
        }
        case "medium":{
            type="line_medium"
            break;
        }
        default:{
            type="line_medium"
            break;
        }
    }
  return (
    <>
    <hr className={styles[type]}/>
    </>
  );
}

export default BreakLine;
