import React, { useCallback, useEffect, useState } from 'react';
import {
	Checkbox,
	FormGroup,
	Card,
	CardBody,
	TextInput,
} from '@patternfly/react-core';
const Form__AltaEmpleado: React.FC<any> = (props: any) => {
	const [formApi, setFormApi] = useState<any>();
	const [datosEmpleadoCorrectos, set__datosEmpleadoCorrectos] =
		useState<boolean>(false);
	const [empleado__apellidos, set__empleado__apellidos] = useState<string>('');
	const [empleado__dni, set__empleado__dni] = useState<string>('');
	const [empleado__fechaNacimiento, set__empleado__fechaNacimiento] =
		useState<string>('');
	const [empleado__nombre, set__empleado__nombre] = useState<string>('');
	const [mensajeValidacion, set__mensajeValidacion] = useState<string>('');
	/* Utility function that fills the form with the data received from the kogito runtime */
	const setFormData = (data) => {
		if (!data) {
			return;
		}
		set__datosEmpleadoCorrectos(data?.datosEmpleadoCorrectos ?? false);
		set__empleado__apellidos(data?.empleado?.apellidos ?? '');
		set__empleado__dni(data?.empleado?.dni ?? '');
		set__empleado__fechaNacimiento(data?.empleado?.fechaNacimiento ?? '');
		set__empleado__nombre(data?.empleado?.nombre ?? '');
		set__mensajeValidacion(data?.mensajeValidacion ?? '');
	};
	/* Utility function to generate the expected form output as a json object */
	const getFormData = useCallback(() => {
		const formData: any = {};
		formData.datosEmpleadoCorrectos = datosEmpleadoCorrectos;
		formData.empleado = {};
		formData.empleado.apellidos = empleado__apellidos;
		formData.empleado.dni = empleado__dni;
		formData.empleado.fechaNacimiento = empleado__fechaNacimiento;
		formData.empleado.nombre = empleado__nombre;
		formData.mensajeValidacion = mensajeValidacion;
		return formData;
	}, [
		datosEmpleadoCorrectos,
		empleado__apellidos,
		empleado__dni,
		empleado__fechaNacimiento,
		empleado__nombre,
		mensajeValidacion,
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
			<FormGroup fieldId='uniforms-0000-0001'>
				<Checkbox
					isChecked={datosEmpleadoCorrectos}
					isDisabled={false}
					id={'uniforms-0000-0001'}
					name={'datosEmpleadoCorrectos'}
					label={'Datos empleado correctos'}
					onChange={set__datosEmpleadoCorrectos}
				/>
			</FormGroup>
			<Card>
				<CardBody className='pf-c-form'>
					<label>
						<b>Empleado</b>
					</label>
					<FormGroup
						fieldId={'uniforms-0000-0004'}
						label={'Apellidos'}
						isRequired={false}>
						<TextInput
							name={'empleado.apellidos'}
							id={'uniforms-0000-0004'}
							isDisabled={false}
							placeholder={''}
							type={'text'}
							value={empleado__apellidos}
							onChange={set__empleado__apellidos}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0000-0005'}
						label={'Dni'}
						isRequired={false}>
						<TextInput
							name={'empleado.dni'}
							id={'uniforms-0000-0005'}
							isDisabled={false}
							placeholder={''}
							type={'text'}
							value={empleado__dni}
							onChange={set__empleado__dni}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0000-0006'}
						label={'Fecha nacimiento'}
						isRequired={false}>
						<TextInput
							name={'empleado.fechaNacimiento'}
							id={'uniforms-0000-0006'}
							isDisabled={false}
							placeholder={''}
							type={'text'}
							value={empleado__fechaNacimiento}
							onChange={set__empleado__fechaNacimiento}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0000-0007'}
						label={'Nombre'}
						isRequired={false}>
						<TextInput
							name={'empleado.nombre'}
							id={'uniforms-0000-0007'}
							isDisabled={false}
							placeholder={''}
							type={'text'}
							value={empleado__nombre}
							onChange={set__empleado__nombre}
						/>
					</FormGroup>
				</CardBody>
			</Card>
			<FormGroup
				fieldId={'uniforms-0000-0008'}
				label={'Mensaje validacion'}
				isRequired={false}>
				<TextInput
					name={'mensajeValidacion'}
					id={'uniforms-0000-0008'}
					isDisabled={false}
					placeholder={''}
					type={'text'}
					value={mensajeValidacion}
					onChange={set__mensajeValidacion}
				/>
			</FormGroup>
		</div>
	);
};
export default Form__AltaEmpleado;
