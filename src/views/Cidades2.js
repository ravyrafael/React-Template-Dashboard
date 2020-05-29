import React , {useEffect}from 'react';
import { useDispatch,useSelector }  from 'react-redux';
import { Table } from 'react-bootstrap'
import { Creators } from '../stores/ducks/cidades'
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Title from '../components/dashboard/Title'
import {ResponsiveContainer } from 'recharts';

const Cidades = ({useStyles}) =>{
   const dispatch =  useDispatch()
   const cidades = useSelector(state => state.cidades.cidades)
   console.log(cidades)
   useEffect(() => {
    dispatch(Creators.ListCidades())
    dispatch(Creators.GetCidades())
   }, [dispatch]);

   const classes = useStyles();
   const fixedHeightPaper = clsx(classes.paper, classes.absoluteHeight);
   
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={9}>
          <Paper className={fixedHeightPaper}>
          <Title>Cidades</Title>
        <ResponsiveContainer>
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
           </ResponsiveContainer>
          </Paper>
        </Grid>
       </Grid>
    );
  }

export default Cidades;