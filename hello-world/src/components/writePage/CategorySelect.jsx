import React, { useState } from 'react';
import "./WritePage.css";

const CategorySelect = () => {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <p className="H2">카테고리를 선택해주세요!</p>
      <form className="Category-select">
        <label className={`Category-text1 ${category === '소통' ? 'SelectedText' : ''}`}>
          <input
            type="radio"
            value="소통"
            checked={category === '소통'}
            onChange={handleChange}
          />소통
        </label>
        <label className={`Category-text2 ${category === '학업' ? 'SelectedText' : ''}`}>
          <input
            type="radio"
            value="학업"
            checked={category === '학업'}
            onChange={handleChange}
          />학업
        </label>
        <label className={`Category-text3 ${category === '취업' ? 'SelectedText' : ''}`}>
          <input
            type="radio"
            value="취업"
            checked={category === '취업'}
            onChange={handleChange}
          />취업
        </label>
        <label className={`Category-text4 ${category === '생활' ? 'SelectedText' : ''}`}>
          <input
            type="radio"
            value="생활"
            checked={category === '생활'}
            onChange={handleChange}
          />생활
        </label>
        <label className={`Category-text5 ${category === '친구' ? 'SelectedText' : ''}`}>
          <input
            type="radio"
            value="친구"
            checked={category === '친구'}
            onChange={handleChange}
          />친구
        </label>
      </form>
      <p className="H2">내용을 작성해주세요!</p>

    </div>
  );
};

export default CategorySelect;
