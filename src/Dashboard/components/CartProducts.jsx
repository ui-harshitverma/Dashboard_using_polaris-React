import {
	ResourceList,
	Icon,
	ResourceItem,
	TextStyle,
	Stack,
	Card,
	Link,
} from "@shopify/polaris";
import { AddImageMajor } from '@shopify/polaris-icons';
import React from "react";

export default function CardProducts() {
	return (
		<Card sectioned title="Checkout the Top Tranding Products" actions={[{ content: 'View All' }]}>
			<Stack vertical={false} distribution="equalSpacing">
				<p>Products</p>
				<p>Total Items</p>
			</Stack>
			<ResourceList
				resourceName={{ singular: "customer", plural: "customers" }}
				items={[
					{
						id: 1,
						name: "Cakesicle Box for 1 - Red...",
						monthTarget: '220'
					},
					{
						id: 2,
						name: "Cakesicle Box for 1 - Red...",
						monthTarget: '220'
					},
					{
						id: 3,
						name: "Cakesicle Box for 1 - Red...",
						monthTarget: '220'
					},
					
				]}
				renderItem={(item) => {
					const { id, name, monthTarget } = item;
					const media = <Icon source={AddImageMajor} />;

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
	);
}