import React from 'react'
import Ring from '../components/Info/Stats/Ring'

const data: any = [
	{
		label: 'Mantine Enjoyers',
		stats: '100%',
		progress: 100,
		color: 'blue',
		icon: 'up',
	},
	{
		label: 'Chakra Enjoyers',
		stats: '1%',
		progress: 1,
		color: 'red',
		icon: 'down',
	},
	{
		label: 'Python Advocates',
		stats: '5%',
		progress: 5,
		color: 'red',
		icon: 'down',
	},
	{
		label: 'TypeScript Chads',
		stats: '110%',
		progress: 110,
		color: 'blue',
		icon: 'up',
	}
]

const Stats = () => {
	return (
		<>
			<Ring data={data} />
		</>
	)
}

export default Stats