import "./WritePage.css";

const TextArea = ({ setTitle, setContent, title, content }) => {
  return (
    
    <div className="textArea-wrapper">
        <input
            onChange={(e) => {
            setTitle(e.target.value);
            }}
            className="title"
            placeholder="제목을 입력하세요"
            value={title}
        />
        <div className="Line2"/>
        <textarea
            onChange={(e) => {
            setContent(e.target.value);
            }}
            className="text"
            placeholder=" • 궁금하신 내용을 물어보세요. 많은 헬코 친구들이 답해줄 거에요!
            &#10;&#10;• 나만 알고 있는 한국생활 꿀팁들을 작성해주세요!
            &#10;&#10;• 최대 500자"
            value={content}
        />
    </div>
    
  );
};
export default TextArea;