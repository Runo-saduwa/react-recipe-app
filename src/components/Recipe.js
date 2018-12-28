import React, { Component } from 'react';

export default class Recipe extends Component {
	render() {
		const { image_url, title, publisher } = this.props.recipe;
		const { handleDetails } = this.props;
		return (
			<React.Fragment>
				<div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
					<div className="card" style={cardStyles}>
						<img src={image_url} className="card-img-top" alt="the recipe" style={{ height: '14rem' }} />
						<div className="card-body">
							<h4 className="card-title text-captalize">{title}</h4>
							<p className="card-text text-warning">Provided by {publisher}</p>
							<button onClick={handleDetails} className="btn btn-outline-dark">
								Details
							</button>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const cardStyles = {
	boxShadow: '0 10px 15px rgba(0,0,0, 0.11)'
};
