import { Badge, Card, ResourceList, Stack, TextStyle } from '@shopify/polaris';
import React from 'react'

export const AccountInfo = () => {
	return (
		<>
			<Card.Section title="Account Info">
				<Stack vertical={true} spacing="baseTight">
					<Stack distribution="equalSpacing">
						<p>Plan Name</p>
						<TextStyle variation="warning">Trial</TextStyle>
					</Stack>
					<Stack distribution="equalSpacing">
						<p>Time Left</p>
						<TextStyle variation="positive">365 days</TextStyle>
					</Stack>
				</Stack>
			</Card.Section>
		</>
	)
}


