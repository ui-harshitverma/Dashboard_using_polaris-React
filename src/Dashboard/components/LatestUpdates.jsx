import React from "react";
import {
	Card,
	Stack,
	ResourceItem,
	ResourceList,
	Icon,
	Avatar,
	TextStyle,
	Subheading,
	Link,
} from "@shopify/polaris";
import { FavoriteMajor } from "@shopify/polaris-icons";
const LatestUpdates = () => {
	return (
		<>
				<Card
					title="Latest Updates"
				>
					<ResourceList
						resourceName={{ singular: "customer", plural: "customers" }}
						items={[
							{
								id: 100,
								name: <Link url="https://help.shopify.com/manual" removeUnderline={true}>Cakesicle Box for 1 - Red..</Link>,
								subname: "21 Jan 2020",
								media: (
									<img
										alt="icon"
										width="30px"
										height="30px"
										src="   https://cdn-icons-png.flaticon.com/512/145/145807.png"
									/>
								),
								icon: (
									<>
										<TextStyle>10</TextStyle>
									</>
								)
							},
							{
								id: 100,
								name: <Link url="https://help.shopify.com/manual" removeUnderline={true}>Cakesicle Box for 1 - Red..</Link>,
								subname: "21 Jan 2020",
								media: (
									<img
										alt="icon"
										width="30px"
										height="30px"
										src="  https://cdn-icons-png.flaticon.com/512/187/187210.png"
									/>
								),
								icon: (
									<>
										<Stack spacing="extraTight">
											<Icon source={FavoriteMajor} color="warning" />
										</Stack>
									</>
								)
							},
							{
								id: 100,
								name: <Link url="https://help.shopify.com/manual" removeUnderline={true}>Cakesicle Box for 1 - Red..</Link>,
								subname: "21 Jan 2020",
								media: (
									<img
										alt="icon"
										width="30px"
										height="30px"
										src="  https://cdn-icons-png.flaticon.com/512/145/145812.png"
									/>
								),
								icon: (
									<>
										<Stack spacing="extraTight">
											<Icon source={FavoriteMajor} color="warning" />
											<Icon source={FavoriteMajor} color="warning" />
										</Stack>
									</>
								)
							},
						]}
						renderItem={(item) => {
							const { id, name, subname, media, icon } = item;

							return (
								<>
									<Stack distribution="equalSpacing" alignment="center">
										<Stack>
											<ResourceItem id={id} media={media}>
												<Subheading size="small">{name}</Subheading>
												<TextStyle variation="subdued">{subname} </TextStyle>
											</ResourceItem>
										</Stack>
										{/* <Stack spacing="tight">{icon}</Stack> */}
									</Stack>
								</>


							);
						}}
					/>
			</Card>
		</>
	);
};

export default LatestUpdates;
