import { Container } from '@mantine/core'
import type { NextPage } from 'next'
import Ring from '../components/Info/Stats/Ring'
import StatsCard from '../components/Layout/Cards/StatCard'

const mockData: any = [
	{
		"title": "Project tasks",
		"completed": 1887,
		"total": 2334,
		"stats": [
			{
				"value": 447,
				"label": "Remaining"
			},
			{
				"value": 76,
				"label": "In progress"
			}
		]
	}
]
const Home: NextPage = () => {
	return (
		<>
			{
				mockData.map((item: any, index: number) => {
					return <StatsCard title={item.title} completed={item.completed} total={item.total} stats={item.stats} />
				})
			}
		</>
	)
}

export default Home
