import React from 'react';
import './App.css';


function App() {
	const stars = [...Array(5)].map(() => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="min-w-[20px] min-h-[20px] max-w-[88px] max-h-[88px] text-star-yellow">
				<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
			</svg>
		);
	});

	interface Message {
		one: string;
		two: string;
		three: string;
		four: string;
		five: string;
	}
	const message: Message = {
		one: "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
		two: "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
		three: "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
		four: "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
		five: "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform.",
	};

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
						<p className="text-center font-p text-sm desktop:text-lg text-text-gray max-w-[647px]">{message.five}</p>
				</div>
		</div>
  );
}

export default App;