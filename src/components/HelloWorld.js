import React from 'react'
import Github from './github.svg?react'
import Bike from './bike.jpeg'
import AngularSrc from './angular.svg'
import styles from './Hello.module.css'

const HelloWorld = () => {
	return (
		<div>
			<div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
				<div className="sm:flex sm:items-center px-6 py-4">
					<img
						className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
						src="https://avatars.githubusercontent.com/u/10122431?s=400&v=4"
						alt=""
					/>
					<div className="text-center sm:text-left sm:flex-grow">
						<div className="mb-4">
							<p className="text-xl leading-tight">John Doe</p>
							<p className="text-sm leading-tight text-grey-dark">
								Contributor at somerepo
							</p>
						</div>
						<div>
							<button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple-500 text-purple-500 hover:bg-purple hover:text-blue-400">
								Message
							</button>
						</div>
					</div>
				</div>
			</div>
			<img className="w-[40px] h-[40px]" src={AngularSrc} alt="" />
			<img className="w-24" src={Bike} alt="" />
			<div>
				<h1 className="text-4xl text-red-600 font-body">Hello -- Not modules</h1>
				<div className={styles.className}>
					<h1>Hello</h1>
					<p>Nested</p>
				</div>
			</div>
			<Github />
		</div>
	)
}

export default HelloWorld
