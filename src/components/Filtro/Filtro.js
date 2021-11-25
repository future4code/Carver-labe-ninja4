import React from "react";
import styled from "styled-components";

const AreaFiltro = styled.div`
    display: flex;
    flex-direction: column;
    
`

export function Filtro(props) {
    return (
        <AreaFiltro>
            <p> Busca por nome </p>
            <input
                value={props.search} 
                onChange={props.updateSearch}
            />
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
            <h2>{props.listService}</h2>
        </AreaFiltro>

    )
}