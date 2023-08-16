import React from "react";
import MyHeader from "../common/MyHeader";
import "./WritePage.css";

function WritePage() {
  return (
    <div className="App">
      <MyHeader></MyHeader>
      <div className="Whole">
        <div className="WriteBox">
          <button className="UploadButton">
            <div className="UploadText">등록하기</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WritePage;
