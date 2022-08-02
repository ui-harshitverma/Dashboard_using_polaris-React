import { Badge, Card, DisplayText, Heading, Stack } from '@shopify/polaris'
import React from 'react'

export const Permission = () => {
	return (
		<>
			<Card sectioned primaryFooterAction={{ content: 'Click here to know the process', plain: true }}>
				<Stack>
					<Heading>Walmart API Permission</Heading>
					<p>You have not given the permission to access the given content on walmart.</p>
					<Stack spacing="tight">
						<Badge status="warning">Expired</Badge>
						<Badge status="warning">Expired</Badge>
						<Badge status="warning">Expired</Badge>
						<Badge status="warning">Expired</Badge>
					</Stack>
				</Stack>
			</Card>

		</>
	)
}