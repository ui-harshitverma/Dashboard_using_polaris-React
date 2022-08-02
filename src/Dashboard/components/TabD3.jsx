import React, { useCallback, useState } from 'react';
import { AccountConnection, Card, Grid, Tabs } from '@shopify/polaris';
import AccountConnected from './AccountConnected';
import CardD3 from './CardD3';
import CardAccordion from './CardAccordion';

export default function TabD3() {
	const [selected, setSelected] = useState(0);

	const handleTabChange = useCallback(
		(selectedTabIndex) => setSelected(selectedTabIndex),
		[],
	);

	const tabs = [
		{
			id: 'all-customers-1',
			content: 'Dashboard',
			accessibilityLabel: 'All customers',
			panelID: 'all-customers-content-1',
		},
		{
			id: 'accepts-marketing-1',
			content: 'Settings',
			panelID: 'accepts-marketing-content-1',
		},
		{
			id: 'repeat-customers-1',
			content: 'Product Tagging',
			panelID: 'repeat-customers-content-1',
		},
		{
			id: 'prospects-1',
			content: 'Discount Settings',
			panelID: 'prospects-content-1',
		},
	];

	return (
		<>
			<Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
				<Card.Section title={tabs[selected].content}>
					{/* <p>Tab {selected} selected</p> */}
					{tabs[selected].id === 'all-customers-1' ?
						<Grid>
							<Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
								<AccountConnected />
							</Grid.Cell>
							<Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
								<AccountConnected />
							</Grid.Cell>
							<Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 12, xl: 12 }}>
								<CardAccordion />
								<CardD3 />
							</Grid.Cell>
						</Grid>
						: 'Empty'}
				</Card.Section>



			</Tabs>
		</>
	);
}
