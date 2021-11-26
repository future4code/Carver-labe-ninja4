import React from "react";
import axios from "axios";
import { BASE_URL } from '../../constants/urls';
import { Filtro } from '../Filtro/Filtro'
import styled from "styled-components";
import moment from "moment";
// import CardProdutos from "./CardProdutos";

const AreaPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`
const AreaGrid = styled.div`
    display: flex;
`
const CardProduto = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    border: 2px solid;
    padding: 20px;
    justify-content: center;
    align-items: center;
`
export default class TelaDeBusca extends React.Component {
    state = {
        jobs: [],
        valueMin: "",
        valueMax: "",
        search: ""
    }
    componentDidMount() {
        this.getAlljobs()
    }

    getAlljobs = () => {
        axios.get("https://labeninjas.herokuapp.com/jobs", {
            headers: {
                Authorization: "13dfeab9-2ccf-4951-9acd-0d66de76427d"
            }
        }).then((res) => {
            this.setState({ jobs: res.data.jobs })
        })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        const jobslist = this.state.jobs.map((job) => (
            <div>
                <div key={job.id}>
                    <h3>{job.title}</h3>
                    <p>Prazo</p>
                </div>
                <button>Adicionar</button>
                <button>Detalhes</button>
            </div>
        ));




        return (
            <AreaPrincipal>
                <AreaGrid>
                    <Filtro
                        valueMin={this.state.valueMin}
                        valueMax={this.state.valueMax}
                        search={this.state.search}
                        updateSearch={this.updateSearch}
                        updateValueMin={this.updateValueMin}
                        updateValueMax={this.updateValueMax}
                    />
                    {this.state.jobs.length > 0 ? 
                    <CardProduto>
                        {jobslist}
                    </CardProduto> : <p>Loading...</p>}
                    
                </AreaGrid>

            </AreaPrincipal>
        )
    }
}
