import React from "react";
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

import Estatus from "./components/Estatus";
import Posteos from "./components/Posteos";

import post from "../src/components/data.json";

function App() {
	const [count, setCount] = React.useState(0);

	function clickTotales() {
		setCount(count+1);
	}

	return (
		<div className="App">
			<Estatus cantidad={count} />
			<Posteos posts={post} clickTotales={clickTotales} />
		</div>
	);
}

export default App;
