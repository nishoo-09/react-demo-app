import React from 'react';
import {Link, Redirect} from 'react-router-dom';

export default function navbar(props) {
  
  return (
    <div className="navbar navbar-expand-lg bg-primary">
      <div className="title mx-3" >{props.title}</div>
        <li className="navbar navbar-light"> <a className="navbar-brand" href="/">Home</a></li>
        <li className="navbar navbar-light"> <a className="navbar-brand" href="/about">About</a></li>
        <li className="navbar navbar-light"> <a className="navbar-brand" href="/text-form">TextForm</a></li>
    </div>
  )
}
