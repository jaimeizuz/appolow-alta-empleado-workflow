import React, { useCallback, useEffect, useState } from 'react';
import { Card, CardBody, TextInput, FormGroup } from '@patternfly/react-core';
const Form__AltaEmpleado_corregirDatosEmpleado: React.FC<any> = (
	props: any
) => {
	const [formApi, setFormApi] = useState<any>();
	const [
		datosOriginalesEmpleado__apellidos,
		set__datosOriginalesEmpleado__apellidos,
	] = useState<string>('');
	const [datosOriginalesEmpleado__dni, set__datosOriginalesEmpleado__dni] =
		useState<string>('');
	const [
		datosOriginalesEmpleado__fechaNacimiento,
		set__datosOriginalesEmpleado__fechaNacimiento,
	] = useState<string>('');
	const [
		datosOriginalesEmpleado__nombre,
		set__datosOriginalesEmpleado__nombre,
	] = useState<string>('');
	const [mensajeDatosIncorrectos, set__mensajeDatosIncorrectos] =
		useState<string>('');
	const [
		datosModificadosEmpleado__apellidos,
		set__datosModificadosEmpleado__apellidos,
	] = useState<string>('');
	const [datosModificadosEmpleado__dni, set__datosModificadosEmpleado__dni] =
		useState<string>('');
	const [
		datosModificadosEmpleado__fechaNacimiento,
		set__datosModificadosEmpleado__fechaNacimiento,
	] = useState<string>('');
	const [
		datosModificadosEmpleado__nombre,
		set__datosModificadosEmpleado__nombre,
	] = useState<string>('');
	/* Utility function that fills the form with the data received from the kogito runtime */
	const setFormData = (data) => {
		if (!data) {
			return;
		}
		set__datosOriginalesEmpleado__apellidos(
			data?.datosOriginalesEmpleado?.apellidos ?? ''
		);
		set__datosOriginalesEmpleado__dni(data?.datosOriginalesEmpleado?.dni ?? '');
		set__datosOriginalesEmpleado__fechaNacimiento(
			data?.datosOriginalesEmpleado?.fechaNacimiento ?? ''
		);
		set__datosOriginalesEmpleado__nombre(
			data?.datosOriginalesEmpleado?.nombre ?? ''
		);
		set__mensajeDatosIncorrectos(data?.mensajeDatosIncorrectos ?? '');
		set__datosModificadosEmpleado__apellidos(
			data?.datosModificadosEmpleado?.apellidos ?? ''
		);
		set__datosModificadosEmpleado__dni(
			data?.datosModificadosEmpleado?.dni ?? ''
		);
		set__datosModificadosEmpleado__fechaNacimiento(
			data?.datosModificadosEmpleado?.fechaNacimiento ?? ''
		);
		set__datosModificadosEmpleado__nombre(
			data?.datosModificadosEmpleado?.nombre ?? ''
		);
	};
	/* Utility function to generate the expected form output as a json object */
	const getFormData = useCallback(() => {
		const formData: any = {};
		formData.datosModificadosEmpleado = {};
		formData.datosModificadosEmpleado.apellidos =
			datosModificadosEmpleado__apellidos;
		formData.datosModificadosEmpleado.dni = datosModificadosEmpleado__dni;
		formData.datosModificadosEmpleado.fechaNacimiento =
			datosModificadosEmpleado__fechaNacimiento;
		formData.datosModificadosEmpleado.nombre = datosModificadosEmpleado__nombre;
		return formData;
	}, [
		datosModificadosEmpleado__apellidos,
		datosModificadosEmpleado__dni,
		datosModificadosEmpleado__fechaNacimiento,
		datosModificadosEmpleado__nombre,
	]);
	/* Utility function to validate the form on the 'beforeSubmit' Lifecycle Hook */
	const validateForm = useCallback(() => {}, []);
	/* Utility function to perform actions on the on the 'afterSubmit' Lifecycle Hook */
	const afterSubmit = useCallback((result) => {}, []);
	useEffect(() => {
		if (formApi) {
			/*
        Form Lifecycle Hook that will be executed before the form is submitted.
        Throwing an error will stop the form submit. Usually should be used to validate the form.
      */
			formApi.beforeSubmit = () => validateForm();
			/*
        Form Lifecycle Hook that will be executed after the form is submitted.
        It will receive a response object containing the `type` flag indicating if the submit has been successful and `info` with extra information about the submit result.
      */
			formApi.afterSubmit = (result) => afterSubmit(result);
			/* Generates the expected form output object to be posted */
			formApi.getFormData = () => getFormData();
		}
	}, [getFormData, validateForm, afterSubmit]);
	useEffect(() => {
		/*
      Call to the Kogito console form engine. It will establish the connection with the console embeding the form
      and return an instance of FormAPI that will allow hook custom code into the form lifecycle.
      The `window.Form.openForm` call expects an object with the following entries:
        - onOpen: Callback that will be called after the connection with the console is established. The callback
        will receive the following arguments:
          - data: the data to be bound into the form
          - ctx: info about the context where the form is being displayed. This will contain information such as the form JSON Schema, process/task, user...
    */
		const api = window.Form.openForm({
			onOpen: (data, context) => {
				setFormData(data);
			},
		});
		setFormApi(api);
	}, []);
	return (
		<div className={'pf-c-form'}>
			<Card>
				<CardBody className='pf-c-form'>
					<label>
						<b>Datos originales empleado</b>
					</label>
					<FormGroup
						fieldId={'uniforms-0002-0002'}
						label={'Apellidos'}
						isRequired={false}>
						<TextInput
							name={'datosOriginalesEmpleado.apellidos'}
							id={'uniforms-0002-0002'}
							isDisabled={true}
							placeholder={''}
							type={'text'}
							value={datosOriginalesEmpleado__apellidos}
							onChange={set__datosOriginalesEmpleado__apellidos}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-0003'}
						label={'Dni'}
						isRequired={false}>
						<TextInput
							name={'datosOriginalesEmpleado.dni'}
							id={'uniforms-0002-0003'}
							isDisabled={true}
							placeholder={''}
							type={'text'}
							value={datosOriginalesEmpleado__dni}
							onChange={set__datosOriginalesEmpleado__dni}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-0004'}
						label={'Fecha nacimiento'}
						isRequired={false}>
						<TextInput
							name={'datosOriginalesEmpleado.fechaNacimiento'}
							id={'uniforms-0002-0004'}
							isDisabled={true}
							placeholder={''}
							type={'text'}
							value={datosOriginalesEmpleado__fechaNacimiento}
							onChange={set__datosOriginalesEmpleado__fechaNacimiento}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-0005'}
						label={'Nombre'}
						isRequired={false}>
						<TextInput
							name={'datosOriginalesEmpleado.nombre'}
							id={'uniforms-0002-0005'}
							isDisabled={true}
							placeholder={''}
							type={'text'}
							value={datosOriginalesEmpleado__nombre}
							onChange={set__datosOriginalesEmpleado__nombre}
						/>
					</FormGroup>
				</CardBody>
			</Card>
			<FormGroup
				fieldId={'uniforms-0002-0006'}
				label={'Mensaje datos incorrectos'}
				isRequired={false}>
				<TextInput
					name={'mensajeDatosIncorrectos'}
					id={'uniforms-0002-0006'}
					isDisabled={true}
					placeholder={''}
					type={'text'}
					value={mensajeDatosIncorrectos}
					onChange={set__mensajeDatosIncorrectos}
				/>
			</FormGroup>
			<Card>
				<CardBody className='pf-c-form'>
					<label>
						<b>Datos modificados empleado</b>
					</label>
					<FormGroup
						fieldId={'uniforms-0002-0009'}
						label={'Apellidos'}
						isRequired={false}>
						<TextInput
							name={'datosModificadosEmpleado.apellidos'}
							id={'uniforms-0002-0009'}
							isDisabled={false}
							placeholder={''}
							type={'text'}
							value={datosModificadosEmpleado__apellidos}
							onChange={set__datosModificadosEmpleado__apellidos}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-000a'}
						label={'Dni'}
						isRequired={false}>
						<TextInput
							name={'datosModificadosEmpleado.dni'}
							id={'uniforms-0002-000a'}
							isDisabled={false}
							placeholder={''}
							type={'text'}
							value={datosModificadosEmpleado__dni}
							onChange={set__datosModificadosEmpleado__dni}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-000b'}
						label={'Fecha nacimiento'}
						isRequired={false}>
						<TextInput
							name={'datosModificadosEmpleado.fechaNacimiento'}
							id={'uniforms-0002-000b'}
							isDisabled={false}
							placeholder={''}
							type={'text'}
							value={datosModificadosEmpleado__fechaNacimiento}
							onChange={set__datosModificadosEmpleado__fechaNacimiento}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-000c'}
						label={'Nombre'}
						isRequired={false}>
						<TextInput
							name={'datosModificadosEmpleado.nombre'}
							id={'uniforms-0002-000c'}
							isDisabled={false}
							placeholder={''}
							type={'text'}
							value={datosModificadosEmpleado__nombre}
							onChange={set__datosModificadosEmpleado__nombre}
						/>
					</FormGroup>
				</CardBody>
			</Card>
		</div>
	);
};
export default Form__AltaEmpleado_corregirDatosEmpleado;