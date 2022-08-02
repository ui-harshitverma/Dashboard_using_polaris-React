import { Avatar, Card, Icon, Link, ResourceItem, ResourceList, Stack, TextStyle } from '@shopify/polaris';
import React from 'react'
import {
	CircleDownMajor,
	ArrowRightMinor,
	QuestionMarkMajor
} from '@shopify/polaris-icons';


function FAQ() {
	return (
		<>
			<Card sectioned title="Frequently ASked Questions" actions={[{ content: 'Add variant' }]}>
				<ResourceList
					resourceName={{ singular: "customer", plural: "customers" }}
					items={[
						{
							id: 1,
							name: "Cakesicle Box for 1 - Red...",
							monthTarget: <Icon
							source={ArrowRightMinor}
							color="base"
						/>
						},
						{
							id: 2,
							name: "Cakesicle Box for 1 - Red...",
							monthTarget: <Icon
							source={ArrowRightMinor}
							color="base"
						/>
						},
						{
							id: 3,
							name: "Cakesicle Box for 1 - Red...",
							monthTarget: <Icon
							source={ArrowRightMinor}
							color="base"
						/>
						},

					]}
					renderItem={(item) => {
						const { id, name, monthTarget } = item;
						const media = <Icon
						source={QuestionMarkMajor}
						color="base"
					  />
						 

						return (
							<>
								<ResourceItem
									id={id}
									media={media}
									accessibilityLabel={`View details for ${name}`}
								>
									<Stack distribution="equalSpacing">
										<Stack.Item>
											<h6>
												<Link url="https://help.shopify.com/manual" removeUnderline={true}>{name}</Link>
											</h6>
										</Stack.Item>
										<Stack.Item>
											<TextStyle variation="subdued">{monthTarget}</TextStyle>
										</Stack.Item>
									</Stack>
								</ResourceItem>
							</>
						);
					}}
				/>
			</Card>

		</>
	)
}

export default FAQ;
