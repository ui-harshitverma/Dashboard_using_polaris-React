import { Card } from '@shopify/polaris'
import React from 'react'
import AccordionCode from './AccordionCode'
import './CardAccordion.css'


function CardAccordion() {
	return (
		<>
			<Card sectioned title="Frequently Asked question">
				<AccordionCode/>
			</Card>
		</>
	)
}

export default CardAccordion;
