import React from "react";

export default class TelaDetalheServico extends React.Component{
    render() {
        return (
            <div>
                <h1>Tela Detalhe Serviços</h1>
                <button onClick={this.props.irParaTelaServico}>Voltar para a lista</button>
                <Servico>
                    <h2>{this.props.titulo}</h2>
                    <p>Preço: R${this.props.preco}</p>
                    <p>Prazo: {this.props.prazo}</p>
                    <p>{this.props.descricao}</p>
                    <li>{this.props.pagamento}</li>
                    <button onClick={this.props.irParaTelaServico}>Voltar para a lista</button>
                </Servico>
            </div>
        )
    }
}