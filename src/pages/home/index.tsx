import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ThemeProvider } from 'styled-components';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

import theme from '~/styles/theme';
import * as S from './styles';
// import { useRouter } from 'next/router';

const Home: NextPage = () => {
  // const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <Head>
          <title>Maccheri</title>
          <meta name="description" content="Maccheri especialista frontend" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <main>
          <S.Header>
            <h1>Maccheri</h1>
            <S.Social>
              <a
                href={'https://www.linkedin.com/in/felipe-maccheri/'}
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin color={theme.white} size={28} />
              </a>
              <a
                href={'https://instagram.com/fmaccheri'}
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram color={theme.white} size={28} />
              </a>
              <a
                href={'https://github.com/maccheri'}
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub color={theme.white} size={28} />
              </a>
            </S.Social>
          </S.Header>
          <S.MainContainer>
            <S.ImageContainer>
              <Image
                src={'/logo.png'}
                objectFit="cover"
                width={700}
                height={700}
                alt="Minha foto"
              />
            </S.ImageContainer>
            <S.SideImageContainer>
              <Image
                src={'/circle.png'}
                objectFit="cover"
                width={540}
                height={510}
                alt="Minha foto"
              />
            </S.SideImageContainer>
            <S.Hello>
              Olá, Eu sou o Maccheri <br />- Frontend Developer
            </S.Hello>
          </S.MainContainer>
        </main>
      </S.Container>
    </ThemeProvider>
  );
};

export default Home;
