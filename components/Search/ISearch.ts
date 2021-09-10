export interface IOption {
  name: string;
  id: string | number;
}

export interface ISearch {
  search: (query: string) => void;
  placeholder?: string;
  id?: string;
}
