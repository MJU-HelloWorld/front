// import React from "react";
// import { Link } from "react-router-dom";
import styles from './card.module.css';

// 리액트 아이콘 npm 다운 받아서 사용
// import {
//   BsBookmarkX,
//   BsFillBookmarkFill,
//   FiThumbsUp,
//   FaRegComment,
// } from "react-icons/fa";

const Card = (props) => {

  return (
    <div className={styles.postCard}>
      <div className={styles.title}>
        {props.title}
      </div>
      {/* <hr/> */}
      <div className={styles.content}>
        {props.content}
        
      </div>
      
    </div>
  );
};

export default Card;
