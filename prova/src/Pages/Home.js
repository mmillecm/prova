import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import api from "../services/api";
import Button from "react-bootstrap/Button";
import ModalAdd from '../Components/Modal'


function Home() {
    const [load, setLoad] = useState(false);
    const [tabela, setTabela] = useState();
    const [open, setOpen] = useState(false);

  


    useEffect(() => {
        api.get('/cadastro')
            .then(response => {
                console.log(response.data.cadastro)
                setTabela(response.data.cadastro)
                setLoad(true)
            })
    }, [load])

    function handleAdd() {
        setOpen(true);
    }

    return ( 
        <>

        {
            load ? ( 
                <>
                <div className="mb-5">
                        <h1>Itens</h1>
                        <Button onClick={handleAdd}>Adicionar Itens</Button>
                 </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Número de Visitas</th>
                                <th>Páginas</th>
                                <th>Hits</th>
                                <th>MBytes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tabela.map((item) =>
                                <tr>
                                    <td>{item.date}</td>
                                    <td>{item.numeroVisitas}</td>
                                    <td>{item.paginas}</td>
                                   <td>{item.hits}</td>
                                   <td>{item.MBytes}</td>

                                </tr>
                            )}
                        </tbody>
                    </Table>

                </>
            ) : ( <h2 > Carregando </h2>
            )
        }
  <ModalAdd
    setLoad={setLoad}
    open={open}
    setOpen={setOpen}
  />
        </>
        
    );
}

export default Home;