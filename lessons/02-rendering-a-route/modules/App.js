import React from 'react';
import { Link, IndexLink } from 'react-router';

export default React.createClass({
  render() {
    return <div>
	          <h1>React Router Tutorial</h1>
			  <ul>
			      <li><Link to="/" onlyActiveOnIndex>Home</Link></li>
			      <li><Link to="/about" activeClassName='active'>About</Link></li>
				  <li><Link to="/repos" activeClassName='active'>Repos</Link></li>
				  
			  </ul>
			  {this.props.children}			  
	       </div>
  }
})
