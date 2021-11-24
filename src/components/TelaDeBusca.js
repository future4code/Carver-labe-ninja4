import React from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

export default class TelaDeBusca extends React.Component {
    state = {
        listaDeServicos: []
    }

    componentDidMount(){
        this.pegarTodosServicos()
    }

    pegarTodosServicos = () => {
        axios.get(
            `${BASE_URL}/jobs`, {
                headers: {
                    Authorization: "13dfeab9-2ccf-4951-9acd-0d66de76427d"
                }
            }
        ).then((response) =>
            this.setState({
                listaDeServicos: response.data.jobs
            })
        ).catch((error) =>
            console.log(error.response)
        )
    }
    
    render() {
        console.log(this.state.listaDeServicos)
        const jobsList = this.state.listaDeServicos.map((oferta) => {
            return <p key={oferta.id}>
                    <p>{oferta.title}</p>
                    <p>{oferta.description}</p>
                    <p>{oferta.price}</p>
                    <select>
                        <option value="">Formas de Pagamento</option>
                        {oferta.paymentMethods.map((opcao) => {
                            let i = 0
                            return (
                                <option key={opcao.paymentMethods}>{opcao} </option>
                            )
                        })}
                    </select>
                    <p>{oferta.dueDate}</p>
                </p>

        })
        return (
            <div>{jobsList}</div>
        )
    }
}