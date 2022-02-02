import React from 'react'

export const Button = ({ color }) => (
	<button
		className={`my-btn ${
			color === 'blue' ? 'my-btn-blue' : color === 'green' ? 'my-btn-green' : ''
		}`}
	>
		Click me
	</button>
)

export default Button
