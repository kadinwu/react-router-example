import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Repo extends Component {
	render(){
		return <div>
                   <ul>
				       <li>{this.props.params.repoName}</li>
					   <li>{this.props.params.userName}</li>
				   </ul>
		       </div>
	}
}