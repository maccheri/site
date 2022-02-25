import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  background: ${({ theme }) => theme.success};

  .header {
    width: 100%;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.gray};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrap {
    position: relative;

    margin: 0 auto;
    max-width: 800px;
    padding: 25px 16px 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      color: ${({ theme }) => theme.gray};

      font-size: 36px;
      font-weight: bold;
      text-align: left;

      @media screen and (min-width: 720px) {
        font-size: 42px;
      }
    }

    h3 {
      color: ${({ theme }) => theme.gray};

      font-size: 32px;
      font-weight: bold;
      text-align: left;

      @media screen and (min-width: 720px) {
        font-size: 38px;
      }
    }
  }

  footer {
    width: 100%;
    max-width: 800px;
    padding: 16px;

    @media screen and (min-width: 720px) {
      padding: 0;
    }

    button {
      width: 100%;
      height: 48px;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.primary};

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 20px;
      background: transparent;
      color: ${({ theme }) => theme.primary};
      opacity: 1;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.4;
      }
    }
  }
`;
