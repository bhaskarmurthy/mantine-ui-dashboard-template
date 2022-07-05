import { AppProps } from 'next/app';
import Head from 'next/head';
import { ActionIcon, AppShell, Box, Container, Group, Header, MantineProvider, Navbar, ScrollArea, useMantineColorScheme } from '@mantine/core';
import { MainLinks } from '../components/Links/MainLinks';
import { User, Sun, MoonStars } from 'tabler-icons-react';
import { Logo } from '../components/Info/Logo/Logo';
import NavbarSide from '../components/Layout/Navbar/NavbarSide';
import HeaderSidebar from '../components/Layout/Header/HeaderSidebar';
import Footer from '../components/Layout/Footer/Footer';

const App = (props: AppProps) => {
	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<title>Mikku Dash</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					/** Put your mantine theme override here */
					colorScheme: 'dark',
				}}
			>
				<AppShell
					padding="md"
					navbar={
						<NavbarSide />
					}
					header={
						<HeaderSidebar />
					}
					styles={(theme) => ({
						main: {
							backgroundColor:
								theme.colors.dark[8]
						},
					})}
				>

					<Container>
						<Component {...pageProps} />
					</Container>
				</AppShell>
				<Footer />
			</MantineProvider>
		</>
	);
}

export default App