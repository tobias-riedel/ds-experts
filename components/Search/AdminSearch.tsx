import { DEBOUNCE_INPUT } from '@consts/misc';
import { hasSearchTerm } from '@utils/search';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface SearchProps<T extends Record<string, unknown>> {
  items: T[] | undefined;
  searchFields: Array<keyof T>;
  placeholder: string;
  onSearchTermChanged: (filteredItems: T[]) => void;
}

const AdminSearch: React.FC<SearchProps<Record<string, unknown>>> = ({
  items,
  searchFields,
  placeholder,
  onSearchTermChanged,
}): JSX.Element => {
  const [matchCase, setMatchCase] = useState(false);
  const [limitedSearch, setLimitedSearch] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const searchTermChanged = useDebouncedCallback((needle: string = searchTerm) => {
    setSearchTerm(needle);
    const loadedItems = items ?? [];

    const filteredItems = loadedItems.filter((item) =>
      hasSearchTerm(needle, item, searchFields, { matchCase, limitedSearch })
    );

    onSearchTermChanged(filteredItems);
  }, DEBOUNCE_INPUT);

  const toggleMatchCase = () => {
    setMatchCase(!matchCase);
    searchTermChanged();
  };

  const toggleLimitedSearch = () => {
    setLimitedSearch(!limitedSearch);
    searchTermChanged();
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

        <div className="input-group-text">
          <label className="mb-0" title="Groß-/Kleinschreibung beachten">
            <input type="checkbox" onChange={toggleMatchCase} className="form-check-input" checked={matchCase} /> aA
          </label>
        </div>

        <div className="input-group-text">
          <label className="mb-0" title="Exklusive Suche">
            <input
              id="limited-search"
              type="checkbox"
              onChange={toggleLimitedSearch}
              className="form-check-input"
              checked={limitedSearch}
            />{' '}
            !#
          </label>
        </div>

        <input
          type="text"
          placeholder={'Suche in den Feldern: ' + placeholder}
          onChange={(e) => searchTermChanged(e.target.value)}
          className="form-control"
        />
      </div>
    </>
  );
};
export default AdminSearch;
