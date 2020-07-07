import React from 'react';
import { Helmet } from 'react-helmet';

import AdminPage from '../AdminPage';

const App = () => (
  <>
    <Helmet
      titleTemplate="%s - React-boilerplate-admin"
      defaultTitle="React-boilerplate-admin"
    >
      <meta
        name="description"
        content="Integration react-boilerplate and react-admin"
      />
    </Helmet>
    <AdminPage />
  </>
);

export default App;
