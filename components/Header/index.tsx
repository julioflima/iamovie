import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Favorite, Search } from '..';
import Genre from '../Genre';
import { Container, ContainerFixed, ContainerLinks, IconsContainer, LogoContainer } from './styles';

const Header: React.FC = () => {
  const router = useRouter();

  const search = (query: string): void => {
    router.push(
      {
        pathname: `/${!!query && `search/[query]`}`,
        ...(!!query && { query: { query } })
      },
      `/${!!query && `search/${query}`}`
    );
  };

  return (
    <ContainerFixed>
      <Container>
        <ContainerLinks>
          <Link href="/" passHref>
            <LogoContainer>
              <Image src="/logo.svg" alt="logo" width={70} height={130} />
            </LogoContainer>
          </Link>
          <Genre />
        </ContainerLinks>
        <IconsContainer>
          <Search search={search} placeholder="eg: The Shawshank Redemption" />
          <Link href="/favorites" passHref>
            <Favorite size="big" button />
          </Link>
          <Button>Sign In</Button>
        </IconsContainer>
      </Container>
    </ContainerFixed>
  );
};

export default Header;
