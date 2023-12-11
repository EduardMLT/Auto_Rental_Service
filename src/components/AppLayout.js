import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { styled } from 'styled-components';
import { Toaster } from 'react-hot-toast';

import { Nav } from './Nav';
import { Loader } from './LoaderSpinner/LoaderSpinner';
import { Container, Header, Logo, WrapLogo } from './AppLayout.styled';

// const Container = styled.main`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
//   padding: 0 15px;
//   max-width: 900px;
//   margin: 0 auto;
// `;

export const AppLayout = () => {
  return (
    <Container>
      <Header>
        <Nav />
        <WrapLogo>
          <Logo>
            Auto Rental Service
          </Logo>
        </WrapLogo>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster />
    </Container>
  );
};
