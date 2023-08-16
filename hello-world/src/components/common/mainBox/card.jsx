import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";
// 리액트 아이콘 npm 다운 받아서 사용
import {BsBookmarkX, BsFillBookmarkFill, FiThumbsUp, FaRegComment} from 'react-icons/fa';

const Card = ({post, slide}) => { const { notice_board, category, post_id, title, content, 
    nickname, profile_url, type, nationality, like_cnt, reply_cnt, scrap } = post;

    return (
        <li
            className="card"
            id="post_id"
            style={{
                transform: `translateX(${slide}px)`, // 슬라이드
                transition: "0.5s ease",
            }}
            >
        <Link to={`/${notice_board}/${category}/${post_id}`} className="card-wrapper">
            <div className="card-header"> /** 프로필 */
                <div className="profile"><img src={profile_url}/></div>
                <div className="nickname">{nickname}</div>
                <div className="nationality">{nationality}</div>
                <div className="type">{type}</div>
                <div className="scrap">{scrap}</div>
            </div>
            <div className="card-body-text"> /** 글 본문 */
                <div className="card-body-text-title">{title}</div>
                <div className="card-body-text-content">{content}</div>
            </div>
            <div className="card-footer"> /** 좋아요 댓글 갯수 */
                <div className="like_cnt">
                    <FiThumbsUp size={20} color="grey"/>0{like_cnt}</div>
                <div className="reply_cnt">
                    <FaRegComment size={20} color="grey"/>0{reply_cnt}</div>
            </div>
        </Link>
        </li>
    );
};

export default Card;