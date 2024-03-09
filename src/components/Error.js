import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from '../components/Header';

const Error = () => {
    const err = useRouteError();
  return (
    <div></div>
  )
}

export default Error