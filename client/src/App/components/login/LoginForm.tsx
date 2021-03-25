import React from 'react';
import { Column } from '../common/Flexbox';
import TextField from '@material-ui/core/TextField';
import translate from 'counterpart';
import { Autocomplete } from '@material-ui/lab';

type LoginFormType = {
  handleUserNameChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, 
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, 
  passwordError: boolean, 
  usernameError: boolean
}

export const LoginForm = ({
  handleUserNameChange, 
  handlePasswordChange, 
  passwordError, 
  usernameError
}: LoginFormType) => {
  return(
    <Column vertical={'space-between'} horizontal={'center'} style={{minWidth: '75%'}}>
      <TextField
        error = {usernameError}
        helperText = {usernameError ? translate('connection.usernameError') : null} 
        required
        margin="dense"
        id="username"
        label={translate('connection.username')}
        type="text"
        onChange={handleUserNameChange}
        fullWidth
      />
      <TextField
        error = {passwordError}
        helperText = {passwordError ? translate('connection.passwordError') : null} 
        required
        margin="dense"
        id="password"
        label={translate('connection.password')}
        type="password"
        onChange={handlePasswordChange}
        fullWidth
      />
    </Column>
  );
}