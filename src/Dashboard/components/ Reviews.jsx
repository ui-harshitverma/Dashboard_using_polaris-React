import React from "react";
import {
	Card,
	Stack,
	ResourceItem,
	ResourceList,
	Icon,
	TextStyle,
	Subheading,
} from "@shopify/polaris";
import { FavoriteMajor } from "@shopify/polaris-icons";
const Reviews = () => {
	return (
		<>
			<Card
				sectioned
				title="Trending Integration app"
				actions={[{ content: "All Apps" }]}
			>
				<ResourceList
					resourceName={{ singular: "customer", plural: "customers" }}
					items={[
						{
							id: 100,
							name: "Facebook market place",
							subname: "sell on facebook list your products",
							media: (
								<img
									alt="icon"
									width="30px"
									height="30px"
									src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
								/>
							),
							icon: (
								<>
									<Stack spacing="extraTight">
										<Icon source={FavoriteMajor} color="warning" />
										<Icon source={FavoriteMajor} color="warning" />
										<Icon source={FavoriteMajor} color="warning" />
										<Icon source={FavoriteMajor} color="Warning" />
										<Icon source={FavoriteMajor} color="Warning" />
									</Stack>
								</>
							),
						},
						{
							id: 100,
							name: "Facebook market place",
							subname: "sell on facebook list your products",
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
										<Icon source={FavoriteMajor} color="warning" />
										<Icon source={FavoriteMajor} color="Warning" />
										<Icon source={FavoriteMajor} color="Warning" />
									</Stack>
								</>
							)
						},
						{
							id: 100,
							name: "Facebook market place",
							subname: "sell on facebook list your products",
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
									<Stack spacing="extraTight">
									<Icon source={FavoriteMajor} color="warning" />
										<Icon source={FavoriteMajor} color="warning" />
										<Icon source={FavoriteMajor} color="warning" />
										<Icon source={FavoriteMajor} color="Warning" />
										<Icon source={FavoriteMajor} color="Warning" />
									</Stack>
								</>
							)
						},
						{
							id: 100,
							name: "Facebook market place",
							subname: "sell on facebook list your products",
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
										<Icon source={FavoriteMajor} color="warning" />
										<Icon source={FavoriteMajor} color="warning" />
										<Icon source={FavoriteMajor} color="Warning" />
										<Icon source={FavoriteMajor} color="Warning" />
									</Stack>
								</>
							)
						},
						{
							id: 100,
							name: "Facebook market place",
							subname: "sell on facebook list your products",
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
										<Icon source={FavoriteMajor} color="warning" />
										<Icon source={FavoriteMajor} color="Warning" />
										<Icon source={FavoriteMajor} color="Warning" />
									</Stack>
								</>
							)
						},
					]}
					renderItem={(item) => {
						const { id, name, subname, media, icon } = item;

						return (
							<Stack distribution="equalSpacing" alignment="center">
								<Stack>
									<ResourceItem id={id} media={media}>
										<Subheading size="small">{name}</Subheading>
										<TextStyle variation="subdued">{subname} </TextStyle>
									</ResourceItem>
								</Stack>
								<Stack spacing="tight">{icon}</Stack>
							</Stack>
						);
					}}
				/>
			</Card>
		</>
	);
};

export default Reviews;
