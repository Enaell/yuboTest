import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, makeStyles, Theme } from '@material-ui/core';
import NavSnackBar from './navSnackBar';
import translate from 'counterpart';
import { UserType } from '../common/types';
import { useSelector, useDispatch } from 'react-redux';
import { Row } from '../common/Flexbox';
import { useHistory, withRouter } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 9999,
    width: '100%',
  },
  grow: {
    flex: 1
  },
  grow3: {
    flex:3
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  homeButton:{
    textTransform: 'none',
  }
}));

export const Navbar = () => {

  const handleSideMenuClick = () => {}

  const user = useSelector((state: any) => state.user) as UserType;
  const classes = useStyles();

  const history = useHistory()

  const handleOnMainPageRedirectionClick = () => {
    history.push('/');
  }

   return(
    <div className={classes.root}>
      <AppBar elevation={0} position='fixed' color={'primary'}>
        <Toolbar>
          <Row width='100%' vertical='center' horizontal='space-between'>
            <Row  className={classes.grow}>
              {user.token &&
              <IconButton onClick={handleSideMenuClick} className={classes.menuButton} style={{color: 'white'}} aria-label="Open drawer">
                <MenuIcon />
              </IconButton>}
              <Button className={classes.homeButton} onClick={handleOnMainPageRedirectionClick}>
                <Typography style={{color: 'white'}} variant="h6" noWrap>
                  {translate('application-name')}
                </Typography>
              </Button>
            </Row>
            <Row className={classes.grow}>
            </Row>
          </Row>
        </Toolbar>
      </AppBar>
      <NavSnackBar></NavSnackBar>
    </div>
  );
}

