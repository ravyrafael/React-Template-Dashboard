import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from '../stores/ducks/cidades'

class Clientes extends Component {
  componentWillMount() {
    console.log('this.props.ListClientes()');
  }

  render() {

    return (
      <div>
        <h1 >Clientes</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({ clientes: state.clientes })
const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Clientes);
