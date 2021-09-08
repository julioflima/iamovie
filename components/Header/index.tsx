import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../Button';
import Search from '../Search';
import { Container, IconFavoriteContainer, IconsContainer, LogoContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link href="/">
        <a>
          <LogoContainer>
            <Image src="/logo.svg" alt="logo" width={50} height={100} />
            <Image src="/movie.svg" alt="logo" width={75} height={75} />
          </LogoContainer>
        </a>
      </Link>
      <IconsContainer>
        <Search searchIt={() => {}} />
        <IconFavoriteContainer favorite />
        <Button>Enter</Button>
      </IconsContainer>
    </Container>
  );
};

export default Header;
