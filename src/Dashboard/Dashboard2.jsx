import { Badge, Grid, TextStyle, Stack, DisplayText, TextContainer, Layout, Page, Card, Link } from '@shopify/polaris'
import React from 'react'
import AccountInfoBar from './components/AccountInfoBar'
import { AllProducts } from './components/AllProducts'
import BarChart from './components/BarChart'
import BarChartSection from './components/BarChartSection'
import CardIMg from './components/CardIMg'
import CardProducts from './components/CartProducts'
import Download from './components/Download'
import FAQ from './components/FAQ'
import { GreenBanner } from './components/GreenBanner'
import Inventory from './components/Inventory'
import LatestUpdates from './components/LatestUpdates'
import { RedBanner } from './components/RedBanner'
import { Tab } from './components/Tab'
import VideoCard from './components/VideoCard'


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
							<Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 4, lg: 8, xl: 8 }}>
								<Layout>
									<Layout.Section>
										<GreenBanner />
									</Layout.Section>
									<Layout.Section>
										<RedBanner />
									</Layout.Section>
									<Layout.Section>
										<CardIMg />
									</Layout.Section>
									<Layout.Section>
										<Tab />
									</Layout.Section>
									<Layout.Section>
										<Download/>
									</Layout.Section>
									<Layout.Section>
										<VideoCard/>
									</Layout.Section>
									<Layout.Section>
										<Inventory/>
									</Layout.Section>
									<Layout.Section>
										<CardProducts/>
									</Layout.Section>
									<Layout.Section>
										<FAQ/>
									</Layout.Section>
									<Layout.Section>
										<CardIMg/>
									</Layout.Section>

								</Layout>

							</Grid.Cell>
							<Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 4, xl: 4 }}>
								<Layout>
									<Layout.Section>
										<BarChartSection />
									</Layout.Section>
									<Layout.Section>
										<LatestUpdates/>
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
