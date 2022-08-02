import { Card, Icon, Stack, TextStyle } from '@shopify/polaris'
import React from 'react'
import {
	SoundMajor
} from '@shopify/polaris-icons';


export const Stock = () => {
	return (
		<>
		 <Card title="Low Stock Items" >
				<Card.Section>
					<Stack distribution="equalSpacing">
						<Stack>
						<Icon
								source={SoundMajor}
								color="base"
								backdrop
							/>
							<p>1261</p>
						</Stack>
						<TextStyle variation="negative">5 Items Left</TextStyle>
					</Stack>
				</Card.Section>
			</Card>

		</>
	)
}

