import React from "react";
import styled from "styled-components";

const AreaFiltro = styled.div`
    display: flex;
    flex-direction: column;
    
`

export function Filtro (props) {
    return (
        <AreaFiltro>
            <p> Busca por nome </p>
            <input
                placeholder="Titulo"
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
                  
            <select name="ordernação" value={props.ordenacao}>
                <option value="sem ordenação">sem ordenação</option>
                <option value="menor valor">menor valor</option>
                <option value="maior valor">maior valor</option>
                <option value="titulo">título</option>
            </select>
        </div>
    );  
         <h2>{props.listService}</h2>
        </AreaFiltro>

    )
}