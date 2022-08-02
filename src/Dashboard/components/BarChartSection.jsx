import { Badge, Card, Heading, Layout, ResourceList, Stack } from '@shopify/polaris';
import React from 'react'
import { AccountInfo } from './AccountInfo';
import AccountInfoBar from './AccountInfoBar';
import BarChart from './BarChart';
import TopProducts from './TopProducts';

const BarChartSection = () => {
	return (
		<>
			<Card title="5000" actions={[{ content: 'View Records' }]}>
				<BarChart />
				<AccountInfo />
				<AccountInfoBar />
				<TopProducts/>


			</Card>

		</>
	)
}

export default BarChartSection;
