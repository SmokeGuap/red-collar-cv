import { FC } from 'react';

import styles from './Competence.module.scss';
import { ICompetenceProps } from './Competence.types';

const Competence: FC<ICompetenceProps> = (props) => {
  const { title, list, skills } = props;

  return (
    <div className={styles.competence}>
      <p className={styles.title}>{title}</p>
      {list && (
        <ul className={styles.list}>
          {list.map((item, id) => (
            <li key={id}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.subName}>{item.subName} </p>
              <p className={styles.years}> {item.years}</p>
            </li>
          ))}
        </ul>
      )}
      {skills && (
        <ul className={styles.skills}>
          {skills.map((item, id) => (
            <li key={id}>
              <p className={styles.name}>{item}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Competence;
