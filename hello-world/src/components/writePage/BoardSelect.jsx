import "./WritePage.css";

const BoardSelect = ({ board, setBoard }) => {

  const handleChange = (event) => {
    setBoard(event.target.value);
  };

  return (
    <div>
      <p className="H2">게시판을 선택해주세요!</p>
      <form className="Board-select">
        <label className={`Board-text1 ${board === '자유' ? 'SelectedText' : ''}`}>
          <input
            type="radio"
            value="자유"
            checked={board === '자유'}
            onChange={handleChange}
          />자유
        </label>
        <label className={`Board-text2 ${board === '유학생' ? 'SelectedText' : ''}`}>
          <input
            type="radio"
            value="유학생"
            checked={board === '유학생'}
            onChange={handleChange}
          />유학생
        </label>
        <label className={`Board-text3 ${board === '결혼이민자' ? 'SelectedText' : ''}`}>
          <input
            type="radio"
            value="결혼이민자"
            checked={board === '결혼이민자'}
            onChange={handleChange}
          />결혼이민자
        </label>
        <label className={`Board-text4 ${board === '북한이탈주민' ? 'SelectedText' : ''}`}>
          <input
            type="radio"
            value="북한이탈주민"
            checked={board === '북한이탈주민'}
            onChange={handleChange}
          />북한이탈주민
        </label>
        
      </form>
    </div>
  );
};

export default BoardSelect;
