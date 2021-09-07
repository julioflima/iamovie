import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Search from '../Search';
import { Container, IconFavoriteContainer, IconsContainer, LogoContainer } from './styles';

const Header: React.FC<{ favorite: boolean }> = ({ favorite }) => {
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
        <IconFavoriteContainer favorite={favorite || true} />
        <Search searchIt={() => {}} />
      </IconsContainer>
    </Container>
  );
};

export default Header;
