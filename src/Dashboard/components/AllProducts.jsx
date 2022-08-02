import { Badge, Card, DisplayText, Heading, ResourceList, Stack } from '@shopify/polaris';
import React from 'react'

export const AllProducts = () => {
	return (
		<>
			<Card sectioned primaryFooterAction={{ content: 'All Products', plain: true }}>
					<Stack distribution="equalSpacing">
						<Heading>Products</Heading>
						<DisplayText size="small">3330</DisplayText>
					</Stack>
				<ResourceList
					resourceName={{ singular: 'sale', plural: 'sales' }}
					items={[
						{
							sales: 'Published',
							amount: '3',
							url: 'reports/orders',
						},
						{
							sales: 'Unpublished',
							amount: '0',
							url: 'reports/returns',
						},
						{
							sales: 'Item processing',
							amount: '0',
							url: 'reports/returns',
						},
						{
							sales: 'Not Uploaded',
							amount: '3327',
							url: 'reports/returns',
						},
						{
							sales: 'Others',
							amount: '0',
							url: 'reports/returns',
						}
					]}
					renderItem={(item) => {
						const { sales, amount, url } = item;
						return (
							<>
								<ResourceList.Item
									url={url}
									accessibilityLabel={`View Sales for ${sales}`}
								>
									<Stack>
										<Stack.Item fill>{sales}</Stack.Item>
										<Stack.Item>{amount}</Stack.Item>
									</Stack>
								</ResourceList.Item>
							</>
						);
					}}
				/>
			</Card>
		</>
	)
}


