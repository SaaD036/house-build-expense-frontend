import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Divider } from '@mui/material';

import CustomInput from '../../../Components/Custom/CustomInput';
import CustomButton from '../../../Components/Custom/CustomButton';
import ButtonSection from '../../../Components/Custom/CustomButton/ButtonSection';
import LinearLoadingItem from '../../../Components/Custom/CustomLoadingItems/LinearLoadingItem';

import { login } from '../../../Redux/actions/authAction';

import { isEmailValid } from '../../../Utilities/String';

import WelcomeText from '../../../Assets/Images/welcome_text.png';
import styles from './styles.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onEmailChange = (email: string) => {
        setEmail(email.replace(' ', '').toLowerCase());
    };

    const isLoginButtonDisabled = () => {
        if (isEmailValid(email) && !!password) {
            return false;
        }

        return true;
    };

    const onLoginButtonClick = async () => {
        setIsLoading(true);
        await login(email, password);
        setIsLoading(false);
    };

    const renderWelcomeSection = () => {
        return (
            <div className={styles.welcomeSection}>
                <img src={WelcomeText} className={styles.welcomeImage}></img>
                <div className={`text ${styles.welcomeText}`}>
                    Please enter your credentials to continue ...
                </div>
            </div>
        );
    };

    const renderLoginInputs = () => {
        return (
            <div className={styles.loginInputSection}>
                <CustomInput label="Email" value={email} onChange={onEmailChange} />
                <CustomInput
                    label="Password"
                    value={password}
                    onChange={(pass: string) => setPassword(pass)}
                    type="password"
                />
                <ButtonSection>
                    <CustomButton onClick={onLoginButtonClick} disabled={isLoginButtonDisabled()}>
                        LOGIN
                    </CustomButton>
                </ButtonSection>
            </div>
        );
    };

    return (
        <>
            {isLoading && <LinearLoadingItem />}
            <div className={`center ${styles.loginPage}`}>
                <div className={`center ${styles.loginSectionContainer}`}>
                    {renderWelcomeSection()}
                    <Divider orientation="vertical" className={styles.divider} />
                    {renderLoginInputs()}
                </div>
            </div>
        </>
    );
};

// const mapStateToProps = (state: any) => ({
//     loggedInUser: state.auth.loggedInUser,
// });

// const mapDispatchToProps = {
//     login,
// };

export default Login;
