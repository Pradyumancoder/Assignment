'use client';

import React from 'react';
import { Avatar, Drawer, Badge } from 'antd';
import {
  BellOutlined,
  CloseOutlined,
  MailOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import style from './Responsive.module.scss';

export type DesignUi = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function MobileDrawer({
  open,
  setOpen,
}: DesignUi): JSX.Element {
  function onClose() {
    setOpen(false);
  }
  return (
    <div className={style.drawer}>
      <Drawer
        placement="left"
        onClose={onClose}
        open={open}
        width={'100%'}
        height={'100vh'}
        closable={false}
        style={{ background: '#F2FBF9' }}
      >
        <div className={style.closeBtn}>
          <button onClick={onClose}>
            <CloseOutlined style={{ fontSize: '25px', color: '#657372' }} />
          </button>
        </div>
        <div className={style.menu}>
          <ul>
            <li>
              <div className={style.user}>
                <Avatar
                  shape="circle"
                  size={'large'}
                  src="/assets/avatar.svg"
                />
                <div className={style.userInfo}>
                  <h4>Jane Smith</h4>
                  <p>Sales Executive</p>
                </div>
              </div>
            </li>
            <li>
              <div className={style.menuItem}>
                <SearchOutlined
                  style={{ fontSize: '25px', color: '#657372' }}
                />
                <p>Search</p>
              </div>
            </li>
            <li>
              <div className={style.menuItem}>
                <MailOutlined style={{ fontSize: '25px', color: '#657372' }} />
                <p>Inbox</p>
              </div>
            </li>
            <li>
              <div className={style.menuItem}>
                <Badge count={5} color="#F97777">
                  <BellOutlined
                    style={{ fontSize: '25px', color: '#657372' }}
                  />
                </Badge>
                <p>Notifications</p>
              </div>
            </li>
            <li>
              <div className={style.menuItem}>
                <QuestionCircleOutlined
                  style={{ fontSize: '25px', color: '#657372' }}
                />
                <p>Help</p>
              </div>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}
