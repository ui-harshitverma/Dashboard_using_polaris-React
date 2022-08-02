import { Avatar, Card, Link, Stack } from '@shopify/polaris'
import React from 'react'

export const SocialLinks = () => {
	return (
		<>
			<Card title="Social Links" >
				<Card.Section>
					<Stack>
						<Avatar customer name="Farrah" />
						<Avatar customer name="Farrah" />
						<Avatar customer name="Farrah" />
					</Stack>
				</Card.Section>
				<Card.Section>
					<Stack>
						<Link url="https://help.shopify.com/manual" removeUnderline={true}>Blogs</Link>
						<Link url="https://help.shopify.com/manual" removeUnderline={true}>FAQ's</Link>
						<Link url="https://help.shopify.com/manual" removeUnderline={true}>News</Link>
						<Link url="https://help.shopify.com/manual" removeUnderline={true}>Documentations</Link>
					</Stack>

				</Card.Section>

			</Card>
		</>
	)
}


