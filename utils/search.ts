export type SearchOptions = {
  matchCase: boolean;
  trim: boolean;
  limitedSearch: boolean;
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
    limitedSearch: true,
    filterFnName: 'some',
    searchFnName: 'includes',
    ...opts,
  };

  const needleTokens = needle.split(' ');
  const limitedSearchFnName = options.limitedSearch ? 'every' : 'some';

  return needleTokens[limitedSearchFnName]((token) =>
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
