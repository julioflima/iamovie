export interface IOption {
  name: string;
  id: string | number;
}

export interface ISearchBar {
  searchIt: (query: string) => void;
  placeholder?: string;
  id?: string;
}
