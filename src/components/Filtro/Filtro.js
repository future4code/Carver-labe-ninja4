import React from "react";
import styled from "styled-components";

const AreaFiltro = styled.div`
    display: flex;
    flex-direction: column;    
`

export function Filtro (props) {
    return (
        <AreaFiltro>
            <p> Pesquisar </p>
            <input
                placeholder="Digite aqui..."
                value={props.search} 
                onChange={props.updateSearch}
            />
            <p>Valor</p>
            <input
                placeholder="Valor mínimo"
                type="number"
                value={props.valueMin} 
                onChange={props.updateValueMin}
            />
            
             <input
                placeholder="Valor máximo"
                type="number"
                value={props.valueMax} 
                onChange={props.updateValueMax}
            />
                 <p>Ordenar por:</p> 
            <select name="ordernação" value={props.ordenacao}>
                <option value="sem ordenação"></option>
                <option value="titulo">Ordem alfabética</option>
                <option value="menor valor">Menor valor</option>
                <option value="maior valor">Maior valor</option>
                
            </select>
      
         <h2>{props.listService}</h2>
        </AreaFiltro>

    )
}