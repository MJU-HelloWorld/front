// import { useState } from 'react';
// import Card from './Card';
import styles from './mainBox.module.css';
import CardSlider from './CardSlider';

const MainBox = (props) => {
  const posts = [
    { id: 1, title: props.title, content: props.postInfo },
    { id: 2, title: props.title, content: props.postInfo },
    { id: 3, title: 'Hello World', content: '내일 해커톤 진짜 쌉에바' },
    { id: 4, title: '나 장소윤 아니다', content: '내일 해커톤 진짜 쌉에바' },
    { id: 5, title: props.title, content: props.postInfo },
    { id: 6, title: props.title, content: props.postInfo },
  ];

  // const maxIndex = Math.max(posts.length - 6, 0);

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNextClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  // };

  // const handlePrevClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  // };

  // const visiblePosts = posts.slice(currentIndex, currentIndex + 3);

  return (
    <div>
      <div className={styles.mainCotainer}>
        {/* <div className={styles.boardContainer}>
          <h2 className={styles.board}>자유 게시판</h2>
        </div> */}
        <h2 className={styles.board}>자유 게시판</h2>
        <CardSlider posts={posts} />
      </div>

      <div>
        <div className={styles.boardContainer}>
          <h2 className={styles.board}>유학생 게시판</h2>
        </div>
        <CardSlider posts={posts}/>
      </div>
    </div>

  );
};

export default MainBox;
