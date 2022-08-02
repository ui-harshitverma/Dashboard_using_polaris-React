import { Badge, Grid, TextStyle, Stack, DisplayText, TextContainer, Layout, Page, Card } from '@shopify/polaris'
import React from 'react'
import Reviews from './components/ Reviews'
import { AccountInfo } from './components/AccountInfo'
import { AccountInfo1 } from './components/AccountInfo1'
import { AllProducts } from './components/AllProducts'
import Announcement from './components/Announcement'
import CardIMg from './components/CardIMg'
import { GreenBanner } from './components/GreenBanner'
import { Permission } from './components/Permission'
import RecentActivities from './components/RecentActivities'
import { RedBanner } from './components/RedBanner'
import { SocialLinks } from './components/SocialLinks'
import { Stock } from './components/Stock'
import { Tab } from './components/Tab'

function Dashboard1() {
	return (
		<>
			<Page fullWidth>
				<Layout>
					<Layout.Section>
						<TextContainer>
							<Stack vertical={true} spacing="tight">
								<DisplayText size="large">Welcome To Dashboard 1</DisplayText>
								<Stack spacing="extraTight">
									<TextStyle>Check out the recents progress in your store</TextStyle>
									<Badge>Last Refresh : 14 minutes ago,</Badge>
									<Badge status="critical">License Expired</Badge>
								</Stack>
							</Stack>
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
										<Stock/>
									</Layout.Section>
									<Layout.Section>
										<Reviews/>
									</Layout.Section>
								</Layout>
							</Grid.Cell>
							<Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 4, xl: 4 }}>
								<Layout>
									<Layout.Section>
										<AllProducts/>
									</Layout.Section>
									<Layout.Section>
										<Permission/>
									</Layout.Section>
									<Layout.Section>
										<RecentActivities/>
									</Layout.Section>
									<Layout.Section>
										<AccountInfo1 />
									</Layout.Section>
									<Layout.Section>
										<Announcement/>
									</Layout.Section>
									<Layout.Section>
										<SocialLinks />
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

export default Dashboard1
