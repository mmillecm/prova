import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import api from '../services/api';



function ModalAdd({  open, setOpen,setLoad }) {

const [dia, setDia]= useState();
const [numeroVisitas, setNumeroVisitas]= useState();
const[paginas, setPaginas]= useState()
const [hits, sethits] = useState();
const [MBytes, setBytes] = useState();
       function handleAdd() {
        api.post('/cadastro', { date: dia, numeroVisitas: numeroVisitas, paginas: paginas , hits:hits, MBytes:MBytes})
            .then(response => {
                setOpen(false)
                setLoad(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <Modal show={open} onHide={(e) => setOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title> Add Tabela1  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="m-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Data</InputGroup.Text>
                            <Form.Control
                                placeholder="Data"
                                aria-label="Data"
                                aria-describedby="basic-addon1"
                                value={dia}
                                type="date"
                                onChange={(e) => setDia(e.target.value)}
                            />
                        </InputGroup.Prepend>
                    </InputGroup>
                    <InputGroup className="m-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Numero de Visitas</InputGroup.Text>
                            <Form.Control
                                placeholder="Numero de Visitas"
                                aria-label="Numero de Visitas"
                                aria-describedby="basic-addon1"
                                value={numeroVisitas}
                                type="number"
                                onChange={(e) => setNumeroVisitas(e.target.value)}
                            />
                        </InputGroup.Prepend>
                    </InputGroup>
                    <InputGroup className="m-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Paginas</InputGroup.Text>
                            <Form.Control
                                placeholder="Paginas"
                                aria-label="Paginas"
                                aria-describedby="basic-addon1"
                                value={paginas}
                                type="number"
                                onChange={(e) => setPaginas(e.target.value)}
                            />
                        </InputGroup.Prepend>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Hits</InputGroup.Text>
                            <Form.Control
                                placeholder="Hits"
                                aria-label="Hits"
                                aria-describedby="basic-addon1"
                                value={hits}
                                type="number"
                                onChange={(e) => sethits(e.target.value)}
                            />
                        </InputGroup.Prepend>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">MBytes</InputGroup.Text>
                            <Form.Control
                                placeholder="MBytes"
                                aria-label="MBytes"
                                aria-describedby="basic-addon1"
                                value={MBytes}
                                type="number"
                                onChange={(e) => setBytes(e.target.value)}
                            />
                        </InputGroup.Prepend>
                    </InputGroup>
              
                        <Button onClick={handleAdd}>Adicionar</Button>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalAdd;