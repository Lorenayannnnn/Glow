import React, { Component } from 'react'
import styled from 'styled-components'
import NavBar from '../components/SubTab/NavBar'
import Router, { useRouter } from 'next/router'

class HomeIndex extends Component {

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <NavBar/>
      </div>
    )
  }
}

export default HomeIndex
