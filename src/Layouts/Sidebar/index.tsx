import React from 'react';
import { NavLink } from 'react-router-dom';

import { Divider } from '@mui/material';

import { SIDEBAR_ITEMS } from './constants';

import { SidebarItemsTypes } from '../interfaces';
import styles from '../styles.module.css';

const SideBar = () => {
    const getSidebarItemStyle = ({
        isActive,
        isPending,
    }: {
        isActive: boolean;
        isPending: boolean;
    }) => {
        let className = `text ${styles.sidebarItems}`;

        if (isActive) {
            className = `${className} ${styles.sidebarItemsSelected}`;
        }

        return className;
    };

    const renderSidebarItem = (sidebarItem: SidebarItemsTypes, index: number): JSX.Element => {
        const { key, label } = sidebarItem;
        const shouldShowDivider = index !== SIDEBAR_ITEMS.length - 1;

        return (
            <>
                <NavLink to={`/${key}`} className={getSidebarItemStyle}>
                    <div>{label}</div>
                </NavLink>
                {shouldShowDivider && <Divider className={styles.sidebarItemsDivider} />}
            </>
        );
    };

    return (
        <div className={`center ${styles.sidebar}`}>
            {SIDEBAR_ITEMS.map((sidebarItem, index) => {
                return renderSidebarItem(sidebarItem, index);
            })}
        </div>
    );
};

export default SideBar;
