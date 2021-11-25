import React from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { Filtro } from "./Filtro";

export default class TelaDeBusca extends React.Component {
    render () {
        return <div>
            tela de busca
        </div>

        
    }
}
//     state = {
//         listaDeServicos: [],
//         valueMin: "",
// 		valueMax: "",
// 		search:""
//     }

//     updateSearch = (e) => {
// 		this.setState({search: e.target.value,});
// 	}
// 	updateValueMin = (e) => {
// 		if (e.target.value < 0) {
// 			this.setState({valueMin: "",});
// 		  } else {
// 			this.setState({valueMin: e.target.value,});
// 		  }
// 	}
// 	updateValueMax = (e) => {
// 		if (e.target.value < 0) {
// 			this.setState({valueMax: "",});
// 		  } else {
// 			this.setState({valueMax: e.target.value,});
// 		  }
// 	}

//     componentDidMount(){
//         this.pegarTodosServicos()
//     }

//     pegarTodosServicos = () => {
//         axios.get(
//             `${BASE_URL}/jobs`, {
//                 headers: {
//                     Authorization: "13dfeab9-2ccf-4951-9acd-0d66de76427d"
//                 }
//             }
//         ).then((response) =>
//             this.setState({
//                 listaDeServicos: response.data.jobs
//             })
//         ).catch((error) =>
//             console.log(error.response)
//         )
//     }
    
//     render() {
//         let filterServices = []
// 		const filtrosCriterios = this.state.listService
// 		.filter(service => {
// 			return service.name.toLowerCase().includes(this.state.search.toLowerCase());
// 		})
// 		.filter(service => {
// 			return this.state.valueMin === "" || service.value >= this.state.valueMin;
// 		})
// 		.filter(service => {
// 			return this.state.valueMax === "" || service.value <= this.state.valueMax;
// 		})
// 		.map(service => {
// 			return filterServices.push(service);
// 		})
//         console.log(this.state.listaDeServicos)
//         const jobsList = this.state.listaDeServicos.map((oferta) => {
//             return <p key={oferta.id}>
//                     <p>{oferta.title}</p>
//                     <p>{oferta.description}</p>
//                     <p>{oferta.price}</p>
//                     <select>
//                         <option value="">Formas de Pagamento</option>
//                         {oferta.paymentMethods.map((opcao) => {
//                             let i = 0
//                             return (
//                                 <option key={opcao.paymentMethods}>{opcao} </option>
//                             )
//                         })}
//                     </select>
//                     <p>{oferta.dueDate}</p>
//                 </p>

//         })
//         return (
//             <div>{jobsList}</div>
//         )
//     }


    

//     render () {
        
//         return (
//             <div>
//                 <div>
//                     <button onClick={this.props.irParaHome}>Home</button>
//                     <button onClick={this.props.irParaCadastro}>Cadastro</button>
//                     <button onClick={this.props.irParaBusca}>Busca</button>
//                     <button onClick={this.props.irParaCarrinho}>Carrinho</button>
//                     <button onClick={this.props.irParaDetalhes}>Detalhes</button>
//                 </div>
//                 <Filtro
//                 valueMin={this.state.valueMin}
//                 valueMax={this.state.valueMax}
//                 search={this.state.search}
//                 updateSearch={this.updateSearch}
//                 updateValueMin={this.updateValueMin}
//                 updateValueMax={this.updateValueMax}
//                 />       

//             </div>         
//         )}
// }