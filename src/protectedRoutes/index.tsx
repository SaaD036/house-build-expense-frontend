import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { ProtectedRoutePropType } from './interfaces';

const ProtectedRoutes = (props: ProtectedRoutePropType) => {
    const { children, user, auth, redirectIfNotLoggedIn, redirect } = props;

    if (auth) {
        if (!user) {
            return <Navigate to={redirectIfNotLoggedIn || '/auth/login'} replace />;
        }

        return children;
    } else {
        if (user) {
            return <Navigate to={redirect || '/'} replace />;
        }

        return children;
    }
};

const mapStateToProps = (state: any) => ({
    user: state.auth.loggedInUser,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoutes);
