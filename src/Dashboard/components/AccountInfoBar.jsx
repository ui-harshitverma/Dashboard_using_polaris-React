import { Card, Link, ResourceList, Stack, TextStyle } from '@shopify/polaris';
import React from 'react'

const AccountInfoBar = () => {
	return (
		<>
			<Card.Section title="Check Limits">
				<Stack vertical={true} spacing="baseTight">
					<Stack  distribution="equalSpacing">
					<Link url="https://help.shopify.com/manual" removeUnderline={true}>Product Limit</Link>
					<TextStyle><TextStyle variation="negative">100 </TextStyle>used of 1000</TextStyle>
					</Stack>
					<Stack  distribution="equalSpacing">
					<Link url="https://help.shopify.com/manual" removeUnderline={true}>Order Limit</Link>
					<TextStyle><TextStyle variation="negative">100 </TextStyle>used of 2000</TextStyle>
					</Stack>
				</Stack>
			</Card.Section>

		</>
	)
}

export default AccountInfoBar;
