import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Repos extends Component {
	render(){
		return <div>
		           <ul>
				       <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
					   <li><Link to="/repos/facebook/react">React</Link></li>
				   </ul>
				   {this.props.children}				   
		       </div>
	}
}