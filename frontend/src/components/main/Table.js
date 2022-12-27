import React from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/md-light-deeppurple/theme.css';

function Resulttable(props) {

    return (
        <DataTable id="resultTable" value={props.checks} responsiveLayout="scroll" >
            <Column style={{background:"#ffdead", color:"black"}} header="X" field="x"/>
            <Column style={{background:"#ffdead", color:"black"}} header="Y" field="y"/>
            <Column style={{background:"#ffdead", color:"black"}} header="R" field="r"/>
            <Column style={{background:"#ffdead", color:"black"}} header="Попадание"field="result"/>
        </DataTable>
    )
}

export default Resulttable;