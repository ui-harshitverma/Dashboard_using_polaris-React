import React, { useCallback, useState } from 'react';
import { ActionList, Button, ButtonGroup, Popover } from '@shopify/polaris';

export default function ActionButtonGrid1() {
	const [active, setActive] = useState(true);

	const toggleActive = useCallback(() => setActive((active) => !active), []);

	const handleImportedAction = useCallback(
		() => console.log('Imported action'),
		[],
	);

	const handleExportedAction = useCallback(
		() => console.log('Exported action'),
		[],
	);

	const activator = (
		<Button onClick={toggleActive} disclosure>
			More actions
		</Button>
		
	);

	return (
		<div style={{ height: '250px' }}>
			<Popover
				active={active}
				activator={activator}
				autofocusTarget="first-node"
				onClose={toggleActive}
			>
				<ActionList
					actionRole="menuitem"
					items={[
						{
							content: 'Import file',
							onAction: handleImportedAction,
						},
						{
							content: 'Export file',
							onAction: handleExportedAction,
						},
					]}
				/>
			</Popover>
		</div>
	);
}










export function ActionButtonGrid2() {
	const [active, setActive] = useState(true);

	const toggleActive = useCallback(() => setActive((active) => !active), []);

	const handleImportedAction = useCallback(
		() => console.log('Imported action'),
		[],
	);

	const handleExportedAction = useCallback(
		() => console.log('Exported action'),
		[],
	);

	const activator = (
		<Button onClick={toggleActive} disclosure>
			More actions
		</Button>
		
	);

	return (
		<div style={{ height: '250px' }}>
			<Popover
				active={active}
				activator={activator}
				autofocusTarget="first-node"
				onClose={toggleActive}
			>
				<ActionList
					actionRole="menuitem"
					items={[
						{
							content: 'Import file',
							onAction: handleImportedAction,
						},
						{
							content: 'Export file',
							onAction: handleExportedAction,
						},
					]}
				/>
			</Popover>
		</div>
	);
}













export function ActionButtonGrid3() {
	const [active, setActive] = useState(true);

	const toggleActive = useCallback(() => setActive((active) => !active), []);

	const handleImportedAction = useCallback(
		() => console.log('Imported action'),
		[],
	);

	const handleExportedAction = useCallback(
		() => console.log('Exported action'),
		[],
	);

	const activator = (
		<Button onClick={toggleActive} disclosure>
			More actions
		</Button>
		
	);

	return (
		<div style={{ height: '250px' }}>
			<Popover
				active={active}
				activator={activator}
				autofocusTarget="first-node"
				onClose={toggleActive}
			>
				<ActionList
					actionRole="menuitem"
					items={[
						{
							content: 'Import file',
							onAction: handleImportedAction,
						},
						{
							content: 'Export file',
							onAction: handleExportedAction,
						},
					]}
				/>
			</Popover>
		</div>
	);
}













export function ActionButtonGrid4() {
	const [active, setActive] = useState(true);

	const toggleActive = useCallback(() => setActive((active) => !active), []);

	const handleImportedAction = useCallback(
		() => console.log('Imported action'),
		[],
	);

	const handleExportedAction = useCallback(
		() => console.log('Exported action'),
		[],
	);

	const activator = (
		<Button onClick={toggleActive}>
			More actions
		</Button>
		
	);

	return (
		<div style={{ height: '250px' }}>
			<Popover
				active={active}
				activator={activator}
				autofocusTarget="first-node"
				onClose={toggleActive}
			>
				<ActionList
					actionRole="menuitem"
					items={[
						{
							content: 'Import file',
							onAction: handleImportedAction,
						},
						{
							content: 'Export file',
							onAction: handleExportedAction,
						},
					]}
				/>
			</Popover>
		</div>
	);
}


export const SaveSort = () => {
	return (
		<>
		  <ButtonGroup>
		  <Button>Cancel</Button>
		  <Button>Save</Button>
		</ButtonGroup>
		</>
	)
}