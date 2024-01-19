import React, { useState } from 'react';
import './App.css';
import { Star } from './Star';

function App() {
	const [ rating, setRating ] = useState<number>(0);
	const [ hover, setHover ] = useState<number>(0);

	const stars = [...Array(5)].map((star, index: number) => {
		return (
			<button
				type="button" key={ index } value={ index }
				onClick={ () => setRating(index) }
				onMouseEnter={ () => setHover(index) }
				onMouseLeave={ () => setHover(rating) }
				className="w-full h-full">
				<Star color={index <= (hover || rating)? "text-star-yellow": "text-star-gray"}/>
			</button>
		);
	});

	type Message = [string, string, string, string, string]
	const message: Message = [
		"We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
		"We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
		"Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
		"Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
		"Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform."
	];

	return (
    	<div className="
			bg-bg-purple
			w-screen h-screen
			flex justify-center items-center">
				<div className="
					bg-white rounded-xl shadow-card p-6 desktop:p-16
					flex flex-col justify-center items-center">
						<h1 className="text-center font-heading text-lg desktop:text-2xl">
							How many stars would you give to our
							<br/>
							Online Code Editior?
						</h1>
						<div className="py-4 desktop:py-8 flex place-content-between w-9/12 desktop:w-[548px]">
							{ stars }
						</div>
						<p className="text-center font-p text-sm desktop:text-lg text-text-gray max-w-[647px]">{message[hover]}</p>
				</div>
		</div>
  );
}

export default App;