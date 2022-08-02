// import {
// 	ChoiceList,
// 	TextField,
// 	Card,
// 	Filters,
// 	DataTable,
// } from "@shopify/polaris";
// import { useState, useCallback } from "react";
// import AntTable from "./AntTable";

// export default function NameSearch() {
// 	const [availability, setAvailability] = useState(null);
// 	const [productType, setProductType] = useState(null);
// 	const [taggedWith, setTaggedWith] = useState(null);
// 	const [queryValue, setQueryValue] = useState(null);

// 	const handleAvailabilityChange = useCallback(
// 		(value) => setAvailability(value),
// 		[]
// 	);
// 	const handleProductTypeChange = useCallback(
// 		(value) => setProductType(value),
// 		[]
// 	);
// 	const handleTaggedWithChange = useCallback(
// 		(value) => setTaggedWith(value),
// 		[]
// 	);
// 	const handleFiltersQueryChange = useCallback(
// 		(value) => setQueryValue(value),
// 		[]
// 	);
// 	const handleAvailabilityRemove = useCallback(() => setAvailability(null), []);
// 	const handleProductTypeRemove = useCallback(() => setProductType(null), []);
// 	const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
// 	const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
// 	const handleFiltersClearAll = useCallback(() => {
// 		handleAvailabilityRemove();
// 		handleProductTypeRemove();
// 		handleTaggedWithRemove();
// 		handleQueryValueRemove();
// 	}, [
// 		handleAvailabilityRemove,
// 		handleQueryValueRemove,
// 		handleProductTypeRemove,
// 		handleTaggedWithRemove,
// 	]);

// 	const filters = [
// 		{
// 			key: "availability",
// 			label: "Availability",
// 			filter: (
// 				<ChoiceList
// 					title="Availability"
// 					titleHidden
// 					choices={[
// 						{ label: "Online Store", value: "Online Store" },
// 						{ label: "Point of Sale", value: "Point of Sale" },
// 						{ label: "Buy Button", value: "Buy Button" },
// 					]}
// 					selected={availability || []}
// 					onChange={handleAvailabilityChange}
// 					allowMultiple
// 				/>
// 			),
// 			shortcut: true,
// 		},
// 		{
// 			key: "availability",
// 			label: "Availability",
// 			filter: (
// 				<ChoiceList
// 					title="Availability"
// 					titleHidden
// 					choices={[
// 						{ label: "Online Store", value: "Online Store" },
// 						{ label: "Point of Sale", value: "Point of Sale" },
// 						{ label: "Buy Button", value: "Buy Button" },
// 					]}
// 					selected={availability || []}
// 					onChange={handleAvailabilityChange}
// 					allowMultiple
// 				/>
// 			),
// 			shortcut: true,
// 		},
// 		{
// 			key: "availability",
// 			label: "Availability",
// 			filter: (
// 				<ChoiceList
// 					title="Availability"
// 					titleHidden
// 					choices={[
// 						{ label: "Online Store", value: "Online Store" },
// 						{ label: "Point of Sale", value: "Point of Sale" },
// 						{ label: "Buy Button", value: "Buy Button" },
// 					]}
// 					selected={availability || []}
// 					onChange={handleAvailabilityChange}
// 					allowMultiple
// 				/>
// 			),
// 			shortcut: true,
// 		},
// 		{
// 			key: "availability",
// 			label: "Availability",
// 			filter: (
// 				<ChoiceList
// 					title="Availability"
// 					titleHidden
// 					choices={[
// 						{ label: "Online Store", value: "Online Store" },
// 						{ label: "Point of Sale", value: "Point of Sale" },
// 						{ label: "Buy Button", value: "Buy Button" },
// 					]}
// 					selected={availability || []}
// 					onChange={handleAvailabilityChange}
// 					allowMultiple
// 				/>
// 			),
// 			shortcut: true,
// 		},
// 		{
// 			key: "productType",
// 			label: "Product type",
// 			filter: (
// 				<ChoiceList
// 					title="Product type"
// 					choices={[
// 						{ label: "T-Shirt", value: "T-Shirt" },
// 						{ label: "Accessory", value: "Accessory" },
// 						{ label: "Gift card", value: "Gift card" },
// 					]}
// 					selected={productType || []}
// 					onChange={handleProductTypeChange}
// 					allowMultiple
// 				/>
// 			),
// 		},
// 		{
// 			key: "taggedWith",
// 			label: "Tagged with",
// 			filter: (
// 				<TextField
// 					label="Tagged with"
// 					value={taggedWith}
// 					onChange={handleTaggedWithChange}
// 					autoComplete="off"
// 					labelHidden
// 				/>
// 			),
// 		},
// 	];

