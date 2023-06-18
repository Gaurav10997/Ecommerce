
import React, { useState } from 'react'
import Login from './Login'
import Me from '../me/me'
import { useIsLogin, useToken } from '../../store/AuthContext'
function Authentication() {
  const login = useIsLogin()
  // const token = useToken()
  const token = localStorage.getItem('token')
  // console.log(token)
  return (
    <>
   {!token && <Login></Login>}
   {token && <Me/>}
    </>

  )
}

export default Authentication