import React from 'react';
import { Admin, adminReducer } from 'react-admin';
import { connectRouter } from 'connected-react-router';
import { compose } from 'redux';

import history from '../../utils/history';
import injectReducer from '../../utils/injectReducer';
import NotFound from '../NotFoundPage/Loadable';
import authProvider from './authProvider';
import { dataProvider } from './dataProvider';
import config from './config.json';
import customRoutes from './routes';

const { dataProviderUrl } = config;

const AdminPage = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider(dataProviderUrl)}
    history={history}
    customRoutes={customRoutes}
    allCatch={NotFound}
  >
    {/* Required to display a route with a path "/" */}
    <></>
  </Admin>
);

const withAdmin = injectReducer({
  key: 'admin',
  reducer: adminReducer,
});

const withConnectRouter = injectReducer({
  key: 'router',
  reducer: connectRouter(history),
});

export default compose(
  withAdmin,
  withConnectRouter,
)(AdminPage);
