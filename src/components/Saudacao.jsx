import React from 'react';
import PropTypes from 'prop-types';

const Saudacao = (props) => {
    return <h1>Bem-vindo(a), {props.nome}!</h1>
};

// Valor padrão caso a prop 'nome' não seja fornecida
Saudacao.defaultProps = {
    nome: 'Visitante',
};

Saudacao.propTypes = {
    nome: PropTypes.string.isRequired, // Exige que a prop 'nome' seja uma string
};

export default Saudacao;