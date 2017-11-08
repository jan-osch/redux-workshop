import { ARTICLE_ACTION_TYPES } from './articleReducer';

const API_KEY = 'd3ecc1b3034342cc816aff0804c076ff';

// Action creator
const articleActions = {

  // Async action example using redux-thunk
  fetchArticles: (source) => {
    return async (dispatch) => {
      try {
        dispatch(articlePrivateActions.startFetching()); // dispatching actions like this

        const response = await fetch(`https://newsapi.org/v1/articles?source=${source}&sortBy=latest&apiKey=${API_KEY}`);
        const parsed = await response.json();

        if (response.status !== 200) {
          return dispatch(articlePrivateActions.handleError(parsed.message));
        }

        dispatch(articlePrivateActions.handleSuccess(parsed.articles));
      } catch (error) {
        dispatch(articlePrivateActions.handleError(error.message));
      }
    };
  },
};


const articlePrivateActions = {
  handleError: error => ({ type: ARTICLE_ACTION_TYPES.HANDLE_ERROR, error }),
  handleSuccess: articles => ({ type: ARTICLE_ACTION_TYPES.HANDLE_FETCHING_DONE, articles }),
  startFetching: () => ({ type: ARTICLE_ACTION_TYPES.START_FETCHING }),
};

export default articleActions;