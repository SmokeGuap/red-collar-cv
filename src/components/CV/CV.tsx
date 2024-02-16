import { FC } from 'react';

import { Aside, Main } from 'src/components';

import styles from './CV.module.scss';

const CV: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Aside />
      <Main />
    </div>
  );
};

export default CV;
