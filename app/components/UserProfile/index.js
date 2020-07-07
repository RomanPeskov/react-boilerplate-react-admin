import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { PropTypes } from 'prop-types';
import {
  useQueryWithStore,
  useRefresh,
  useUpdate,
  Loading,
  Error,
  GET_ONE,
  UPDATE,
} from 'react-admin';

import ProfileForm from './ProfileForm';
import ProfileView from './ProfileView';
import messages from './messages';

const UserProfile = props => {
  const [isEdit, setIsEdit] = useState(false);
  const [mutate, { loading: mutationLoading }] = useUpdate();
  const refresh = useRefresh();

  const { data, loading, error } = useQueryWithStore({
    type: GET_ONE,
    payload: { id: props.match.params.id },
  });

  useEffect(() => {
    if (!mutationLoading) refresh();
  }, [mutationLoading]);

  if (loading || mutationLoading) return <Loading />;
  if (error) return <Error />;
  if (!data) return <FormattedMessage {...messages.notFound} />;

  const handleSave = userData => {
    mutate({
      type: UPDATE,
      payload: {
        id: props.match.params.id,
        data: { ...data, ...userData },
      },
    });
    setIsEdit(false);
  };

  const { name, email } = data;

  return isEdit ? (
    <ProfileForm
      userName={name}
      userEmail={email}
      handleSave={handleSave}
      loading={mutationLoading}
    />
  ) : (
    <ProfileView userName={name} userEmail={email} setIsEdit={setIsEdit} />
  );
};

UserProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default UserProfile;
