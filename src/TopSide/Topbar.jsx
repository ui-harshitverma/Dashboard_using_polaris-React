
import React, { useCallback, useRef, useState } from 'react';
import { TopBar, Modal } from "@shopify/polaris";

const Topbar = () => {
	const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
	const [userMenuActive, setUserMenuActive] = useState(false)
	const [modalActive, setModalActive] = useState(false);
	const toggleModalActive = useCallback(
		() => setModalActive((modalActive) => !modalActive),
		[],
	);
	const toggleUserMenuActive = useCallback(
		() => setUserMenuActive((userMenuActive) => !userMenuActive),
		[],
	);
	const userMenuActions = [
		{
			items: [{ content: 'Community forums' }],
		},
	];
	const toggleMobileNavigationActive = useCallback(
		() =>
			setMobileNavigationActive(
				(mobileNavigationActive) => !mobileNavigationActive,
			),
		[],
	);
	const userMenuMarkup = (
		<TopBar.UserMenu
			actions={userMenuActions}
			name=""
			detail={"CedCommerce"}
			initials="D"
			open={userMenuActive}
			onToggle={toggleUserMenuActive}
		/>
	);
	return (
		<>
			<Modal
				open={modalActive}
				onClose={toggleModalActive}
				title="Contact support"
				primaryAction={{
					content: 'Send',
					onAction: toggleModalActive,
				}}
			>
			</Modal>
			<TopBar
				showNavigationToggle
				userMenu={userMenuMarkup}
				onNavigationToggle={toggleMobileNavigationActive}
			/>
		</>
	)
}
export default Topbar