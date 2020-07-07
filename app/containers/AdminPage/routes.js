import React from 'react';
import { Route } from 'react-router-dom';
import { UsersList } from '../../components/UsersList';
import UserProfile from '../../components/UserProfile';

export default [
  <Route exact path="/" component={UsersList} />,
  <Route path="/:id" component={UserProfile} />,
];