// 	const appliedFilters = [];
// 	if (!isEmpty(availability)) {
// 		const key = "availability";
// 		appliedFilters.push({
// 			key,
// 			label: disambiguateLabel(key, availability),
// 			onRemove: handleAvailabilityRemove,
// 		});
// 	}
// 	if (!isEmpty(productType)) {
// 		const key = "productType";
// 		appliedFilters.push({
// 			key,
// 			label: disambiguateLabel(key, productType),
// 			onRemove: handleProductTypeRemove,
// 		});
// 	}
// 	if (!isEmpty(taggedWith)) {
// 		const key = "taggedWith";
// 		appliedFilters.push({
// 			key,
// 			label: disambiguateLabel(key, taggedWith),
// 			onRemove: handleTaggedWithRemove,
// 		});
// 	}

// 	return (
// 		<div>
// 			<>
// 				<Filters
// 					queryValue={queryValue}
// 					filters={filters}
// 					appliedFilters={appliedFilters}
// 					onQueryChange={handleFiltersQueryChange}
// 					onQueryClear={handleQueryValueRemove}
// 					onClearAll={handleFiltersClearAll}
// 				/>
// 				<AntTable />
// 			</>

// 		</div>
// 	);

// 	function disambiguateLabel(key, value) {
// 		switch (key) {
// 			case "taggedWith":
// 				return `Tagged with ${value}`;
// 			case "availability":
// 				return value.map((val) => `Available on ${val}`).join(", ");
// 			case "productType":
// 				return value.join(", ");
// 			default:
// 				return value;
// 		}
// 	}

// 	function isEmpty(value) {
// 		if (Array.isArray(value)) {
// 			return value.length === 0;
// 		} else {
// 			return value === "" || value == null;
// 		}
// 	}
// }


import React, { useCallback, useState } from "react";
import { Card, TextStyle, Tabs, Thumbnail, Badge } from "@shopify/polaris";
import { Radio, Divider, Table } from "antd";
import "antd/dist/antd.css";
import SearchIndex from ".";
// import IndexTableWithAllElementsExample from "./Table2";

