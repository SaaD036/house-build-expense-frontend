import React from 'react';

export type CutomMenuItemsType = {
    key: string;
    label: string | React.ReactNode;
    onClick: () => void;
};

export type CustomMenuProps = {
    items: CutomMenuItemsType[];
    open: boolean;
    anchorEl: null | HTMLElement;
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};
