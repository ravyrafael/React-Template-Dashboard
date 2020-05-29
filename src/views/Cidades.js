import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from '../stores/ducks/cidades'

class Cidades extends Component {
  componentWillMount() {
    this.props.ListCidades()
  }
  render() {
    const { cidades } = this.props.cidades
    return (
      <div>
        <h1 >Cidades </h1>
        <Table>
          <thead>
            <th>ID</th>
            <th>Nome</th>
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
    );
  }
}

const mapStateToProps = state => ({ cidades: state.cidades })
const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Cidades);
