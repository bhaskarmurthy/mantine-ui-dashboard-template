import React from 'react'
import NotificationOverview from '../components/Layout/Notifications/NotificationOverview'

const notificationMock: any = [
	{
		title: 'Test Notification',
		text: 'This is a test',
		type: 'success'
	},
	{
		title: 'Test Error!',
		text: 'this is a test for an error',
		type: 'error',
	},
	{
		title: 'Test Loading',
		text: 'Please wait for something',
		loading: true,
	}

]

const Notifications = () => {
	return (
		<>
			<NotificationOverview data={notificationMock} />
		</>

	)
}

export default Notifications