import React from "react";
import { MapView } from "./components/MapView.jsx";
import { MapContextProvider } from "./components/context/mapconext";
import { ModalP1, ModalP2 } from "./components/ModalP.jsx";

function App() {
	return (
		<MapContextProvider>
			<MapView />
			<ModalP1 />
			<ModalP2 />
		</MapContextProvider>
	);
}

export default App;
