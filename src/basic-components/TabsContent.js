import React from 'react'
import { useState } from 'react'

const TabsContent = () => {
	const [tabCount, setTabCount] = useState([])
	const [activeTab, setActiveTab] = useState(1)

	const showTab = (index) => {
		setActiveTab(index)
	}

	const addTab = () => {
		const newTab = {
			number: tabCount.length + 1
		}
		setTabCount([...tabCount, newTab])
		showTab(tabCount.length + 1)
	}

	const removeTab = (index) => {
		//find tab that corresponds to index
		//remove tab from array
		//return updated array without tab
	}

	return (
		<section>
			<div className="widget-box">
				<h1>Dynamic Tabs</h1>
				<button onClick={() => addTab()}>Add Tab</button>
				<div className="tabs-container">
					{tabCount.map((tab) => (
						<div>
							<div
								className={activeTab === tab.number ? 'active-tab tabs' : 'tabs'}
								key={tab.id}
								onClick={() => showTab(tab.number)}
							>
								<p className="tab-content">{tab.number}</p>
							</div>
						</div>
					))}
				</div>
				<div className="content-container">
					{tabCount.map((tab) => (
						<div className={activeTab === tab.number ? 'active-content' : 'content'}>
							<h2>Content #{tab.number}</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<button onClick={() => removeTab(tab.number)}>Remove Tab</button>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TabsContent
