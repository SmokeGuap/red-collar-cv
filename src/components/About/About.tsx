import { FC } from 'react';

import styles from './About.module.scss';

const About: FC = () => {
  return (
    <div className={styles.about}>
      <p>
        Junior Frontend разработчик с полугодовым опытом проектирования,
        разработки и поддержки веб-приложений.
      </p>
      <p>
        Моим стеком является: JavaScript (Typescript), SASS(SCSS), React, Redux
        (Redux Toolkit), React Router, React Query, Tailwind CSS, JEST, Next,
        Vite, Webpack.
      </p>
      <p>
        Имеется опыт разработки и взаимодействия с backend (Mongo, PostgreSQL,
        Express).
      </p>
      <p>
        Знаком с контейнеризацией docker (docker-compose), Websocket, GitFlow, c
        архитектурой REST и бандлерами Rollup, esbuild.
      </p>
      <p>В своей работе использовал библиотеки:</p>
      <ul>
        <li>react-hook-form</li>
        <li>framer-motion</li>
        <li>recharts</li>
      </ul>
      <p>Некоторые из моих достижений и проектов:</p>
      <ul>
        <li>
          Сотрудничал с разработчиками и дизайнерами для интеграции веб-сервисов
          и API с целью проектирования и разработки веб-приложений.
        </li>
        <li>
          Использовал лучшие методы SEO для оптимизации, достижения
          масштабируемости и повышения производительности веб-приложения.
        </li>
        <li>Разрабатывал мобильное приложение на React Native.</li>
      </ul>
      <p>
        Я занимаюсь frontend разработкой, потому что это позволяет мне
        одновременно проявить свою креативность и логическое мышление. И в целом
        создание чего-то нужного и полезного для пользователей мне нравится и
        мотивирует меня развиваться в этом направлении.
      </p>
      <p>
        На стажировке планирую показать хороший результат, достойный моего опыта
        и навыков.
      </p>
    </div>
  );
};

export default About;
