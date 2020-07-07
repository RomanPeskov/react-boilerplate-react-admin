import { GET_LIST, GET_ONE, UPDATE } from 'react-admin';
import PouchDB from 'pouchdb';

import { removeObjKey } from '../../utils/removeObjKey';

export const dataProvider = database => {
  const db = new PouchDB(database);

  /* eslint-disable no-underscore-dangle */
  const convertRequest = (type, payload) => {
    switch (type) {
      case GET_LIST: {
        const page =
          payload && payload.pagination && payload.pagination.page != null
            ? payload.pagination.page
            : 1;

        const perPage =
          payload && payload && payload.pagination.perPage != null
            ? payload.pagination.perPage
            : 10;

        const field =
          payload && payload.sort && payload.sort.field != null
            ? payload.sort.field
            : '_id';

        const order =
          payload && payload.sort && payload.sort.order != null
            ? payload.sort.order
            : 'ASC';

        const query = {
          include_docs: true,
          sort: [{ [field]: order.toLowerCase() }],
          limit: perPage,
          skip: (page - 1) * perPage,
        };

        return db.allDocs(query);
      }
      case GET_ONE:
        return db.get(`${payload.id}`);
      case UPDATE:
        removeObjKey(payload.data, ['id']);
        return db.put(payload.data);
      default:
        throw new Error(`Unsupported fetch action type ${type}`);
    }
  };

  const convertResponse = (response, type) => {
    switch (type) {
      case GET_LIST:
        return { data: response.rows, total: response.rows.length };
      case GET_ONE:
        return { data: { ...response, id: +response._id } };
      default:
        return { data: response };
    }
  };

  return async (type, resource, payload) => {
    const response = await convertRequest(type, payload);
    return convertResponse(response, type);
  };
};
