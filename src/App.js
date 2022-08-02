
import '@shopify/polaris/build/esm/styles.css';
import { Frame } from '@shopify/polaris';
import Topbar from './TopSide/Topbar';
import Sidebar from './TopSide/Sidebar';
import React, { useCallback, useState } from 'react';
// import PageLayout from './Dashboard/PageLayout';
import Pannel from './Panel';


function App() {
    const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
    const toggleMobileNavigationActive = useCallback(
		() =>
			setMobileNavigationActive(
				(mobileNavigationActive) => !mobileNavigationActive,
			),
		[],
	);
	
    
    const logo = {
		width: 124,
		topBarSource:
			'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
		contextualSaveBarSource:
			'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
		url: 'http://jadedpixel.com',
		accessibilityLabel: 'Jaded Pixel',
	};

    return (
        <Frame
            logo={logo}
            topBar={<Topbar/>}
            navigation={<Sidebar/>}
            showMobileNavigation={mobileNavigationActive}
            onNavigationDismiss={toggleMobileNavigationActive}
        >
			{<Pannel/>}
        </Frame>
    );
}

export default App;
