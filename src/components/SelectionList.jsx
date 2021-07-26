function SelectionList({ arr, handleOnClick, selectionItem }) {
  const obj = arr[0];
  return (
    <div className="selection-list">
      {arr.map((elem) => (
        <div className="selection-item" key={elem.abbreviation}>
          <button className="selection-btn" type="button" onClick={() => handleOnClick(elem)}>
            <span>{elem.country === obj.country ? obj.country : elem.country}</span>
            <span>
              {selectionItem(elem) && (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ok_font_awesome.svg/512px-Ok_font_awesome.svg.png"
                  alt="selected"
                />
              )}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default SelectionList;
