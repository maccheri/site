import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    main {
      padding: 1rem;
      height: 100vh;
      /* height: 900px; */
      background-color: ${theme.gray};

      @media (max-width: 960px) {
        /* height: 1000px; */
      }

      @media (min-width: 961px) and (max-width: 1366px) {
        /* height: 900px; */
      }

      h1 {
        font-size: 4rem;
        font-weight: 300;
        color: ${theme.white};
      }
    }
  `};
`;

export const Header = styled.div`
  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 4rem;

    a {
      margin: 0.5rem;
    }

    svg {
      height: 36px;
      width: 36px;
    }
  }

  @media (min-width: 961px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
  }

  a {
    z-index: 5;
    margin: 0.5rem;
  }
`;

export const MainContainer = styled.div`
  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 961px) {
    display: flex;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 960px) {
    width: 500px;
    height: 500px;
  }

  @media (min-width: 961px) {
    width: 600px;
    height: 600px;
  }

  img {
    z-index: 1;
  }
`;

export const SideImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  width: 540px;
  height: 530px;
`;

export const Social = styled.div`
  display: flex;
  margin: 0;

  @media (max-width: 960px) {
    margin: 1rem;
  }
`;

export const Hello = styled.h2`
  position: absolute;
  font-size: 60px;
  color: ${({ theme }) => theme.white};
  right: 0;
  top: 50%;
  z-index: 2;
  width: 620px;
  text-align: right;
  margin-right: 2rem;

  @media (max-width: 560px) {
    text-align: center;
    top: unset;
    right: unset;
    bottom: 5%;
    width: 400px;
    font-size: 36px;
  }

  @media (min-width: 561px) and (max-width: 960px) {
    text-align: center;
    top: unset;
    right: unset;
    bottom: 5%;
    width: 600px;
    font-size: 52px;
  }

  @media (min-width: 961px) and (max-width: 1366px) {
    width: 620px;
  }
`;
