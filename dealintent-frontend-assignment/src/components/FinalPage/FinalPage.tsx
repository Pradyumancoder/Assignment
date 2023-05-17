'use client';

import React from 'react';
import { Typography } from 'antd';
import style from './FinalPage.module.scss';

export function FinalPage() {
  const { Title } = Typography;
  const list: number[] | undefined[] = [...new Array(17)];

  return (
    <section className={style.projectRecap}>
      <div className={style.header}>
        <Title className={style.title}>Project Scope Recap</Title>
        <div>
          <div className={style.mutalActionPlan}>
            <p>Mutal Action Plan</p>
            <span>3%</span>
          </div>
          <div className={style.scale}>
            {list.map((_, index: number) => (
              <span key={index}></span>
            ))}
          </div>
        </div>
      </div>
      <div className={style.recapActions}>
        <ul>
          <li>
            <button className={style.activeBtn}>Basic Info</button>
          </li>
          <li>
            <button>Files</button>
          </li>
          <li>
            <button>Mutual Action Plan</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
        <div className={style.internalActions}>
          <button>Internal Actions</button>
        </div>
      </div>
    </section>
  );
}
