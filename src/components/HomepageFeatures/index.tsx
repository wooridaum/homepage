import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Ideas',
    Svg: require('@site/static/img/ideas.svg').default,
    description: (
      <>
        정기적인 모임을 통해 아이디어 브리핑, 린 캔버스 및 사업 계획서 작성 등의 활동 진행
      </>
    ),
  },
  {
    title: 'Development',
    Svg: require('@site/static/img/scrum.svg').default,
    description: (
      <>
        Next.js, NestJS 등의 기술 스택을 활용한 스크럼 활동 진행. Kubernetes를 활용한 CI/CD 파이프라인 구축, GitOps 실현
      </>
    ),
  },
  {
    title: 'Seminar',
    Svg: require('@site/static/img/education.svg').default,
    description: (
      <>
        정기적인 웹/인프라 기술 스터디 진행 및 창업박람회, 기술 세미나 등 각종 창업/IT 관련 행사 참여
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
