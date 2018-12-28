import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
	render() {
		const { recipes, handleDetails, value, handleChange, handleSubmit, error } = this.props;
		return (
			<React.Fragment>
				<RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
				<div className="container my-5">
					<div className="row">
						<div className="col-10 mx-auto col-md-6 text-center text-capitalize mb-3">
							<h1 className="display-4"><span role="img" aria-label="cool emoji">😎</span>Top 30 Recipes</h1>
							<p className="lead">These recipes will leave you salivating...</p>
						</div>
					</div>
					<div className="row">
						{error ? (
							<h1 className="text-danger text-center">{error}</h1>
						) : (
							recipes.map((recipe) => (
								<Recipe
									key={recipe.recipe_id}
									recipe={recipe}
									handleDetails={() => handleDetails(0, recipe.recipe_id)}
								/>
							))
						)}
					</div>
				</div>
			</React.Fragment>
		);
	}
}
