export const ARTICLE_ACTION_TYPES = {
  START_FETCHING: 'START_FETCHING',
  HANDLE_FETCHING_DONE: 'HANDLE_FETCHING_DONE',
  HANDLE_ERROR: 'HANDLE_ERROR',
};

const initialState = {
  fetching: false,
  articles: [],
  error: null,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_ACTION_TYPES.START_FETCHING: {
      return {
        articles: [],
        fetching: true,
        error: null,
      };
    }

    case ARTICLE_ACTION_TYPES.HANDLE_ERROR: {
      return {
        articles: [],
        fetching: false,
        error: action.error,
      };
    }

    case ARTICLE_ACTION_TYPES.HANDLE_FETCHING_DONE: {
      return {
        error: null,
        fetching: false,
        articles: action.articles,
      };
    }

    default:
      return state;
  }
};

export default articleReducer;