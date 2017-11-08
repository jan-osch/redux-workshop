import React from 'react';

import { connect } from 'react-redux';
import articleActions from '../redux/articleActions';

const ArticlesPresentation = ({ articles, error, fetching, fetchNew }) => {
  let input;

  return (
    <div className='Articles'>
      <h1>Some interesting articles to distract</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          fetchNew(input.value);
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">
          Fetch
        </button>
      </form>

      {fetching && 'fetching...'}
      {error && `An error occured: ${error}`}
      <ul>

        {
          articles.map(article => (
            <li key={article.url}>
              <a href={article.url}
                 target='_blank'
              >
                {article.title}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};


const mapStateToProps = (state) => ({
  articles: state.article.articles,
  fetching: state.article.fetching,
  error: state.article.error,
});


const mapDispatchToProps = dispatch => ({
  fetchNew: source => dispatch(articleActions.fetchArticles(source)),
});

const Articles = connect(mapStateToProps, mapDispatchToProps)(ArticlesPresentation);

export default Articles;
