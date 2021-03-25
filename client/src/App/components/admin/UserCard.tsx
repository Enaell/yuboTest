import { Card, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Column, Row } from '../common/Flexbox';
import { UserType } from '../common/types';
import translate from 'counterpart';
import { DualSwitch } from '../common/GenericComponents';

type UserCardProps = {
  user?: UserType
}

export const UserCard = ({user}: UserCardProps) => {


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
      </Column>
    </Card>
  )
}