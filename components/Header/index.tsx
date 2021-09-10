import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button, Favorite, Genrer, Search } from '..';
import { Container, ContainerFixed, ContainerLinks, IconsContainer, LogoContainer } from './styles';

const Header: React.FC = () => {
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
          <Search searchIt={() => {}} />
          <Favorite size="big" button />
          <Button>Sign In</Button>
        </IconsContainer>
      </Container>
    </ContainerFixed>
  );
};

export default Header;
