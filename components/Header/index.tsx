import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Favorite, Genrer, Search } from '..';
import { Container, ContainerFixed, ContainerLinks, IconsContainer, LogoContainer } from './styles';

const Header: React.FC = () => {
  const router = useRouter();

  const search = (query: string): void => {
    router.push(
      {
        pathname: `/[search]`,
        query: {
          query
        }
      },
      `/${query}`,
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
