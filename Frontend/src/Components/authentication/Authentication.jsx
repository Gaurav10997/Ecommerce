
import React, { useState } from 'react'
import Login from './Login'
import { useIsLogin } from '../../store/AuthContext'
function Authentication() {
  const login = useIsLogin()
  if(login){
    window.location="/"
  }
  return (
    <>
   {!login && <Login></Login>}
    </>

  )
}

export default Authentication