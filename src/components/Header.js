import React from 'react';
import { IndexLink, Link } from 'react-router';


//Stateless component structure
const Header = ({theme}) => {
  return (
    <div>
      <nav className={`${theme}-gradient pa3 pa4-ns`}>
        <Link to="/" className={`${theme}-shadow link ttu f-5 f-headline-l tc db mb3 mb4-ns`} title="Home">David Allen</Link>
        <div className="cf tc pb3">
          <IndexLink activeClassName='bb' to="/" className="link white grow f4 f3-ns fw7 fw6-ns pb2 dib mr3" title="Work">Home</IndexLink>
          <Link activeClassName='bb' to="/work" className="link white grow f4 f3-ns fw7 fw6-ns pb2 dib mr3" title="Work">Work</Link>
          <Link activeClassName='bb' to="/play" className="link white grow f4 f3-ns fw7 fw6-ns pb2 dib mr3" title="Play">Play</Link>
          <Link activeClassName='bb' to="/contact" className="link white grow f4 f3-ns fw7 fw6-ns fw6 pb2 dib" title="Contact">Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
