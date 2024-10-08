export type CustomButtonPropsType = {
    children: string | React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
};

export type ButtonSectionPropsType = {
    children: React.ReactNode;
    className?: string;
};
