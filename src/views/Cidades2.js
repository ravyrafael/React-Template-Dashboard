import React , {useEffect}from 'react';
import { useDispatch,useSelector }  from 'react-redux';
import { Table } from 'react-bootstrap'
import { Creators } from '../stores/ducks/cidades'

const Cidades = () =>{
   const dispatch =  useDispatch()
   const cidades = useSelector(state => state.cidades.cidades)
   console.log(cidades)
   useEffect(() => {
    dispatch(Creators.ListCidades())
    dispatch(Creators.GetCidades())
   }, [dispatch]);

    
    return (
      <div>
        <h1 >Cidades </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
            <th width="10%%">ID</th>
            <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {cidades && cidades.map(cidade => (
            <tr key={cidade.id}>
            <td>{cidade.id}</td>
              <td>{cidade.nome}</td>
              </tr>))}
          </tbody>
        </Table>
      </div>
    );
  }

export default Cidades;