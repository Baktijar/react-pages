import React from 'react';
import Title from './Title/Title';

function Header(props) {
  return <Title>{props.data.title}</Title>;
}

export default Header;