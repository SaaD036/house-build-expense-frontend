import React from 'react';

import { Tooltip } from '@mui/material';
import { ExpandCircleDownOutlined as ArrowDropDownIcon } from '@mui/icons-material';

import Avatar from '../../Custom/Avatar';

import styles from './styles.module.css';

const HeaderProfile = () => {
    const renderAvatarContent = () => {
        return (
            <div className={styles.avatarCircle}>
                <Tooltip title="SaaD Ibne Jamal">
                    <b>SIJ</b>
                </Tooltip>
            </div>
        );
    };

    return (
        <div className={styles.headerProfileContainer}>
            <Avatar content={renderAvatarContent()} />
            <div style={{ marginTop: '-20px' }}>
                <ArrowDropDownIcon sx={{ color: '#158901', backgroundColor: 'white' }} />
            </div>
        </div>
    );
};

export default HeaderProfile;
