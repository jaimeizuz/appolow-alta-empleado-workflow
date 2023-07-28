import React, { useCallback, useEffect, useState } from 'react';
import { TextInput, FormGroup, Card, CardBody } from '@patternfly/react-core';
const Form__AltaEmpleado_asignarDiasVacacionesManualmente: React.FC<any> = (
	props: any
) => {
	const [formApi, setFormApi] = useState<any>();
	const [diasVacaciones, set__diasVacaciones] = useState<number>();
	const [empleado__apellido1, set__empleado__apellido1] = useState<string>('');
	const [empleado__apellido2, set__empleado__apellido2] = useState<string>('');
	const [empleado__convenio, set__empleado__convenio] = useState<string>('');
	const [empleado__departamento, set__empleado__departamento] =
		useState<string>('');
	const [empleado__diasvacaciones, set__empleado__diasvacaciones] =
		useState<number>();
	const [empleado__dni, set__empleado__dni] = useState<string>('');
	const [empleado__edad, set__empleado__edad] = useState<number>();
	const [empleado__estado, set__empleado__estado] = useState<string>('');
	const [empleado__idempleado, set__empleado__idempleado] = useState<number>();
	const [empleado__nombre, set__empleado__nombre] = useState<string>('');
	const [
		empleado__ordenadorserialnumber,
		set__empleado__ordenadorserialnumber,
	] = useState<string>('');
	const [empleado__rol, set__empleado__rol] = useState<string>('');
	const [empleado__telefono, set__empleado__telefono] = useState<string>('');
	/* Utility function that fills the form with the data received from the kogito runtime */
	const setFormData = (data) => {
		if (!data) {
			return;
		}
		set__diasVacaciones(data?.diasVacaciones);
		set__empleado__apellido1(data?.empleado?.apellido1 ?? '');
		set__empleado__apellido2(data?.empleado?.apellido2 ?? '');
		set__empleado__convenio(data?.empleado?.convenio ?? '');
		set__empleado__departamento(data?.empleado?.departamento ?? '');
		set__empleado__diasvacaciones(data?.empleado?.diasvacaciones);
		set__empleado__dni(data?.empleado?.dni ?? '');
		set__empleado__edad(data?.empleado?.edad);
		set__empleado__estado(data?.empleado?.estado ?? '');
		set__empleado__idempleado(data?.empleado?.idempleado);
		set__empleado__nombre(data?.empleado?.nombre ?? '');
		set__empleado__ordenadorserialnumber(
			data?.empleado?.ordenadorserialnumber ?? ''
		);
		set__empleado__rol(data?.empleado?.rol ?? '');
		set__empleado__telefono(data?.empleado?.telefono ?? '');
	};
	/* Utility function to generate the expected form output as a json object */
	const getFormData = useCallback(() => {
		const formData: any = {};
		formData.diasVacaciones = diasVacaciones;
		return formData;
	}, [diasVacaciones]);
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
			<FormGroup
				fieldId={'uniforms-0002-0001'}
				label={'Dias vacaciones'}
				isRequired={false}>
				<TextInput
					type={'number'}
					name={'diasVacaciones'}
					isDisabled={false}
					id={'uniforms-0002-0001'}
					placeholder={''}
					step={1}
					value={diasVacaciones}
					onChange={(newValue) => set__diasVacaciones(Number(newValue))}
				/>
			</FormGroup>
			<Card>
				<CardBody className='pf-c-form'>
					<label>
						<b>Empleado</b>
					</label>
					<FormGroup
						fieldId={'uniforms-0002-0004'}
						label={'Apellido 1'}
						isRequired={false}>
						<TextInput
							name={'empleado.apellido1'}
							id={'uniforms-0002-0004'}
							isDisabled={true}
							placeholder={''}
							type={'text'}
							value={empleado__apellido1}
							onChange={set__empleado__apellido1}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-0005'}
						label={'Apellido 2'}
						isRequired={false}>
						<TextInput
							name={'empleado.apellido2'}
							id={'uniforms-0002-0005'}
							isDisabled={true}
							placeholder={''}
							type={'text'}
							value={empleado__apellido2}
							onChange={set__empleado__apellido2}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-0006'}
						label={'Convenio'}
						isRequired={false}>
						<TextInput
							name={'empleado.convenio'}
							id={'uniforms-0002-0006'}
							isDisabled={true}
							placeholder={''}
							type={'text'}
							value={empleado__convenio}
							onChange={set__empleado__convenio}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-0007'}
						label={'Departamento'}
						isRequired={false}>
						<TextInput
							name={'empleado.departamento'}
							id={'uniforms-0002-0007'}
							isDisabled={true}
							placeholder={''}
							type={'text'}
							value={empleado__departamento}
							onChange={set__empleado__departamento}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-0009'}
						label={'Diasvacaciones'}
						isRequired={false}>
						<TextInput
							type={'number'}
							name={'empleado.diasvacaciones'}
							isDisabled={true}
							id={'uniforms-0002-0009'}
							placeholder={''}
							step={1}
							value={empleado__diasvacaciones}
							onChange={(newValue) =>
								set__empleado__diasvacaciones(Number(newValue))
							}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-000a'}
						label={'Dni'}
						isRequired={false}>
						<TextInput
							name={'empleado.dni'}
							id={'uniforms-0002-000a'}
							isDisabled={true}
							placeholder={''}
							type={'text'}
							value={empleado__dni}
							onChange={set__empleado__dni}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-000c'}
						label={'Edad'}
						isRequired={false}>
						<TextInput
							type={'number'}
							name={'empleado.edad'}
							isDisabled={true}
							id={'uniforms-0002-000c'}
							placeholder={''}
							step={1}
							value={empleado__edad}
							onChange={(newValue) => set__empleado__edad(Number(newValue))}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-000d'}
						label={'Estado'}
						isRequired={false}>
						<TextInput
							name={'empleado.estado'}
							id={'uniforms-0002-000d'}
							isDisabled={true}
							placeholder={''}
							type={'text'}
							value={empleado__estado}
							onChange={set__empleado__estado}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-000f'}
						label={'Idempleado'}
						isRequired={false}>
						<TextInput
							type={'number'}
							name={'empleado.idempleado'}
							isDisabled={true}
							id={'uniforms-0002-000f'}
							placeholder={''}
							step={1}
							value={empleado__idempleado}
							onChange={(newValue) =>
								set__empleado__idempleado(Number(newValue))
							}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-000g'}
						label={'Nombre'}
						isRequired={false}>
						<TextInput
							name={'empleado.nombre'}
							id={'uniforms-0002-000g'}
							isDisabled={true}
							placeholder={''}
							type={'text'}
							value={empleado__nombre}
							onChange={set__empleado__nombre}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-000h'}
						label={'Ordenadorserialnumber'}
						isRequired={false}>
						<TextInput
							name={'empleado.ordenadorserialnumber'}
							id={'uniforms-0002-000h'}
							isDisabled={true}
							placeholder={''}
							type={'text'}
							value={empleado__ordenadorserialnumber}
							onChange={set__empleado__ordenadorserialnumber}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-000i'}
						label={'Rol'}
						isRequired={false}>
						<TextInput
							name={'empleado.rol'}
							id={'uniforms-0002-000i'}
							isDisabled={true}
							placeholder={''}
							type={'text'}
							value={empleado__rol}
							onChange={set__empleado__rol}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-000j'}
						label={'Telefono'}
						isRequired={false}>
						<TextInput
							name={'empleado.telefono'}
							id={'uniforms-0002-000j'}
							isDisabled={true}
							placeholder={''}
							type={'text'}
							value={empleado__telefono}
							onChange={set__empleado__telefono}
						/>
					</FormGroup>
				</CardBody>
			</Card>
		</div>
	);
};
export default Form__AltaEmpleado_asignarDiasVacacionesManualmente;
