import { AppBar, Card, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Column, Row } from '../common/Flexbox';
import { MessageType, UserType } from '../common/types';
import translate from 'counterpart';
import { DualSwitch } from '../common/GenericComponents';


interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (children)}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type UserCardProps = {
  user?: UserType;
  userMessages?: MessageType[]
  receivedMessages?: MessageType[]
}

export const UserCard = ({user, userMessages, receivedMessages}: UserCardProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card style={{width: '90', margin: '20px'}}>
      <Column width='100%'>
        <Row width='100%' horizontal='space-around'>
        <TextField
            type="text"
            margin="dense"
            label={'ID'}
            value={user?.id}
            InputLabelProps={{
              shrink: true,
            }}
            disabled
          />
          <DualSwitch check={!user?.isDeleted} values={['disable', 'able']} changeSelectedValue={(s: string)=> console.log(s)}/>
        </Row>
        <Row width='100%' horizontal='space-around'>
          <TextField
            type="text"
            margin="dense"
            label={translate('connection.username')}
            value={user?.username}
            InputLabelProps={{
              shrink: true,
            }}
            disabled
          />
          <TextField
            type="text"
            margin="dense"
            label={translate('connection.name')}
            value={user?.name}
            InputLabelProps={{
              shrink: true,
            }}
            disabled
          />
        </Row>
        <Row width='100%' horizontal='space-around'>
          <TextField
            type="text"
            margin="dense"
            label={translate('connection.city')}
            value={user?.city}
            InputLabelProps={{
              shrink: true,
            }}
            disabled
          />
          <TextField
            type="text"
            margin="dense"
            label={translate('connection.country')}
            value={user?.country}
            InputLabelProps={{
              shrink: true,
            }}
            disabled
          />
        </Row>
        <Column height='600px' style={{overflow: 'auto'}}>
          <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Messages" {...a11yProps(0)} />
            <Tab label="Messages Received" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            {userMessages?.map(message=>(<Card style={{overflow: 'initial'}}>
              <Typography variant='body1'>{message.content}</Typography>
            </Card>))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {receivedMessages?.map(message=>(<Card style={{overflow: 'initial'}}>
              <Typography variant='body1'>{message.content}</Typography>
            </Card>))}
          </TabPanel>
        </Column>
      </Column>
    </Card>
  )
}

function userEffect(arg0: () => void, arg1: (MessageType[] | undefined)[]) {
  throw new Error('Function not implemented.');
}
