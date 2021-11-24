import React from 'react'
import TelaDeBusca from './components/TelaDeBusca'

export default class App extends React.Component {
	state = {
		currentScreen: "home"
	}

	trocarPagina = () => {
		switch(this.state.currentScreen) {
			case "home":
				return <div>Home</div>
			case "cadastro":
				return <div>cadastro</div>
			case "busca":
				return <div>busca</div>
			default:
				return <TelaDeBusca/>
		}
	}

	render () {
		return (
			<div>
				{/* {this.trocarPagina()} */}
				<TelaDeBusca/>
			</div>
		)
	}	
}