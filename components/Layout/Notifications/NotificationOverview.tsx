import React from 'react'
import { Stack, Notification } from '@mantine/core'
import { Check, X } from 'tabler-icons-react';

interface NotificationOverviewProps {
	data: {
		title: string;
		text: string;
		type: 'success' | 'error';
		loading?: boolean;
	}[]
}


const NotificationOverview = ({ data }: NotificationOverviewProps) => {

	const rows = data.map((item, index) => {
		return (
			<Notification title={item.title} icon={item.type === 'error' ? <X size={18} /> : <Check size={18} />} loading={item.loading} disallowClose={item.loading} color={item.type === 'error' ? 'red' : 'teal'} key={index}>
				{item.text}
			</Notification>
		)
	})

	return (
		<Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
			{rows}
		</Stack>
	);
}

export default NotificationOverview