function Fullgrid() {
    const [selectionType, setSelectionType] = useState("checkbox");
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
            columns: [
                {
                    title: "",
                    dataIndex: "thumbnail",
                },
                {
                    title: "Name",
                    dataIndex: ["name"],
                    render: (text) => <a>{text}</a>,
                },
                {
                    title: "status",
                    dataIndex: "status",
                },
                {
                    title: "inventory",
                    dataIndex: "inventory",
                },
                {
                    title: "Type",
                    dataIndex: "type",
                },
                {
                    title: "vendor",
                    dataIndex: "vendor",
                },
            ],
            data: [
                {
                    key: "1",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "John Brown",
                    status: <Badge status="success">Active</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">1 in stock</TextStyle> for 4 variants
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "Gimmy choo",
                },
                {
                    key: "2",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Jim Green",
                    status: <Badge status="warning">Expired</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">0 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "hermes",
                },
                {
                    key: "3",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Joe Black",
                    status: <Badge status="success">Active</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">1 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "",
                    vendor: "Givechy",
                },
                {
                    key: "4",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Joe Black",
                    status: <Badge status="warning">Expired</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">1 in stock</TextStyle> for 4 variants
                        </TextStyle>
                    ),
                    type: "",
                    vendor: "selvetro fremaggo",
                },
                {
                    key: "5",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Joe Black",
                    status: <Badge status="success">Active</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">1 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "",
                    vendor: "Gimmy choo",
                },
                {
                    key: "6",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Joe Black",
                    status: <Badge status="warning">draft</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">1 in stock</TextStyle> for 4 variants
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "Gimmy choo",
                },
                // {
                //   key: "4",
                //   name: "Disabled User",
                //   age: 99,
                //   address: "Sidney No. 1 Lake Park",
                // },
            ]
        },
        {
            id: "accepts-marketing-1",
            content: "Accepts marketing",
            panelID: "accepts-marketing-content-1",
            columns: [
                {
                    title: "",
                    dataIndex: "thumbnail",
                },
                {
                    title: "Name",
                    dataIndex: ["name"],
                    render: (text) => <a>{text}</a>,
                },
                {
                    title: "status",
                    dataIndex: "status",
                },
                {
                    title: "inventory",
                    dataIndex: "inventory",
                },
                {
                    title: "Type",
                    dataIndex: "type",
                },
                {
                    title: "vendor",
                    dataIndex: "vendor",
                },
            ],
            data: [
                {
                    key: "1",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "John Brown 2",
                    status: <Badge status="warning">Active</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">1 in stock</TextStyle> for 4 variants
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "Gimmy choo",
                },
                {
                    key: "2",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Jim Green",
                    status: <Badge status="warning">Expired</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">0 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "hermes",
                },
                {
                    key: "3",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Jim Green",
                    status: <Badge status="warning">Expired</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">0 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "hermes",
                },
                {
                    key: "4",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Jim Green",
                    status: <Badge status="warning">Expired</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">0 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "hermes",
                },
                {
                    key: "2",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Jim Green",
                    status: <Badge status="warning">Expired</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">0 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "hermes",
                },
                {
                    key: "2",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Jim Green",
                    status: <Badge status="warning">Expired</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">0 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "hermes",
                },
                {
                    key: "2",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Jim Green",
                    status: <Badge status="warning">Expired</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">0 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "hermes",
                },
                {
                    key: "2",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Jim Green",
                    status: <Badge status="warning">Expired</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">0 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "hermes",
                },
                {
                    key: "2",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Jim Green",
                    status: <Badge status="warning">Expired</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">0 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "hermes",
                },
                {
                    key: "2",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Jim Green",
                    status: <Badge status="warning">Expired</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">0 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "hermes",
                },




                // {
                //   key: "4",
                //   name: "Disabled User",
                //   age: 99,
                //   address: "Sidney No. 1 Lake Park",
                // },
            ]
        },
        {
            id: "repeat-customers-1",
            content: "Repeat customers",
            panelID: "repeat-customers-content-1",
            columns: [
                {
                    title: "",
                    dataIndex: "thumbnail",
                },
                {
                    title: "Name",
                    dataIndex: ["name"],
                    render: (text) => <a>{text}</a>,
                },
                {
                    title: "status",
                    dataIndex: "status",
                },
                {
                    title: "inventory",
                    dataIndex: "inventory",
                },
                {
                    title: "Type",
                    dataIndex: "type",
                },
                {
                    title: "vendor",
                    dataIndex: "vendor",
                },
            ],
            data: [
                {
                    key: "1",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "John Brown",
                    status: <Badge status="success">Active</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">1 in stock</TextStyle> for 4 variants
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "Gimmy choo",
                },
                {
                    key: "2",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Jim Green",
                    status: <Badge status="warning">Expired</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">0 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "hermes",
                },
                {
                    key: "3",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Joe Black",
                    status: <Badge status="success">Active</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">1 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "",
                    vendor: "Givechy",
                },
            ]
        },
        {
            id: "prospects-1",
            content: "Prospects",
            panelID: "prospects-content-1",
            columns: [
                {
                    title: "",
                    dataIndex: "thumbnail",
                },
                {
                    title: "Name",
                    dataIndex: ["name"],
                    render: (text) => <a>{text}</a>,
                },
                {
                    title: "status",
                    dataIndex: "status",
                },
                {
                    title: "inventory",
                    dataIndex: "inventory",
                },
                {
                    title: "Type",
                    dataIndex: "type",
                },
                {
                    title: "vendor",
                    dataIndex: "vendor",
                },
            ],
            data: [
                {
                    key: "1",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "John Brown 2",
                    status: <Badge status="warning">Active</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">1 in stock</TextStyle> for 4 variants
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "Gimmy choo",
                },
                {
                    key: "2",
                    thumbnail: (
                        <>
                            <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                alt="Black choker necklace"
                                size="small"
                            />
                        </>
                    ),
                    name: "Jim Green",
                    status: <Badge status="warning">Expired</Badge>,
                    inventory: (
                        <TextStyle>
                            <TextStyle variation="negative">0 in stock</TextStyle>
                        </TextStyle>
                    ),
                    type: "duffel bags",
                    vendor: "hermes",
                },


                // {
                //   key: "4",
                //   name: "Disabled User",
                //   age: 99,
                //   address: "Sidney No. 1 Lake Park",
                // },
            ]
        },
    ];
    // const columns = [
    //   {
    //     title: "",
    //     dataIndex: "thumbnail",
    //   },
    //   {
    //     title: "Name",
    //     dataIndex: ["name"],
    //     render: (text) => <a>{text}</a>,
    //   },
    //   {
    //     title: "status",
    //     dataIndex: "status",
    //   },
    //   {
    //     title: "inventory",
    //     dataIndex: "inventory",
    //   },
    //   {
    //     title: "Type",
    //     dataIndex: "type",
    //   },
    //   {
    //     title: "vendor",
    //     dataIndex: "vendor",
    //   },
    // ];
    // const data = [
    //   {
    //     key: "1",
    //     thumbnail: (
    //       <>
    //         <Thumbnail
    //           source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
    //           alt="Black choker necklace"
    //           size="small"
    //         />
    //       </>
    //     ),
    //     name: "John Brown",
    //     status: <Badge status="success">Active</Badge>,
    //     inventory: (
    //       <TextStyle>
    //         <TextStyle variation="negative">1 in stock</TextStyle> for 4 variants
    //       </TextStyle>
    //     ),
    //     type: "duffel bags",
    //     vendor: "Gimmy choo",
    //   },
    //   {
    //     key: "2",
    //     thumbnail: (
    //       <>
    //         <Thumbnail
    //           source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
    //           alt="Black choker necklace"
    //           size="small"
    //         />
    //       </>
    //     ),
    //     name: "Jim Green",
    //     status: <Badge status="warning">Expired</Badge>,
    //     inventory: (
    //       <TextStyle>
    //         <TextStyle variation="negative">0 in stock</TextStyle> 
    //       </TextStyle>
    //     ),
    //     type: "duffel bags",
    //     vendor: "hermes",
    //   },
    //   {
    //     key: "3",
    //     thumbnail: (
    //       <>
    //         <Thumbnail
    //           source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
    //           alt="Black choker necklace"
    //           size="small"
    //         />
    //       </>
    //     ),
    //     name: "Joe Black",
    //     status: <Badge status="success">Active</Badge>,
    //     inventory: (
    //       <TextStyle>
    //         <TextStyle variation="negative">1 in stock</TextStyle>
    //       </TextStyle>
    //     ),
    //     type: "",
    //     vendor: "Givechy",
    //   },
    //   {
    //     key: "4",
    //     thumbnail: (
    //       <>
    //         <Thumbnail
    //           source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
    //           alt="Black choker necklace"
    //           size="small"
    //         />
    //       </>
    //     ),
    //     name: "Joe Black",
    //     status: <Badge status="warning">Expired</Badge>,
    //     inventory: (
    //       <TextStyle>
    //         <TextStyle variation="negative">1 in stock</TextStyle> for 4 variants
    //       </TextStyle>
    //     ),
    //     type: "",
    //     vendor: "selvetro fremaggo",
    //   },
    //   {
    //     key: "5",
    //     thumbnail: (
    //       <>
    //         <Thumbnail
    //           source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
    //           alt="Black choker necklace"
    //           size="small"
    //         />
    //       </>
    //     ),
    //     name: "Joe Black",
    //     status: <Badge status="success">Active</Badge>,
    //     inventory: (
    //       <TextStyle>
    //         <TextStyle variation="negative">1 in stock</TextStyle> 
    //       </TextStyle>
    //     ),
    //     type: "",
    //     vendor: "Gimmy choo",
    //   },
    //   {
    //     key: "6",
    //     thumbnail: (
    //       <>
    //         <Thumbnail
    //           source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
    //           alt="Black choker necklace"
    //           size="small"
    //         />
    //       </>
    //     ),
    //     name: "Joe Black",
    //     status: <Badge status="warning">draft</Badge>,
    //     inventory: (
    //       <TextStyle>
    //         <TextStyle variation="negative">1 in stock</TextStyle> for 4 variants
    //       </TextStyle>
    //     ),
    //     type: "duffel bags",
    //     vendor: "Gimmy choo",
    //   },
    //   // {
    //   //   key: "4",
    //   //   name: "Disabled User",
    //   //   age: 99,
    //   //   address: "Sidney No. 1 Lake Park",
    //   // },
    // ]; // rowSelection object indicates the need for row selection

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                "selectedRows: ",
                selectedRows
            );
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === "Disabled User",
            // Column configuration not to be checked
            name: record.name,
        }),
    };
    return (
        <Card>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                <Card.Section>
                    <SearchIndex />
                    <Table
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }}
                        columns={tabs[selected].columns}
                        dataSource={tabs[selected].data}
                    />
                </Card.Section>
            </Tabs>
        </Card>
    );
}
export default Fullgrid;
