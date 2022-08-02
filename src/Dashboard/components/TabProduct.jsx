import { Button, ButtonGroup, Heading, Stack, TextStyle } from '@shopify/polaris'
import React from 'react'

function TabProduct() {
	return (
		<>
			<Stack distribution="equalSpacing" alignment='center'>
				<Heading>Products</Heading>
				<ButtonGroup>
				    <Button>Export</Button>
					<Button>Import</Button>
					<Button primary>Add Product</Button>
				</ButtonGroup>
			</Stack>

		</>
	)
}

export default TabProduct
