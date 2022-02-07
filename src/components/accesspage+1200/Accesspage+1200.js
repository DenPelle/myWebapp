import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import axios from "../../axios.js"
import InnerWindow from '../InnerWindow.js';

import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import AirIcon from '@mui/icons-material/Air';


class AccesspageMoreThan1200 extends Component {
  constructor() {
    super();
    this.state = {
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  };


  handleSubmit(event) {
    event.preventDefault();
    axios.post('/login', this.state)
    .then(function (response){
      console.log(response)
    })
    .catch(function (error){
      console.log(error)
    });
  };
  render() {
  const { items } = this.state;

  return (
  <div className="access_pageMoreThan1200">
    <div className='spacingAccessPageMoreThan1200'>

    </div>
    <div className="big_container">
      <div className='access_page__contentMoreThan1200'>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit} className='login' >
          <label htmlFor="username">
            <h2>Username</h2>
            <input 
              value={this.state.username}
              onChange={this.handleChange}
              type="text"
              name="username"
              maxLength="20"
              minLength="5"
              autoComplete="off"
              required
              className='username__input' />
          </label>

          <label htmlFor="password">
            <h2>Password</h2>
            <input 
            value={this.state.password} 
            onChange={this.handleChange}  
            type='password' 
            name="password" 
            maxLength="25"
            minLength="8"
            required
            className="password__input"/>
          </label>

            <div className='login__button'>
              <Button
                  type='submit'
                  renderas='button'
                  variant='outlined'
                  style={{border: '1px solid #71499e',backgroundColor: '#3c2d553d', color: '#71499e', fontWeight:"bold", fontSize:18, fontStyle:"normal"}}
                  className="submit__button" >
                <AirIcon className='air__icon'></AirIcon>
              </Button>
          </div>
        </form>
      </div>
      <InnerWindow/>
    </div>
</div>);
  }
};


export default AccesspageMoreThan1200 ;
