import React, { Component } from 'react'
import ServiceWrapper from '../components/ServiceWrapper'
import styled from 'styled-components'
import Router from 'next/router'
import Steve from 'MCSteve.png'

class Home extends Component {
  state = {
    username: '',
    password: ''
  }

  changeUserInfo(dataType:any) {
    return (event:any) => {
      this.setState({[dataType]: event.target.value})
    }
  }

  render() {
    return (
      <ServiceWrapper>
        <Header>Welcome!!!</Header>
        <InputSection>
          <LogoImg src={Steve} />
          <InputBar placeholder={'Username'} onChange={this.changeUserInfo('username')}/>
          <InputBar type={'password'} placeholder={'Password'} onChange={this.changeUserInfo('password')}/><br/>
          <LoginBtn onClick={this.login}>Login</LoginBtn>
        </InputSection>
      </ServiceWrapper>
    )
  }

  login = () => {
    const {username, password} = this.state;
    if (username === 'Lorena' && password === '123') {
      Router.push({
        pathname: '/homeIndex',
        query: {
          username: username
        }
      });
    } else {
      alert("Invalid username or password")
    }
  }
}

export default Home

const Header = styled.h1`
  margin: 0.67em 1.5rem;
`

const LogoImg = styled.img`
  width: 22rem;
  margin-top: 2rem;
`

const InputSection = styled.div`
  text-align: center;
`

const InputBar = styled.input`
  width: 70%;
  margin-top: 1rem;
  padding: 0.5rem;
  border: 0.1rem solid royalblue;
  border-radius: 0.4rem;
  :focus {
    outline: none;
    box-shadow: 0 0 0.6rem 0 royalblue;
  }
`

const LoginBtn = styled.button`
  margin-top: 2rem;
  background: white;
  border: 0.1rem solid royalblue;
  border-radius: 0.4rem;
  padding: 0.3rem 1rem;
  :active {
    background: #E0EBFC;
  }
  :focus {
    outline: none;
  }
`
