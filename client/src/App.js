import React,{ Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/";
import NoMatch from "./pages/NoMatch/";
import Home from "./pages/Home/";
import './styles/components.scss';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={NoMatch} />
			</Switch>
		</BrowserRouter>
		);
	};
};

export default App;
