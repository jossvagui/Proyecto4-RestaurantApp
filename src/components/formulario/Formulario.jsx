import React, { Component } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Container
} from 'reactstrap';
import './formulario.css'


const Formulario = () => {
    return (
        <Container>
            <Form className="form">
                <FormGroup>
                    <Label for="Nombre">
                        <h5>Nombre:</h5>
                    </Label>
                    <Input
                        id="Nombre"
                        name="nombre"
                        placeholder="Escribe tu nombre..."
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Email"><h5>Email:</h5></Label>
                    <Input
                        type="email"
                        name="email"
                        id="Email"
                        placeholder="Escribe tu correo..."
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Fecha">
                        <h5>Fecha:</h5>
                    </Label>
                    <Input
                        id="Fecha"
                        name="date"
                        placeholder="Fecha de reservación..."
                        type="date"
                    />
                </FormGroup>                
                <Button className='btn__reserva d-flex align-items-center gap-3'><i class="ri-calendar-line"></i><h5>Reservar</h5></Button>               
            </Form>
        </Container>
    )
}

export default Formulario

