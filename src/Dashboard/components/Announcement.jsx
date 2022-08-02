import { Avatar, Card, Icon, ResourceItem, ResourceList, TextStyle, Stack } from '@shopify/polaris';
import React from 'react'
import {
	SoundMajor
} from '@shopify/polaris-icons';

function Announcement() {
	return (
		<>
			{/* <Card sectioned title="Announcement" actions={[{ content: 'Know More' }]}>
				<Stack vertical={true}>
						<Icon
							source={SoundMajor}
							color="base"
							backdrop
						/>
					<Stack vertical={true} spacing="tight">
						<TextStyle>Looking to Purchase barcode for your products?</TextStyle>
						<TextStyle>1 year 6 months ago</TextStyle>
					</Stack>

				</Stack>
			</Card> */}
			<Card title="Announcement" actions={[{ content: 'Know More' }]}>
				<Card.Section>
					<ResourceList
						resourceName={{ singular: 'customer', plural: 'customers' }}
						items={[
							{
								id: 100,
								url: 'customers/341',
								name: 'Looking to Purchase barcode for products?',
								location: '1 year 6 months ago',
							},
						]}
						renderItem={(item) => {
							const { id, url, name, location } = item;
							const media = <Icon
								source={SoundMajor}
								color="base"
								backdrop
							/>;

							return (
								<ResourceItem
									id={id}
									url={url}
									media={media}
									accessibilityLabel={`View details for ${name}`}
								>
									{/* <h3> */}
										<TextStyle variation="subdued">{name}</TextStyle>
									{/* </h3> */}
									<div>{location}</div>
								</ResourceItem>
							);
						}}
					/>
				</Card.Section>

			</Card>

		</>
	)
}

export default Announcement
	// < Icon source = { CirclePlusMinor } />