import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Button, Favorite, Genrer, Search } from '..';
import QueryContext from '../../contexts/QueryContext';
import { Container, ContainerFixed, ContainerLinks, IconsContainer, LogoContainer } from './styles';

const Header: React.FC = () => {
  const router = useRouter();

  const [, setQuery] = useContext(QueryContext).queryState;

  const search = (_query: string): void => {
    setQuery(_query);

    router.push(
      {
        pathname: `/[search]`,
        query: {
          query: _query
        }
      },
      `/${_query}`,
      { shallow: true }
    );
  };

  return (
    <ContainerFixed>
      <Container>
        <ContainerLinks>
          <Link href="/">
            <a>
              <LogoContainer>
                <Image src="/logo.svg" alt="logo" width={70} height={130} />
              </LogoContainer>
            </a>
          </Link>
          <Genrer />
        </ContainerLinks>
        <IconsContainer>
          <Search search={search} placeholder="eg: The Shawshank Redemption" />
          <Favorite size="big" button />
          <Button>Sign In</Button>
        </IconsContainer>
      </Container>
    </ContainerFixed>
  );
};

export default Header;
