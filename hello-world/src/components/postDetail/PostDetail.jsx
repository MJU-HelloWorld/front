import MyHeader from "../common/MyHeader";
import { useParams } from "react-router";

function PostDetail() {
    const { kind } = useParams(); //{kind} 값 따라서 해당 게시판 데이터 가져오면 댐 
    return (
    <div className="App">
        <MyHeader></MyHeader>
        <div>
            { kind } 게시판 상세보기 페이지 입니다.
        </div>
        </div> 
    );
}

export default PostDetail;