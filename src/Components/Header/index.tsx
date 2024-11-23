import React from 'react';

import styles from './styles.module.css';

const Header = ({ components }: { components: React.ReactNode }) => {
    return (
        <div className={styles.expensesPageWrapper}>
            <div>{components}</div>
            <div className={styles.profileSection}></div>
        </div>
    );
};

export default Header;
