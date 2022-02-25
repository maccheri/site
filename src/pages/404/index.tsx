import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Container } from './styles';

export default function NotFound() {
  const router = useRouter();

  const handleClick = useCallback(() => {
    const targetLocation = '/';
    if (router.pathname === targetLocation) {
      typeof document !== 'undefined' && document.location.reload();
    } else {
      router.push(targetLocation);
    }
  }, [router]);

  return (
    <Container>
      <div className="wrap">
        <h2>OPSss...&nbsp;</h2>
        <h3>Página não encontrada!</h3>
      </div>

      <Image
        src="/omg.png"
        width={300}
        height={300}
        alt="Arte de café derramado"
      />

      <footer>
        <button type="button" onClick={handleClick}>
          Ir para página inicial
        </button>
      </footer>
    </Container>
  );
}
