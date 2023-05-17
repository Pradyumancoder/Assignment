'use client';

import React from 'react';
import { PlusOutlined } from '@ant-design/icons';

import { Typography, Button, Image } from 'antd';
import style from './ListFile.module.scss';

export function ListFile() {
  const { Title } = Typography;
  return (
    <div className={style.banner}>
      <div className={style.header}>
        <Title className={style.title}>WeWork + Salesforce</Title>
        <Button className={style.publishBtn} size="large">
          Publish/Share
        </Button>
      </div>
      <div className={style.main}>
        <div className={style.bannerImg}>
          <Image
            src="/assets/banner.webp"
            alt=""
            className={style.image}
            preview={false}
          />
        </div>

        <div className={style.overlayText}>
          <Title className={style.overlayTitle}>
            Workspace <br />
            Proposal
          </Title>
        </div>
        <div className={style.overlayImage}>
          <Image
            src="/assets/weworklogo.svg"
            alt="we-work"
            className={style.image}
            preview={false}
          />
          <PlusOutlined style={{ fontSize: '20px', color: '#657372' }} />
          <Image
            src="/assets/salesforce.png"
            alt="salesforce"
            className={style.image}
            preview={false}
          />
        </div>
      </div>
    </div>
  );
}
