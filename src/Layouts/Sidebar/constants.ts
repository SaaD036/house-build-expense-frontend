import { SidebarItemsTypes } from '../interfaces';

export const SIDEBAR_ITEMS: SidebarItemsTypes[] = [
    {
        key: 'transaction',
        label: 'Transaction',
        access: 'all',
    },
    {
        key: 'users',
        label: 'Users',
        access: 'admin',
    },
    {
        key: 'account',
        label: 'Account',
        access: 'self',
    },
];
