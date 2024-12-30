export type SearchOptions = {
  matchCase: boolean;
  trim: boolean;
  crossRowSearch: boolean;
  filterFnName: 'some' | 'every';
  searchFnName: 'includes' | 'startsWith' | 'endsWith';
};

export const hasSearchTerm = <T extends Record<string, unknown>>(
  needle: string,
  haystack: T,
  attrs: Array<keyof T>,
  opts?: Partial<SearchOptions>
): boolean => {
  const options: SearchOptions = {
    matchCase: false,
    trim: true,
    crossRowSearch: false,
    filterFnName: 'some',
    searchFnName: 'includes',
    ...opts,
  };

  const needleTokens = needle.split(' ');
  const crossRowSearchFnName = options.crossRowSearch ? 'some' : 'every';

  return needleTokens[crossRowSearchFnName]((token) =>
    attrs[options.filterFnName]((attr) => {
      const rawVal = haystack[attr];

      let val: string;
      try {
        val = rawVal instanceof Date ? rawVal.toISOString() : `${rawVal}`;
      } catch {
        return false;
      }

      if (options.trim) {
        val = val.trim();
        token = token.trim();
      }

      if (!options.matchCase) {
        val = val.toLowerCase();
        token = token.toLowerCase();
      }

      return val[options.searchFnName](token);
    })
  );
};
