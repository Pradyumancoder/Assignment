'use client';

import React from 'react';
import { Badge, Image, Typography } from 'antd';
import {
  ArrowDownOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EllipsisOutlined,
  ExportOutlined,
  EyeInvisibleOutlined,
  FilePdfOutlined,
  MessageOutlined,
  ShareAltOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import style from './Cprofile.module.scss';

export function CProfile() {
  const { Title } = Typography;
  return (
    <section className={style.companyProfile}>
      {/* Overview */}
      <div className={style.overview}>
        <ul>
          <li>Overview</li>
          <li>Welcome</li>
          <li>Product Capabilities</li>
          <li>Customer Success Stories</li>
          <li>File Sharing</li>
          <li>Our Deck</li>
        </ul>
      </div>
      <div>
        {/* Company Actions */}
        <div className={style.profileContainer}>
          <Title className={style.title}>Company Profile</Title>
          <div className={style.profileActions}>
            <div>
              <span>
                <ArrowDownOutlined
                  style={{ fontSize: '1.1rem', color: '#657372' }}
                />
              </span>
              <span>
                <EyeInvisibleOutlined
                  style={{ fontSize: '1.1rem', color: '#657372' }}
                />
              </span>
              <span>
                <DeleteOutlined
                  style={{ fontSize: '1.1rem', color: '#657372' }}
                />
              </span>
            </div>
          </div>
          <div className={style.ellipsis}>
            <EllipsisOutlined
              style={{ fontSize: '1.6rem', color: '#657372' }}
            />
          </div>
        </div>
        {/* Office */}
        <div className={style.officeContainer}>
          <div className={style.officeImage}>
            <Image
              src="/assets/company.webp"
              alt=""
              className={style.image}
              preview={false}
            />
          </div>
          <div className={style.overlayActions}>
            <button className={style.pdfBtn}>
              <FilePdfOutlined style={{ fontSize: '1rem', color: '#657372' }} />
              <span>1/15</span>
            </button>
            <button className={style.actionBtn}>
              <DownloadOutlined
                style={{ fontSize: '1rem', color: '#657372' }}
              />
            </button>
            <button className={style.actionBtn}>
              <ZoomOutOutlined style={{ fontSize: '1rem', color: '#657372' }} />
            </button>
            <button className={style.actionBtn}>
              <ZoomInOutlined style={{ fontSize: '1rem', color: '#657372' }} />
            </button>
            <button className={style.actionBtn}>
              <ExportOutlined
                style={{ fontSize: '1.1rem', color: '#657372' }}
              />
            </button>
          </div>
          <div className={style.officeOverlay}>
            <div>
              <Image
                src="/assets/weWork.webp"
                alt=""
                className={style.image}
                preview={false}
              />
            </div>
            <div>
              <Title className={style.overlaySubTitle}>
                For all the ways you work, we&apos;re here
              </Title>
            </div>
          </div>
        </div>
        <div className={style.shareActions}>
          <button className={style.message}>
            <Badge count={5} color="#00B686">
              <MessageOutlined
                style={{ fontSize: '1.6rem', color: '#657372' }}
              />
            </Badge>
          </button>
          <button className={style.share}>
            <ShareAltOutlined
              style={{ fontSize: '1.6rem', color: '#657372' }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
