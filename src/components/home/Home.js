import React from 'react';
import './Home.css';

export default function Home({ handleIndex }) {
	return (
		<div className="main">
			<div className="row justify-content-center align-items-center full">
				<div className="col-10 text-center mx-auto">
					<h1 className="display-4 text-center text-capitalize text-light">
						<span role="img" aria-label="corn">
							🍟
						</span>oyibo recipes
					</h1>
					<button className="btn btn-light btn-lg" onClick={() => handleIndex(1)}>
						<span role="img" aria-label="pizza">
							🍕
						</span>{' '}
						Go to Recipe list
					</button>
				</div>
			</div>
			<footer className="ml-3">
				<p className="text-white">
					Developed with some{' '}
					<span role="img" aria-label="footer-corn">
						🍟
					</span>{' '}
					by Runo<span aria-label="footer-emoji" role="img">
						😎
					</span>{' '}
				</p>
			</footer>
		</div>
	);
}
