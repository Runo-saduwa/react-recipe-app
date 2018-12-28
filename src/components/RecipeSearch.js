import React, { Component } from 'react';

export default class RecipeSearch extends Component {

	render() {
    const {value, handleChange, handleSubmit} = this.props
		return (
			<div className="container text-center">
				<div className="row">
					<div className="col mx-auto col-md-8 mt-5">
						<h1 className="text-capitalize text-center">Search for Recipe</h1>
						<form className="mt-4" onSubmit={handleSubmit}>
							<label htmlFor="search" className="text-captalize lead">
								type recipes seperated by commas
							</label>
							<div className="input-group">
								<input
									type="text"
									name="search"
									placeholder="Chicken, Cakes, Vegetables"
                  className="form-control"
                  value={value}
                  onChange={handleChange}

								/>
								<div className="input-group-append">
									<button type="submit" className="input-group-text bg-dark text-white">
										<i className="fas fa-search" />
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
