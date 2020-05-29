import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from '../stores/ducks/cidades'
import { ResponsiveContainer } from 'recharts';


class Cidades extends Component {
  componentWillMount() {
    this.props.ListCidades()
  }
  render() {
    const { cidades } = this.props.cidades
    return (
      <ResponsiveContainer>
      <div>
        <h1 >Cidades </h1>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {cidades.map(cidade => (
            <tr key={cidade.id}>
            <td>{cidade.id}</td>
              <td>{cidade.nome}</td>
              </tr>))}
          </tbody>
        </Table>
      </div>
      </ResponsiveContainer>
    );
  }
}

const mapStateToProps = state => ({ cidades: state.cidades })
const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Cidades);
