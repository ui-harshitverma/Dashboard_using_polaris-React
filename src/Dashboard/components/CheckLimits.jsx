import { Badge, Card, ResourceList, Stack } from '@shopify/polaris';
import React from 'react'

export const CheckLimits = () => {
	return (
		<>
			<Card sectioned title="Account Info" actions={[{ content: 'Know More' }]}>
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
							amount: '3330 / 10000 used',
							url: 'reports/returns',
						},
						{
							sales: 'SKU Upload limit',
							amount: '3 / 100 used',
							url: 'reports/returns',
						},
						{
							sales: 'Order Import limit',
							amount: '0 /20 used',
							url: 'reports/returns',
						},
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


