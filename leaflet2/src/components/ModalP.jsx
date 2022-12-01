import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { MapContext } from "./context/mapconext";

export const ModalP1 = () => {
	const { mapState, setMapState, handleChange, sendDataForm } =
		useContext(MapContext);

	const handleClose = () =>
		setMapState((prev) => ({ ...prev, showModalMarker: false }));

	return (
		<Modal show={mapState.showModalMarker} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Informacion de plaga</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div
					className='custom-select'
					id='_select_plag'
					style={{ width: "70%" }}
				>
					<select
						className='form-select mb-2 mt-2'
						aria-label='Default select example'
						name='Departamento'
						onChange={handleChange}
					>
						<option value='0'>Seleccione el departamento:</option>
						<option value='1'>Bermejo</option>
						<option value='2'>Formosa</option>
						<option value='3'>Laishi</option>
						<option value='4'>Matacos</option>
						<option value='5'>Patiño</option>
						<option value='6'>Pilagás</option>
						<option value='7'>Pirané</option>
						<option value='8'>Ramón Lista</option>
					</select>
				</div>
				<div
					className='custom-select'
					id='_select_plag'
					style={{ width: "70%" }}
				>
					<select
						className='form-select mb-2'
						aria-label='Default select example'
						name='Estancia'
						onChange={handleChange}
					>
						<option value='0'>Seleccione el pueblo o estancia:</option>
						<option value='1'>Algodon</option>
						<option value='2'>Maiz</option>
						<option value='3'>Mandioca</option>
						<option value='4'>Zapallito</option>
					</select>
				</div>
				<div
					className='custom-select'
					id='_select_plag'
					style={{ width: "70%" }}
				>
					<select
						className='form-select mb-2'
						aria-label='Default select example'
						name='Cultivo'
						onChange={handleChange}
					>
						<option value='0'>Seleccione el cultivo:</option>
						<option value='1'>Algodon</option>
						<option value='2'>Maiz</option>
						<option value='3'>Mandioca</option>
						<option value='4'>Zapallito</option>
					</select>
				</div>
				<div
					className='custom-select'
					id='_select_plag'
					style={{ width: "70%" }}
				>
					<select
						className='form-select mb-2'
						aria-label='Default select example'
						name='Plaga'
						onChange={handleChange}
					>
						<option value='0'>Seleccione la plaga:</option>
						<option value='1'>Picudo del algodonero</option>
						<option value='2'>Orugas</option>
						<option value='3'>Araña roja</option>
						<option value='4'>Pulgones</option>
						<option value='5'>Cochinilla algodonosa</option>
						<option value='6'>Lapilla</option>
						<option value='7'>Gusano gris</option>
						<option value='8'>Trips</option>
					</select>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Cerrar
				</Button>
				<Button
					variant='primary'
					onClick={() => {
						handleClose();
						sendDataForm();
					}}
				>
					Guardar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export const ModalP2 = () => {
	const { mapState, setMapState } = useContext(MapContext);

	const handleClose = () =>
		setMapState((prev) => ({ ...prev, showModalPolygon: false }));

	return (
		<Modal show={mapState.showModalPolygon} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Informacion sobre la parcela</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<input type='text' className='bg-info ' />
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
				<Button variant='primary' onClick={handleClose}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
0;
