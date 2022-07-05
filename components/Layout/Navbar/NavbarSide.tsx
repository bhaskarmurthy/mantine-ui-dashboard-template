import { Box, Navbar, ScrollArea } from '@mantine/core'
import React from 'react'
import { User } from '../../Info/User/User'
import { MainLinks } from '../../Links/MainLinks'

const NavbarSide = () => {
	return (
		<Navbar p="xs" width={{ base: 325 }}>
			<Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
				<Box py="md">
					<MainLinks />
				</Box>
			</Navbar.Section>
			<Navbar.Section>
				<User />
			</Navbar.Section>
		</Navbar>
	)
}

export default NavbarSide