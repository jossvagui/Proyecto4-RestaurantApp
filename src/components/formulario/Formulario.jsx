import React, { Component, useState } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Container
} from 'reactstrap';
import './formulario.css'
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 


const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("Reservas")
            .add({
                nombre: nombre,
                email: email,
                fecha: fecha
            })
            .then(() => {
                alert("La reservación ha sido registrada");
            })
            .catch((error) => {
                alert(error.message);
            });
    };



    return (
        <Container>
            <Form className="form" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="Nombre">
                        <h5>Nombre:</h5>
                    </Label>
                    <Input
                        id="Nombre"
                        name="nombre"
                        placeholder="Escribe tu nombre..."
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Email"><h5>Email:</h5></Label>
                    <Input
                        type="email"
                        name="email"
                        id="Email"
                        placeholder="Escribe tu correo..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </FormGroup>
                <Button className='btn__reserva d-flex align-items-center gap-3'><i class="ri-calendar-line"></i><h5>Reservar</h5></Button>
            </Form>
        </Container>
    )
}

export default Formulario

