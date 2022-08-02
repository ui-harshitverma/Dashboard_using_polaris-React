import { Badge, Card, DisplayText, Heading, ResourceList, Stack } from '@shopify/polaris';
import React from 'react'

export const AccountInfo1 = () => {
	return (
		<>
			<Card sectioned title="Account" actions={[{ content: 'Know More' }]}>
				<ResourceList
					resourceName={{ singular: 'sale', plural: 'sales' }}
					items={[
						{
							sales: 'Subscription Status',
							amount: <Badge status="success">Purchased</Badge>,
							url: 'reports/orders',
						},
						{
							sales: 'SKU Import limit',
							amount: '1000 used',
							url: 'reports/returns',
						},
						{
							sales: 'SKU Upload limit',
							amount: '300 used',
							url: 'reports/returns',
						},
						{
							sales: 'Order Import limit',
							amount: '20 used',
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


