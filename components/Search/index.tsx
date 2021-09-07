import React, { ChangeEvent, SyntheticEvent, useRef, useState } from 'react';
import { ISearchBar } from './ISearchBar';
import { Container, ContainerForm, IconClose, Icone } from './styles';

const Search: React.FC<ISearchBar> = ({ searchIt, placeholder, id }) => {
  const [search, setSearch] = useState('');
  const [focused, setFocused] = useState(false);

  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = (): void => setFocused(true);

  const handleBlur = (): void => {
    setFocused(false);
  };

  const handleClose = (): void => {
    setSearch('');
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => setSearch(e.target.value);

  const handleOnSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    searchIt(search);
  };

  const handleClick = (): void => {
    if (searchRef?.current) {
      searchRef.current.focus();
      searchIt(search);
    }
    handleFocus();
  };

  return (
    <Container id={id}>
      <ContainerForm onSubmit={handleOnSubmit} value={!!search || focused}>
        <Icone id={`${id}BtnSearch`} onClick={handleClick} />
        <input
          id={`${id}Input`}
          onChange={handleOnChange}
          type="search"
          value={search}
          placeholder={placeholder}
          ref={searchRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <IconClose id={`${id}BtnClose`} onClick={handleClose} />
      </ContainerForm>
    </Container>
  );
};

export default Search;
