import React from "react";

export function Filtro(props) {
    return (
        <div>
            <input
                placeholder="Titulo"
                value={props.search} 
                onChange={props.updateSearch}
            />
            <input
                placeholder="Valor mínimo"
                value={props.valueMin} 
                onChange={props.updateValueMin}
            />
             <input
                placeholder="Valor máximo"
                value={props.valueMax} 
                onChange={props.updateValueMax}
            />
             <input
                //value={} onChange={}
            />
            <h2>{props.listService}</h2>
        </div>

    );