import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import LoadingContext from '../../contexts/LoadingContext';
import { Container } from './styles';

const Loading: React.FC = () => {
  const { isFallback } = useRouter();
  const router = useRouter();

  const [loading, setLoading] = useContext(LoadingContext).loadingState;

  const handleLoadingStart = (): void => {
    setLoading(true);
  };

  const handleLoadingStop = (): void => {
    setLoading(false);
  };

  router?.events?.on('routeChangeStart', handleLoadingStart);

  router?.events?.on('routeChangeComplete', handleLoadingStop);

  router?.events?.on('routeChangeError', handleLoadingStop);

  const proportion = 2;
  return (
    <>
      {(isFallback || loading) && (
        <Container>
          <Image src="/logo.svg" alt="logo" width={70 * proportion} height={130 * proportion} />
        </Container>
      )}
    </>
  );
};

export default Loading;
