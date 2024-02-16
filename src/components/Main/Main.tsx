import { FC } from 'react';

import { LogoIcon } from 'src/assets/icons';
import { About, Competences } from 'src/components';
import { useWindowWidth } from 'src/hooks';

import styles from './Main.module.scss';

const Main: FC = () => {
  const width = useWindowWidth();

  const isMobile = width && width < 768;

  return (
    <div className={styles.main}>
      {!isMobile && (
        <a target='_blank' href='https://redcollar.ru/' className={styles.logo}>
          <LogoIcon />
        </a>
      )}
      <About />
      <Competences />
    </div>
  );
};

export default Main;
