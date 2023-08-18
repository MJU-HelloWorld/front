import React, { useState, useCallback } from "react";
import MyHeader from "../common/MyHeader";
import BoardSelect from "./BoardSelect.jsx";
import "./WritePage.css";
import CategorySelect from "./CategorySelect";
import TextArea from "./TextArea";
// import ImageUploader from "./ImageUploader";

function WritePage() {
  const [board, setBoard] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "image/default_image.png",
  });

  const canSubmit = useCallback(() => {
    return board !== "" && category !== "" && content !== "" && title !== "";
  }, [board, category, content, title]);

  const handleSubmit = useCallback(async () => {
    if (canSubmit()) {
      const formData = new FormData();
      formData.append("board", board);
      formData.append("category", category);
      formData.append("title", title);
      formData.append("content", content);
      formData.append("file", image.image_file);

      // 여기서 실제로 서버로 데이터를 전송하거나 필요한 작업을 수행할 수 있습니다.
    }
  }, [canSubmit, board, category, title, content, image.image_file]);

  return (
    <div className="App">
      <MyHeader></MyHeader>
      <div className="Whole">
        <div className="WriteBox">
          <p className="H1">글쓰기</p>
          <div className="Line" />

          <BoardSelect setBoard={setBoard} board={board} />
          <CategorySelect setCategory={setCategory} category={category} />
          <TextArea setTitle={setTitle} setContent={setContent} title={title} content={content} />
          {/* <ImageUploader setImage={setImage} preview_URL={image.preview_URL} /> */}
          <div className="Button-area">
            <button className="End-button" onClick={handleSubmit}>
              등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritePage;
