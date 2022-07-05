import { Group, Header } from '@mantine/core'
import React from 'react'
import { Logo } from '../../Info/Logo/Logo'

const HeaderSidebar = () => {
	return (
		<Header height={60}>
			<Group sx={{ height: '100%' }} px={20} position="apart">
				<Logo colorScheme={'dark'} />
			</Group>
		</Header>
	)
}

export default HeaderSidebar