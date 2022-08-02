import { ButtonGroup, Card, Grid, Heading, Stack, Tabs } from "@shopify/polaris";
import { useState, useCallback } from "react";
import ActionButtonGrid1, { ActionButtonGrid2, ActionButtonGrid3, ActionButtonGrid4, SaveSort } from "./ActionButtonsGrid";
// import ActionButtonGrid from "./ActionButtonsGrid";
import AntTable from "./AntTable";
import NameSearch from "./name";
import Name from "./name";
import SearchBarGrid from "./SearchBarGrid";

export function ProductTabGrid() {
	const [selected, setSelected] = useState(0);

	const handleTabChange = useCallback(
		(selectedTabIndex) => setSelected(selectedTabIndex),
		[]
	);

	const tabs = [
		{
			id: "all-customers-1",
			content: "All",
			accessibilityLabel: "All customers",
			panelID: "all-customers-content-1",
		},
		{
			id: "accepts-marketing-1",
			content: "Accepts marketing",
			panelID: "accepts-marketing-content-1",
		},
		{
			id: "repeat-customers-1",
			content: "Repeat customers",
			panelID: "repeat-customers-content-1",
		},
		{
			id: "prospects-1",
			content: "Prospects",
			panelID: "prospects-content-1",
		},
	];
	// title={tabs[selected].content}
	return (
		<Card>
			<Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
				{tabs[selected].id === 'all-customers-1'
					? <Card.Section>
						{/* <Stack vertical={false}>
					<SearchBarGrid />
					<ButtonGroup connectedTop={false} fullWidth={false} segmented={true}>
						<ActionButtonGrid1 />
						<ActionButtonGrid2 />
						<ActionButtonGrid3 />
						<ActionButtonGrid4 />
					</ButtonGroup>
					<SaveSort />
				</Stack> */}

						<Grid>
							<Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 12, xl: 12 }}>
								{/* <NameSearch /> */}
							</Grid.Cell>
						</Grid>
					</Card.Section>
					: <Grid>
						<Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 12, xl: 12 }}>
							<Card>
								<Card.Section>
									<Heading>No Table</Heading>
								</Card.Section>
							</Card>

						</Grid.Cell>
					</Grid>
				}


			</Tabs>

		</Card>

	);
}