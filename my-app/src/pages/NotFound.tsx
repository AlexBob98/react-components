import Header from 'components/Header/Header';
import React from 'react';

class NotFoundPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="not-found title">Not Found</div>
      </>
    );
  }
}

export default NotFoundPage;
