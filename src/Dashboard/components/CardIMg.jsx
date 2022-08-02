import React from 'react';
import { Badge, CalloutCard, FooterHelp } from '@shopify/polaris';

export default class CardIMg extends React.Component {
	render() {
		return (
			<CalloutCard
				title="Send Products to Walmart."
				illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
				primaryAction={{ content: 'Upload Product' }}
				secondaryAction={{ content: 'Watch Tutorial' }}
			>
				<p>Upload your profiled products to walmart.</p>
			</CalloutCard>
		);
	}
}
