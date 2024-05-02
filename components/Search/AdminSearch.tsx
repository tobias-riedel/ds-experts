import { DEBOUNCE_INPUT } from '@consts/misc';
import { hasSearchTerm } from '@utils/search';
import React, { useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface SearchProps<T extends Record<string, unknown>> {
  items: T[] | undefined;
  searchFields: Array<keyof T>;
  placeholder: string;
  onSearchTermChanged: (filteredItems: T[]) => void;
  hideMatchCase?: boolean;
  hideCrossRowSearch?: boolean;
}

const AdminSearch: React.FC<SearchProps<Record<string, unknown>>> = ({
  items,
  searchFields,
  placeholder,
  onSearchTermChanged,
  hideMatchCase,
  hideCrossRowSearch,
}): JSX.Element => {
  const [matchCase, setMatchCase] = useState(false);
  const [crossRowSearch, setCrossRowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const searchRef = useRef<HTMLInputElement>(null);

  const searchTermChanged = useDebouncedCallback((needle: string = searchTerm) => {
    setSearchTerm(needle);
    const loadedItems = items ?? [];

    const filteredItems = loadedItems.filter((item) =>
      hasSearchTerm(needle, item, searchFields, { matchCase, crossRowSearch })
    );

    onSearchTermChanged(filteredItems);
  }, DEBOUNCE_INPUT);

  const toggleMatchCase = () => {
    setMatchCase(!matchCase);
    searchTermChanged();
  };

  const toggleCrossRowSearch = () => {
    setCrossRowSearch(!crossRowSearch);
    searchTermChanged();
  };

  const clearSearchTerm = () => {
    if (!searchRef.current) {
      return;
    }

    searchRef.current.value = '';
    searchTermChanged('');
  };

  useEffect(() => {
    searchTermChanged();
  }, [items, searchTermChanged]);

  return (
    <>
      <div className="input-group">
        <div className="input-group-text">
          <i className="fas fa-search" title="Suche"></i>
        </div>

        {!hideMatchCase && (
          <div className="input-group-text">
            <label className="mb-0" title="Groß-/Kleinschreibung beachten">
              <input type="checkbox" onChange={toggleMatchCase} className="form-check-input" checked={matchCase} /> aA
            </label>
          </div>
        )}

        {!hideCrossRowSearch && (
          <div className="input-group-text">
            <label className="mb-0" title="Zeilenübergreifende Suche">
              <input
                type="checkbox"
                onChange={toggleCrossRowSearch}
                className="form-check-input"
                checked={crossRowSearch}
              />{' '}
              !#
            </label>
          </div>
        )}

        <input
          type="text"
          placeholder={'Suche in den Feldern: ' + placeholder}
          className="form-control"
          style={{ height: '2.75rem' }}
          onChange={(e) => searchTermChanged(e.target.value)}
          ref={searchRef}
        />

        {searchTerm.length > 0 && (
          <div className="input-group-text">
            <button className="btn btn-link p-0" title="Suchfeld leeren" onClick={clearSearchTerm}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default AdminSearch;
