import React, { Component } from 'react';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './components/RecipeList';
// import { recipes } from './tempList';
import axios from 'axios';
import Home from './components/home/Home';
import RecipeDetails from './components/RecipeDetails';
const apiKey = '97bc28e221bb03501dd3a62460c21ba2';
export default class App extends Component {
	state = {
		recipes: [],
		url: `https://www.food2fork.com/api/search?key=${apiKey}`,
		base_url: `https://www.food2fork.com/api/search?key=${apiKey}`,
		details_id: 35380,
		pageIndex: 2,
		search: '',
		query: '&q=',
		error: ''
	};

	async getRecipes() {
		try {
			const { url } = this.state;
			const res = await axios.get(url);
			const { recipes } = res.data;

			if (recipes.length === 0) {
				this.setState({
					error: 'Sorry, But your search did not return any results'
				});
			} else {
				this.setState({
					recipes: recipes
				});
			}
		} catch (error) {
			console.log(error);
		}
	}

	componentDidMount() {
		this.getRecipes();
	}
	displayPage = (index) => {
		switch (index) {
			default:
			case 2:
				return <Home handleIndex={this.handleIndex} />;
			case 1:
				return (
					<RecipeList
						recipes={this.state.recipes}
						handleDetails={this.handleDetails}
						value={this.state.search}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
						error={this.state.error}
					/>
				);
			case 0:
				return <RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex} />;
		}
	};
	//This is to take us back to recipe list
	handleIndex = (index) => {
		this.setState({
			pageIndex: index
		});
	};

	handleDetails = (index, id) => {
		this.setState({
			pageIndex: index,
			details_id: id
		});
	};

	handleChange = (e) => {
		this.setState({
			search: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { base_url, query, search } = this.state;
		this.setState(
			() => {
				return {
					url: `${base_url}${query}${search}`,
					search: ''
				};
			},
			() => this.getRecipes()
		);
	};
	render() {
		return (
			<React.Fragment>
				<div className="bg-light" style={{ minHeight: '100vh' }}>
					{this.displayPage(this.state.pageIndex)}
				</div>
			</React.Fragment>
		);
	}
}
