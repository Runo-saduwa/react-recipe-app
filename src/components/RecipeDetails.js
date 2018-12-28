import React, { Component } from 'react';
import { recipe } from '../tempDetails';
import axios from 'axios';
const apiKey = '97bc28e221bb03501dd3a62460c21ba2';
export default class RecipeDetails extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		recipe: recipe,
	// 		url: `https://www.food2fork.com/api/get?key=${apiKey}&rId=${this.props.id}`
	// 	};
	// }

	// async componentDidMount() {
	// 	try {

	//         const res = await axios.get(this.state.url);
	//         console.log(res.data);
	//          const { recipe } = res.data;

	// 		this.setState({
	// 			recipe: recipe
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }
	state = {
		recipe: recipe
	};
	async componentDidMount() {
		const id = this.props.id;
		const url = `https://www.food2fork.com/api/get?key=${apiKey}&rId=${id}`;

		try {
			const res = await axios.get(url);
			console.log(res.data);
			const { recipe } = res.data;

			this.setState(
				(state, props) => {
					return { recipe: recipe };
				},
				() => {}
			);
		} catch (error) {
			console.log(error);
		}
	}
	render() {
        const { image_url, publisher, publisher_url, source_url, title, ingredients } = this.state.recipe;
        const {handleIndex} = this.props
		return (
			<React.Fragment>
				<div className="container">
					<div className="row justify-content-center align-items-center" style={{height:"100vh"}}>
						<div className="col-10 col-md-6 my-3 mx-auto">
                            <button onClick={()=> handleIndex(1)} type="button" className="btn btn-warning mb-5 text-capitalize">
								<i className="fas fa-arrow-left" /> Back to recipe list
							</button>
							<img src={image_url} className="d-block w-100" alt="recipe" />
						</div>
						<div className="col-10 col-md-6 my-3 mx-auto">
							<h6 className="text-capitalize text-center" style={{ fontSize: '1.5rem' }}>
								{title}
							</h6>
							<h6 className="text-warning text-capitalize text-center">Provided by {publisher}</h6>

							<ul className="list-group mt-1">
								<h2 className="mt-3 mb-4 text-capitalize text-center">ingredients</h2>
								{ingredients.map((item, index) => {
									return (
										<li key={index} className="list-group-item">
											{item}
										</li>
									);
								})}
							</ul>
							<div style={{ float: 'right' }}>
								<a
									href={publisher_url}
									rel="noopener noreferrer"
									className="btn btn-dark mt-2 mx-2 text-capitalize"
								>
									publishers site
								</a>
								<a
									href={source_url}
									rel="noopener noreferrer"
									className="btn btn-success mt-2 text-capitalize"
								>
									recipe url
								</a>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
