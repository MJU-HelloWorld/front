import React from "react";
import MyHeader from "../common/MyHeader";
import BoardSelect from "./BoardSelect.jsx";
import "./WritePage.css";
import CategorySelect from "./CategorySelect";
import TextArea from "./TextArea";
import ImageUploader from "./ImageUploader";

function WritePage() {
  return (
    <div className="App">
      <MyHeader></MyHeader>
      <div className="Whole">
        <div className="WriteBox">
            <p className="H1">글쓰기</p>
            <div className="Line" />

            <BoardSelect></BoardSelect>
            <CategorySelect></CategorySelect>
            <TextArea></TextArea>
            <ImageUploader></ImageUploader>
            <div className="Button-area">
              <button className="End-button">
                등록하기
              </button>
            </div>

        </div>
      </div>
    </div>
  );
}

export default WritePage;
