import React from "react";
import normalArray from '../../common/createNormalArray'

const SearchType = (props) => {


  // const showTypeText = () => {

  //   const clickTypeText = document.getElementById('FnClickTypeText');
  //   clickTypeText.classList.add("is-show");
  // }
  // const removeTypeText = () => {

  //   const clickTypeText = document.getElementById('FnClickTypeText');
  //   clickTypeText.classList.remove("is-show");
  // }
  // const resetType = () => {
  //   const typeSelector1 = document.getElementById('typeSelector1');
  //   const typeSelector2 = document.getElementById('typeSelector2');

  //   typeSelector1.value = '-';
  //   typeSelector2.value = '-';

  //   decideType();
  //   removeTypeText();
  // }


  // typeArrayのポケモンDOMを作っておく
  const nodes = props.typeArray.map(value => {
      const node = 
      <li 
        key={value.key}
        id={value.number.no}
        className={`imgIcon imgType imgNo${value.number.no}`}
        onClick={e => props.showData(e.target.id)}
      >
      </li>;

      return node;
  });


  return(
    
    <section className="searchSectionType">
      <div className="inputArea">
        <h2>2. タイプ検索</h2>
        <select id="typeSelector1" onChange={e => props.decideType(e)}>
          <option>-</option>
          <option>ノーマル</option>
          <option>ほのお</option>
          <option>みず</option>
          <option>でんき</option>
          <option>くさ</option>
          <option>こおり</option>
          <option>かくとう</option>
          <option>どく</option>
          <option>じめん</option>
          <option>ひこう</option>
          <option>エスパー</option>
          <option>むし</option>
          <option>いわ</option>
          <option>ゴースト</option>
          <option>ドラゴン</option>
          <option>あく</option>
          <option>はがね</option>
          <option>フェアリー</option>
        </select>
        <select id="typeSelector2" onChange={e => props.decideType(e)}>
          <option>-</option>
          <option>ノーマル</option>
          <option>ほのお</option>
          <option>みず</option>
          <option>でんき</option>
          <option>くさ</option>
          <option>こおり</option>
          <option>かくとう</option>
          <option>どく</option>
          <option>じめん</option>
          <option>ひこう</option>
          <option>エスパー</option>
          <option>むし</option>
          <option>いわ</option>
          <option>ゴースト</option>
          <option>ドラゴン</option>
          <option>あく</option>
          <option>はがね</option>
          <option>フェアリー</option>
        </select>
      {/* <button onClick={e => resetType(e)} className="resetType">タイプリセット</button> */}
    </div>

    <div className="outputArea">
      <dl>
        <dt>図鑑番号</dt>
        <dd>{normalArray[props.id].no}</dd>
        <dt>名前</dt>
        <dd>{normalArray[props.id].name}</dd>
        <dt>タイプ</dt>
        <dd>
          <span>{normalArray[props.id].types[0]}</span>
          <span>{normalArray[props.id].types[1]}</span>
        </dd>
      </dl>
      <div className={`img imgNo${props.id}`}></div>
      <div className={`img imgColor imgColorNo${props.id}`}></div>
    </div>
     
     <div>
       <p id="FnClickTypeText" className="clickTypeText">ポケモンをクリック！</p>
       <ul className="typeShowData">{nodes}</ul>
     </div>
   </section>

  )
}

export default SearchType;