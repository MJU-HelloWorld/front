import React, { useState } from "react"
import Card from "./card.jsx";
import "./mainBox.scss";

const MainBox = ({ posts, notice }) => {
    const [slidePx, setSlidePx] = useState(0);

    const toPrev = () => {
        slidePx < 0 && setSlidePx(slidePx - 1025); // 너비에 계산해서 옆으로 슬라이스 하기
    };

    const toNext = () => {
        slidePx > -3075 && setSlidePx(slidePx + 1025);
    };
    if (!posts) return;
    return (
        <div className="mainBox">
            <p className="notice_board">{notice_board.title}</p>
            <ul className="post_list">
                {posts.map(post => (
                    <Film slide={slidePx} key={posts.id} post={post} />
                ))}
            </ul>
            <div
                className="prevBtn"
                onClick={toPrev}
                style={{ display: slidePx === 0 ? "none" : "" }}
            >
                <i className="fa-solid fa-chevron-left" />
            </div>
            <div
                className="nextBtn"
                onClick={toNext}
                style={{ display: slidePx === -3075 ? "none" : "" }}
            >
                <i className="fa-solid fa-chevron-right" />
            </div>
        </div>
    );
};

export default MainBox;