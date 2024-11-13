import React from 'react';

export type ProtectedRoutePropType = {
    children: React.ReactElement;
    user: any;
    redirect?: string;
    redirectIfNotLoggedIn?: string;
    auth?: true;
};
