import { CalloutCard } from '@shopify/polaris'
import React from 'react'

function CardD3() {
	return (
		<>
			<CalloutCard
				title="Rating"
				illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
				primaryAction={{
					content: 'Shopify App Store',
					url: 'https://www.shopify.com',
				}}
			>
				<p>Please Share your expirience with us, by giving us ration on shopify app store.</p>
			</CalloutCard>

		</>
	)
}

export default CardD3
