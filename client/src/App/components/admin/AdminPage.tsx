import React from 'react';
import { Row } from '../common/Flexbox';
import { UserType } from '../common/types';
import { Route } from 'react-router-dom';
import { AdminPanel } from './AdminPanel';
import { useAdmin } from './adminHooks';

export const AdminPage = () => {

  return(
      <Row horizontal='center'>
        <Route
          key={'admin'}
          path={'/admin'}
          render={ props => <AdminPanel {...props} />}
        />
      </Row>
    );
}