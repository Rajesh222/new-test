import React, { Component } from 'react';
import CardList from './CardList';
import {baseUrl} from '../config';

class CardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cardNumber: '',
            limit: '',
            balance: '',
            allCardList:[],
            isError: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChannge = this.handleChannge.bind(this);
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        const { name, cardNumber, limit, balance } = this.state;
        const data = {
            name, cardNumber, limit, balance
        }
        if (!name && !cardNumber && !limit && !balance) {
            return;
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const url = `${baseUrl}/cards`;
        
        fetch(url, options)
            .then(res => res.json())
            .then(res => { 
                this.setState({
                    name: '',
                    cardNumber: '',
                    limit: '',
                    balance: '',
                });
                this.getAllCards();
            }).catch((err) => {
                this.setState({isError: true});
            });
    }
    handleChannge = (e) => {
        let change = {};
        let value = e.target.value
        if (e.target.name === 'cardNumber') {
           value = this.cc_format(value);
        }
        change[e.target.name] = value;
        this.setState(change);
    }
    cc_format = (value)=> {
        let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        let matches = v.match(/\d{4,16}/g);
        let match = (matches && matches[0]) || '';
        let parts = [];
        const len =match.length;
        for (let i=0 ; i < len; i+=4) {
          parts.push(match.substring(i, i+4))
        }
        if (parts.length) {
          return parts.join(' ')
        } else {
          return value
        }
    }
    componentDidMount() {
        this.getAllCards();
    }
    getAllCards = () => {
        const url =  `${baseUrl}/cards`;   
        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({allCardList: res.cards}));
    }
    render() {
        const { name, cardNumber, limit, balance, allCardList } = this.state;
        return (
            <div className="card-form">
                <h4>Credit Card System</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="control-input">Name:<br />
                        <input type="text" name="name" value={name} onChange={this.handleChannge} required/>
                    </div>
                    <div className="control-input">
                        Card number:<br />
                        <input type="text" name="cardNumber" value={cardNumber} onChange={this.handleChannge} required/>
                    </div>
                    <div className="control-input">
                        Limit:<br />
                        <input type="text" name="limit" value={limit} onChange={this.handleChannge} required/>
                    </div>
                    <div className="control-input">
                        Balance:<br />
                        <input type="text" name="balance" value={balance} onChange={this.handleChannge} required/>
                    </div>
                    <div className="control-input">
                        <input className="submit-btn" type="submit" value="Add" />
                    </div>
                </form> 
                <CardList allCardList={allCardList} />
            </div>
        );
    }
}

export default CardForm;
