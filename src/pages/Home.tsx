import CardList from 'components/CardList/CardList';
import Header from 'components/Header/Header';
import SearchForm from 'components/search/search';
import React from 'react';
import './style.css';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SearchForm />
        <div className="home-page title">Home Page</div>
        <CardList />
      </>
    );
  }
}

export default HomePage;
