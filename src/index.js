import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { BrowserRouter, Link as ReactRouterLink } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AppProvider
				linkComponent={Link}
			>
				<App />
			</AppProvider>
		</BrowserRouter>
	</React.StrictMode>
);

const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/;

function Link({ children, url = '', external, ref, ...rest }) {
	// react-router only supports links to pages it can handle itself. It does not
	// support arbirary links, so anything that is not a path-based link should
	// use a reglar old `a` tag
	if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
		rest.target = '_blank';
		rest.rel = 'noopener noreferrer';
		return (
			<a href={url} {...rest}>
				{children}
			</a>
		);
	}

	return (
		<ReactRouterLink to={url} {...rest}>
			{children}
		</ReactRouterLink>
	);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
