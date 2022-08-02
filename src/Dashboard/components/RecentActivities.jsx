import { Card, Heading, Stack } from '@shopify/polaris'
import React from 'react'

function RecentActivities() {
	return (
		<>
			<Card sectioned >
					<Heading>Recents Activities</Heading>
					<Card.Section>
						<Stack distribution="equalSpacing">
							<p>Last Order Fetched...</p>
							<p>1 month ago</p>
						</Stack>
					</Card.Section>
			</Card>
		</>
	)
}

export default RecentActivities
