import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Dashboard1 from "./Dashboard/Dashboard1";
import Dashboard2 from "./Dashboard/Dashboard2";
import Dashboard3 from "./Dashboard/Dashboard3";

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="../src/Dashboard/Dashboard1">
					<Dashboard1 />
				</Route>
				<Route path="../src/Dashboard/dashboard2">
					<Dashboard2 />
				</Route>
				<Route path="../src/Dashboard/dashboard3">
					<Dashboard3 />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;





