import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'

const Tab = ({ tab, isFilterTab, isActivetab, handleClick }) => {
	const snap = useSnapshot(state)
	const activeStyles =
		isFilterTab && isActivetab
			? { bakcgroundColor: snap.color, opacity: 0.5 }
			: { bakcgroundColor: 'transparent', opacity: 1 }
	return (
		<div
			key={tab.name}
			className={`tab-btn ${
				isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'
			}`}
			onClick={handleClick}
			style={activeStyles}
		>
			<img
				src={tab.icon}
				alt={tab.name}
				className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12'}`}
			/>
		</div>
	)
}

export default Tab
