import "./WritePage.css";
import { IconButton } from '@mui/material';
import { IoMdImages } from 'react-icons/io';

const ImageUploader = ({ preview_URL, setImage }) => {
  let inputRef;

  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setImage({
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      });
    };
  };

  return (
    <div className="uploader-wrapper">
        <div className="Upload-text">
            <div className="upload-text-left"><p className="H3">필요한 사진을 첨부하세요!</p></div>
            <div className="upload-text-right">
            <IconButton
                className="upload-button"
                onClick={() => inputRef.click()}
            >
                <IoMdImages style={{width: 20, height: 20 }}/> <p style={{color: "#3366FF", fontFamily:"Pretendard", fontSize: 14}}> &nbsp;&nbsp; 사진 고르기</p>
            </IconButton>
            </div>
        </div>
      

      <input
        type="file"
        accept="image/*"
        onChange={saveImage}
        ref={(refParam) => (inputRef = refParam)}
        style={{ display: "none" }}
      />
      <div className="img-wrapper">
        <img src={preview_URL} />
      </div>
    
    </div>
  );
};

export default ImageUploader;
