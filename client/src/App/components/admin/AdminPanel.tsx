import { Button, Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Column, Row } from '../common/Flexbox';
import { Filter } from '../common/GenericComponents';
import { UserType } from '../common/types';
import { useUserList, useUserSelected } from './adminHooks';
import { UserCard } from './UserCard';
import {UserTable} from './UserTable';

export const AdminPanel = ({...props}) => {
  
  const [selectedUser, setSelectedUser] = useState({} as UserType)
  const getUserSelected = (user: UserType)=> {console.log( user)}
  
  const {users, filter, setFilter} = useUserList(); 
  const {userSelected, setUserSelected} = useUserSelected();
  
  return (
    <Row style={{paddingTop: '90px'}} height='calc(100vh - 120px)' width='90%' horizontal='space-around' vertical='center'>
      <UserTable users={users} getUserSelected={setUserSelected} />
      <Column width='40%'>
        <Filter filter={filter} setFilter={setFilter}/>
        <UserCard user={userSelected}/>
      </Column>
    </Row>
  )
}