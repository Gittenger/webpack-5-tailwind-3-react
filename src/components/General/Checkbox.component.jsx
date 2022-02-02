import React from 'react'

const Checkbox = ({ label, className, checked, handleInputChange, name }) => (
	<div className={className}>
		<input
			id="id1"
			type="checkbox"
			checked={checked}
			onChange={handleInputChange}
			name={name}
		/>
		<label htmlFor="id1">{label}</label>
	</div>
)

export default Checkbox
