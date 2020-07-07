import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core';

import messages from './messages';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardWrapper: {
    width: '50%',
    padding: '10px',
  },
  link: {
    textDecoration: 'none',
  },
});

const ProfileView = ({ userName, userEmail, setIsEdit }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Card className={classes.cardWrapper}>
        <CardActions>
          <Link to="/" className={classes.link}>
            <FormattedMessage {...messages.goBack} />
          </Link>
        </CardActions>
        <CardContent>
          <div>
            <FormattedMessage {...messages.name} />: {userName}
          </div>
          <div>
            <FormattedMessage {...messages.email} />: {userEmail}
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setIsEdit(true)}
          >
            <FormattedMessage {...messages.editProfile} />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

ProfileView.propTypes = {
  userName: PropTypes.string,
  userEmail: PropTypes.string,
  setIsEdit: PropTypes.func,
};

export default ProfileView;
