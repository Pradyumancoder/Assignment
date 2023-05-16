'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  RightOutlined,
  SearchOutlined,
  MailOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Badge, Avatar } from 'antd';
import style from './Navbar.module.scss';
import MobileDrawer from '../ResponsiveUI/ResponsiveUi';

export function Navbar() {
  const [open, setOpen] = useState(false);

  function onOpen() {
    setOpen(true);
  }

  return (
    <>
      {open && <MobileDrawer open={open} setOpen={setOpen} />}
      <nav className={style.navbar}>
        <div className={style.logo}>
          <Image src="/assets/logo.svg" alt="logo" width={38} height={38} />
          <span>
            <RightOutlined style={{ fontSize: '0.9rem', color: '#657372' }} />
          </span>
        </div>
        <div className={style.menu}>
          <ul className={style.list}>
            <li>
              <SearchOutlined style={{ fontSize: '25px', color: '#657372' }} />
            </li>
            <li>
              <MailOutlined style={{ fontSize: '25px', color: '#657372' }} />
            </li>
            <li>
              <Badge count={5} color="#F97777">
                <BellOutlined style={{ fontSize: '25px', color: '#657372' }} />
              </Badge>
            </li>
            <li>
              <QuestionCircleOutlined
                style={{ fontSize: '25px', color: '#657372' }}
              />
            </li>
            <li className={style.avatar}>
              <Avatar shape="circle" size={'large'} src="/assets/avatar.svg" />
            </li>
          </ul>
        </div>
        <div className={style.hamburger}>
          <button onClick={onOpen}>
            <MenuOutlined style={{ fontSize: '25px', color: '#657372' }} />
          </button>
        </div>
      </nav>
    </>
  );
}
