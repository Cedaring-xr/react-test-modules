import React from 'react'
import { useState } from 'react'

const TabsContent = () => {
	const [tabCount, setTabCount] = useState([])
	const [activeTab, setActiveTab] = useState(1)

	const showTab = (index) => {
		setActiveTab(index)
	}

	const addTab = () => {
		console.log('adding tab')
		const newTab = {
			text: 'new tab'
		}
		setTabCount([...tabCount, newTab])
		showTab(tabCount.length + 1)
	}

	return (
		<section>
			<div className="widget-box">
				<h1>Dynamic Tabs</h1>
				<button onClick={() => addTab()}>Add Tab</button>
				{tabCount.map((tab) => (
					<div className="tabs" key={tab.id}></div>
				))}
				<div className="tabs-content">
					<h2>Content</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</div>
			</div>
		</section>
	)
}

export default TabsContent
