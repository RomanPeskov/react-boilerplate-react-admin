import React, { useState } from 'react';
import { Button, TextField, makeStyles, Card } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { PropTypes } from 'prop-types';

import messages from './messages';

const useStyles = makeStyles({
  wrapper: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
    width: '50%',
  },
  field: {
    width: '90%',
    marginBottom: '20px',
  },
  saveButton: {
    width: '40%',
  },
});

const ProfileForm = ({ userName, userEmail, handleSave, loading }) => {
  const classes = useStyles();
  const [userData, setUserData] = useState({
    name: userName,
    email: userEmail,
  });

  const handleChange = e =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  return (
    <Card className={classes.wrapper}>
      <TextField
        className={classes.field}
        name="name"
        id="standard-basic"
        label="name"
        defaultValue={userData.name}
        onChange={handleChange}
      />
      <TextField
        className={classes.field}
        name="email"
        id="standard-basic"
        label="email"
        defaultValue={userData.email}
        onChange={handleChange}
      />
      <Button
        className={classes.saveButton}
        disabled={loading}
        variant="outlined"
        color="primary"
        onClick={() => handleSave(userData)}
      >
        <FormattedMessage {...messages.saveProfile} />
      </Button>
    </Card>
  );
};

ProfileForm.propTypes = {
  userName: PropTypes.string,
  userEmail: PropTypes.string,
  handleSave: PropTypes.func,
  loading: PropTypes.bool,
};

export default ProfileForm;
