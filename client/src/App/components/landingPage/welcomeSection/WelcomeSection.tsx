import React, { useState } from 'react';
import { Column, Row } from '../../common/Flexbox';
import { Typography } from '@material-ui/core';
import { welcomeSection, backgroundImg, connectionDiv } from './styles.d';

import translate from 'counterpart';
import { IntroductionColumn } from './IntroductionColumn';
import { useDispatch } from 'react-redux';
import { LoadingButton } from '../../common/Buttons';
import { userApi } from '../../../apiClient/ApiClient';
import { LoginForm } from '../../login/LoginForm';

export const WelcomeSection = () => {

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  function handleUserNameChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setPassword(event.target.value);
  }

  const onLoginClick = async () => {
    const pError =  !password;
    const nError = !username;
    setPasswordError(pError);
    setUsernameError(nError);

    // if (!(pError || nError)) {
      const loggedUser = await userApi.getAllUsers();
      console.log(loggedUser)
      // if (loggedUser.success)
      //   dispatch({type: 'LOGIN', payload: loggedUser.message});
      // else {
      //   dispatch({type: 'SET_NAV_SNACKBAR', payload: {variant: 'error', message: "Login Error !"}});
      //   dispatch({type: 'TOGGLE_NAV_SNACKBAR'})
      // }
    // }
  };

  return (
    <Column horizontal='start' vertical={'center'} className='welcomeSection' style={welcomeSection}>
      <div style={backgroundImg}/>
      <Column horizontal='end' width='45%'>
        <Column horizontal={'start'} style={ connectionDiv }>
          <Typography color="primary" variant='h3' noWrap>
            {translate('application-name')}
          </Typography>
          <form style={{width: '100%', height: '100%', paddingTop: '20px'}}>
            <Row width='100%' height='100%' vertical={'center'}>
              <Column height='100%' width='100%' vertical={'space-around'}>
                <IntroductionColumn />

                <LoginForm 
                    handleUserNameChange = {handleUserNameChange} 
                    handlePasswordChange = {handlePasswordChange}
                    passwordError = {passwordError}
                    usernameError = {usernameError}
                />
                  <Row horizontal='space-around' style={{width: '100%', paddingTop: '10px'}}>
                    <LoadingButton className='whiteButton' variant='outlined' type='submit' onClick={onLoginClick}>
                      {translate('connection.login')}
                    </LoadingButton>
                  </Row>
              </Column>
            </Row>
          </form>
        </Column>
      </Column>
    </Column>
  );
}
