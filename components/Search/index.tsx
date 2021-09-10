import React, { ChangeEvent, SyntheticEvent, useRef, useState } from 'react';
import { ISearch } from './ISearch';
import { Container, ContainerForm, IconClose, Icone } from './styles';

const Search: React.FC<ISearch> = ({ search, placeholder, id }) => {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = (): void => setFocused(true);

  const handleBlur = (): void => {
    setFocused(false);
  };

  const handleClose = (): void => {
    setQuery('');
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => setQuery(e.target.value);

  const handleOnSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    search(query);
  };

  const handleClick = (): void => {
    if (searchRef?.current) searchRef.current.focus();
    handleFocus();
  };

  return (
    <Container id={id}>
      <ContainerForm onSubmit={handleOnSubmit} value={!!query || focused}>
        <Icone id={`${id}BtnSearch`} onClick={handleClick} />
        <input
          id={`${id}Input`}
          onChange={handleOnChange}
          type="search"
          value={query}
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
