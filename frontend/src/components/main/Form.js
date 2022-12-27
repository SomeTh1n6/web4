import React from "react";
import {InputNumber} from 'primereact/inputnumber';
import {Button} from "belle";
import store from "../../app/store";
function CoordinatesForm(props) {
    const submit = () => {
        let information = {
            "login": store.getState().login,
            "x": props.x_form,
            "y": props.y_form,
            "r": props.r_form
        };
        let body = [];
        for (const inf in information) {
            body.push(inf + "=" + information[inf]);
        }
        console.log(body);
        body = "?" + body.join("&");
        if (props.validate()) {
            fetch("http://localhost:8080/point" + body, {
                method: "POST"
            }).then(response => response.text().then(text => {
                console.log(JSON.parse(text));
                props.setChecks(JSON.parse(text));
                //props.showChecks();
            }))
        }
    }
      

    return (
        <div>
            <form id="form">
            <div className="checkbox-field">
                <label>-3</label>
                <input type="checkbox" title="-3" onClick={(e) => props.setX(-3)}/>
                <label>-2</label>
                <input type="checkbox"  onClick={(e) => props.setX(-2)}/>
                <label>-1</label>
                <input type="checkbox"  onClick={(e) => props.setX(-1)}/>
                <label>0</label>
                <input type="checkbox"  onClick={(e) => props.setX(0)}/>
                <label>1</label>
                <input type="checkbox"  onClick={(e) => props.setX(1)}/>
                <label>2</label>
                <input type="checkbox"  onClick={(e) => props.setX(2)}/>
                <label>3</label>
                <input type="checkbox"  onClick={(e) => props.setX(3)}/>
                <label>4</label>
                <input type="checkbox"  onClick={(e) => props.setX(4)}/>
                <label>5</label>
                <input type="checkbox"  onClick={(e) => props.setX(5)}/>
                
                
                </div>
                <div className="nums-field">
                <InputNumber placeholder="Введите Y(-5 .. 3)" value={props.y_form} onValueChange={(e) => props.setY(e.value)} mode="decimal"
                             min={-5} max={3}
                             minFractionDigits={0} maxFractionDigits={5} />
                             <br/>
                </div>
                <div className="checkbox-field">
                <label>-3</label>
                <input type="checkbox"  onClick={(e) => props.setR(-3)}/>
                <label>-2</label>
                <input type="checkbox"  onClick={(e) => props.setR(-2)}/>
                <label>-1</label>
                <input type="checkbox"  onClick={(e) => props.setR(-1)}/>
                <label>0</label>
                <input type="checkbox"  onClick={(e) => props.setR(0)}/>
                <label>1</label>
                <input type="checkbox"  onClick={(e) => props.setR(1)}/>
                <label>2</label>
                <input type="checkbox"  onClick={(e) => props.setR(2)}/>
                <label>3</label>
                <input type="checkbox"  onClick={(e) => props.setR(3)}/>
                <label>4</label>
                <input type="checkbox"  onClick={(e) => props.setR(4)}/>
                <label>5</label>
                <input type="checkbox"  onClick={(e) => props.setR(5)}/>
                
                
                </div>
                <div className="nums-field">
                <Button primary type="button" className="OK_button" onClick={submit}>OK</Button>
                </div>
            </form>
        </div>
    )
}


export default CoordinatesForm
