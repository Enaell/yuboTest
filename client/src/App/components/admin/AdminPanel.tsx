import { Button, Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Column, Row } from '../common/Flexbox';
import { useAdmin } from './adminHooks';



export const AdminPanel = ({...props}) => {
  
  const {users, updateUser} = useAdmin();

  return (
    <Column height='100vh' width='100%' horizontal='center' vertical='space-around'>
    </Column>
  )
}