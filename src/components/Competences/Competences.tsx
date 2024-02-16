import { FC } from 'react';

import { BlackArrowIcon } from 'src/assets/icons';
import { Competence } from 'src/components';

import styles from './Competences.module.scss';

const Competences: FC = () => {
  return (
    <div className={styles.competences}>
      <BlackArrowIcon className={styles.arrow} />
      <Competence
        title='Образование'
        list={[
          {
            name: 'Сибирский Федеральный Университет',
            subName: 'Информационная безопасность',
            years: '2019-2023',
          },
        ]}
      />
      <Competence
        title='Карьера'
        list={[
          {
            name: 'ITEO',
            subName: 'Frontend Разработчик',
            years: '2023-2024',
          },
        ]}
      />
      <Competence
        title='Навыки'
        skills={[
          'HTML',
          'CSS',
          'JavaScript',
          'TypeScript',
          'React',
          'Redux',
          'Next',
        ]}
      />
    </div>
  );
};

export default Competences;
