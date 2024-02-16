import { FC } from 'react';

import {
  ArrowIcon,
  PhoneIcon,
  MailIcon,
  TelegramIcon,
  GithubIcon,
  LogoIcon,
} from 'src/assets/icons';
import Photo from 'src/assets/images/photo.jpg';
import { useWindowWidth } from 'src/hooks';

import styles from './Aside.module.scss';

const Aside: FC = () => {
  const width = useWindowWidth();

  const isMobile = width && width < 768;

  return (
    <div className={styles.aside}>
      {isMobile && (
        <a target='_blank' href='https://redcollar.ru/' className={styles.logo}>
          <LogoIcon />
        </a>
      )}
      <img className={styles.photo} src={Photo} alt='Photo' />
      <div className={styles.contactsWrapper}>
        <ArrowIcon className={styles.arrow} />
        <p className={styles.name}>Рыжков Кирилл</p>
        <p className={styles.ageAndCity}>22 года, Красноярск</p>
        <ul className={styles.contacts}>
          <li>
            <PhoneIcon />
            <a target='_blank' href='tel:+79135986679'>
              +7 913 598 66 79
            </a>
          </li>
          <li>
            <MailIcon />
            <a target='_blank' href='mailto:mustang.horse34@gmail.com'>
              mustang.horse34@gmail.com
            </a>
          </li>
          <li>
            <TelegramIcon />
            <a target='_blank' href='https://t.me/smokeguap'>
              smokeguap
            </a>
          </li>
          <li>
            <GithubIcon />
            <a target='_blank' href='https://github.com/SmokeGuap'>
              smokeguap
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
