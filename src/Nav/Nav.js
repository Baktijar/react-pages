import React from 'react';
import Link from './Link/Link';

function Nav(props) {
  const links = props.data.map(
    link => <Link url={link.url}>{link.title}</Link>
  );

  return (
    <nav className="Nav">
      {links}
    </nav>
  );
}

export default Nav;