import React from 'react';

import SideBar from './Sidebar';

import { LayoutPropsTypes } from './interfaces';
import styles from './styles.module.css';

const Layout = (props: LayoutPropsTypes) => {
    const { children } = props;

    return (
        <div style={{ display: 'flex' }}>
            <div className={`center ${styles.layout}`}>
                <SideBar />
            </div>
            <div className={styles.childrenSection}>{children}</div>
        </div>
    );
};

export default Layout;
