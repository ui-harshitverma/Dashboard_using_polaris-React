import { Badge, Grid, TextStyle, Stack, DisplayText, TextContainer, Layout, Page, Card, Link } from '@shopify/polaris'
import React from 'react'
import Fullgrid from './components/name'
import { ProductTabGrid } from './components/ProductTabGrid'
import TabD3 from './components/TabD3'
import TabProduct from './components/TabProduct'



function Dashboard2() {
	return (
		<>
			<Page fullWidth>
				<Layout>
					<Layout.Section>
						<TextContainer>
							{/* <Stack vertical={true} spacing="tight"> */}
							{/* <DisplayText size="large">Welcome To Dashboard 2</DisplayText> */}
							<Stack spacing="extraTight">
								<TextStyle>Welcome JON DOE Here's what's happening with your store today. Click{' '}
									<Link url="https://help.shopify.com/manual">here</Link>
									{' '}to refresh the analytics
								</TextStyle>
							</Stack>
							{/* </Stack> */}
						</TextContainer>
					</Layout.Section>
					<Layout.Section>
						<Grid columns={{ sm: 3 }}>
							<Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 4, lg: 12, xl: 12 }}>
								<Layout>
									<Layout.Section>
										<TabD3 />
									</Layout.Section>
									<Layout.Section>
										<TabProduct />
									</Layout.Section>
									<Layout.Section>
										<Fullgrid /> 
									</Layout.Section>



								</Layout>

							</Grid.Cell>
						</Grid>
					</Layout.Section>
				</Layout>
			</Page>
		</>
	)
}

export default Dashboard2

