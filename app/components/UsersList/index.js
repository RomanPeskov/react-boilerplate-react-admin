import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useQueryWithStore, Loading, Error, GET_LIST } from 'react-admin';
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

import messages from './messages';

const useStyles = makeStyles({
  wrapper: {
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
  },
});

export const UsersList = () => {
  const { data, loading, error } = useQueryWithStore({ type: GET_LIST });
  const classes = useStyles();

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data.length) {
    return (
      <div>
        <FormattedMessage {...messages.notFound} />
      </div>
    );
  }

  return data.map(({ doc: { name, _id } }) => (
    <Card key={_id} className={classes.wrapper}>
      <CardContent>
        <FormattedMessage {...messages.name} />: {name}
      </CardContent>
      <CardActions>
        <Link to={`/${_id}`} className={classes.link}>
          <Typography variant="button">
            <FormattedMessage {...messages.readMore} />
          </Typography>
        </Link>
      </CardActions>
    </Card>
  ));
};
