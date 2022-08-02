import React from 'react';
import { Navigation } from '@shopify/polaris';
import { HomeMinor, OnlineStoreMinor, OrdersMinor, ProductsMinor } from '@shopify/polaris-icons';

export default class Sidebar extends React.Component {
	render() {
		return (
			<Navigation location="">
				<Navigation.Section
					items={[
						{
							url: '/',
							label: 'Dashboard 1',
							icon: HomeMinor,
						},
						{
							url: 'Dashboard2',
							label: 'Dashboard 2',
							icon: OrdersMinor,
						},
						{
							url: 'Dashboard3',
							label: 'Dashboard 3',
							icon: ProductsMinor,
						}
					]}
				/>
				<Navigation.Section
					items={[
						{
							url: '/path/to/place',
							label: 'help',
							icon: OnlineStoreMinor,
						},
						{
							url: '/path/to/place',
							label: 'contact Us',
							icon: OnlineStoreMinor,
						},
						{
							url: '/path/to/place',
							label: 'schedule a meeting',
							icon: OnlineStoreMinor,
						},
					]}
					separator
				/>
			</Navigation>
		);
	}
}






