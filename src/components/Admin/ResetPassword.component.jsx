import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
	const { token } = useParams()
	const [values, setValues] = useState({ password: '', passwordConfirm: '' })

	const { password, passwordConfirm, error, successMsg } = values

	const handleChange = name => e => {
		setValues({
			...values,
			[name]: e.target.value,
		})
	}

	const handleReset = e => {
		fetch(`http://localhost:8080/api/users/resetPassword/${token}`, {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ password, passwordConfirm }),
		})
			.then(res => res.json())
			.then(res => {
				if (res.error) {
					setValues({ ...values, error: res.message })
				} else {
					setValues({
						...values,
						error: '',
						successMsg: 'Password succesfully updated',
					})
				}
			})
			.catch(err => console.error(err))
	}

	return (
		<div>
			<form>
				<div>
					<label for="password">New password:</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={handleChange('password')}
					/>
				</div>
				<div>
					<label for="passwordConfirm">Confirm new password:</label>
					<input
						type="password"
						name="passwordConfirm"
						value={passwordConfirm}
						onChange={handleChange('passwordConfirm')}
					/>
				</div>
			</form>
			<button onClick={handleReset}>Reset</button>
			{error && <p style={{ color: 'red' }}> {error}</p>}
			{successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
		</div>
	)
}

export default ResetPassword
