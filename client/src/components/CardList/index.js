import React, { Component } from 'react';

class CardList extends Component {
  renderCardlist = () => {
    const { allCardList } = this.props;
    return allCardList.map(item => {
      return (
        <div className='card-list' key={item.id}>
          <div className='item'>{item.name}</div>
          <div className='item'>{item.cardNumber}</div>
          <div className='item'>£{item.balance}</div>
          <div className='item'>£{item.limit}</div>
        </div>
      );
    });
  };
  render() {
    const { allCardList } = this.props;
    return (
      <div className='list'>
        <h5>Existing Cards</h5>
        <div className='card-list header'>
          <div className='item'>Name</div>
          <div className='item'>Card Number</div>
          <div className='item'>Balance</div>
          <div className='item'>Limit</div>
        </div>
        {allCardList.length > 0 && this.renderCardlist()}
      </div>
    );
  }
}

export default CardList;
