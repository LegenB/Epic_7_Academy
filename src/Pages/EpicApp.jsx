import React from 'react'
import { Header } from '../common/header'

import { Outlet } from 'react-router-dom';

export const EpicApp = () => {
  return (
    <>
        <Header/>
        <Outlet/>   
    </>
  )
}

