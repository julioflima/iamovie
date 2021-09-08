import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../Button';
import Gender from '../Gender';
import Search from '../Search';
import {
  Container,
  ContainerFixed,
  ContainerLinks,
  IconFavoriteContainer,
  IconsContainer,
  LogoContainer
} from './styles';

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
          <Gender />
        </ContainerLinks>
        <IconsContainer>
          <Search searchIt={() => {}} />
          <IconFavoriteContainer favorite />
          <Button>Sign In</Button>
        </IconsContainer>
      </Container>
    </ContainerFixed>
  );
};

export default Header;
