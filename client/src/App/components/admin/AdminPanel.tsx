import { Button, Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Column, Row } from '../common/Flexbox';
import { Filter } from '../common/GenericComponents';
import { UserType } from '../common/types';
import {UserTable} from './UserTable';

export const AdminPanel = ({...props}) => {
  
  const [selectedUser, setSelectedUser] = useState({} as UserType)
  const getUserSelected = (user: UserType)=> console.log( user)

  
  const [filter, setFilter] = useState('');

  
  return (
    <Row style={{paddingTop: '90px'}} height='calc(100vh - 120px)' width='90%' horizontal='center' vertical='center'>
      <UserTable getUserSelected={getUserSelected}  filter={filter}/>
      <Filter filter={filter} setFilter={setFilter}/>
    </Row>
  )
}