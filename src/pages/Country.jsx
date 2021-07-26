import { useEffect, useRef, useState } from 'react';
import CountryInfo from '../components/CountryInfo';
import CovidInfo from '../components/CovidInfo';
import SelectionList from '../components/SelectionList';
import useLocalStorage from '../UseLocalStorage';

function Country({ items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useLocalStorage('selection', []);
  const toggle = () => setOpen(!open);
  const ref = useRef(null);

  function handleOnClick(elem) {
    if (!selection.some((cur) => cur.abbreviation === elem.abbreviation)) {
      if (!multiSelect) {
        setSelection([elem]);
      } else if (multiSelect) {
        setSelection([...selection, elem]);
      }
    }
  }

  function selectionItem(elem) {
    if (selection.find((cur) => cur.abbreviation === elem.abbreviation)) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    ['click', 'touchend'].forEach((e) => {
      document.addEventListener(e, close);
    });
  }, []);

  const close = (e) => {
    if (!e.path.includes(ref.current)) {
      setOpen(false);
    }
  };

  const filterArr = items.filter((elem) => elem.country);

  return (
    <div className="page__country">
      <div className="page__country-search">
        <div
          className="selection"
          tabIndex={0}
          role="button"
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
          ref={ref}>
          {selection.length ? selection.map((elem) => elem.country) : 'Search'}
          <svg
            className={open ? '' : 'rotated'}
            width="8"
            height="5"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          {open && (
            <SelectionList
              arr={filterArr}
              handleOnClick={handleOnClick}
              selectionItem={selectionItem}
            />
          )}
        </div>
        <CountryInfo selection={selection} arr={items} />
      </div>
      <div>
        <CovidInfo selection={selection} />
      </div>
    </div>
  );
}

export default Country;
