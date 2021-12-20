import React from "react";
import './App.css'
import Store from "./store";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            out: '0'
        }
        this.refOutput = React.createRef()
    }

    typeNumber(value) {
        let currentValue = value;
        let output = this.refOutput.current
        this.setState({
            out: currentValue
        })
        if (output.value === '0'){output.value =''}
        output.value += currentValue
    }

typeOperation(value){
        let output = this.refOutput.current
    if (value ==='CE'){
        if (output.value.length === 1){output.value = '0'}else {output.value = output.value.substring(0, output.value.length - 1)}
    }
    else if (value === 'C'){ output.value ='0'}
    else if(value==='='){
        try{
            output.value = eval(output.value )
        }
    catch{
        output.value ="Недопустиме значення"

    }}
}
    render() {
        return (
            <div className="container">
                <div className="output">
                    <input ref={this.refOutput} type="text" defaultValue={this.state.out}/>
                </div>
                <div className="buttons">
                    {Store.button.map(item => <button
                        onClick={() => {
                            this.typeNumber(item.val)
                        }}
                    >{item.val}</button>)}
                    {Store.operation.map(item => <button
                        onClick={() => {
                            this.typeOperation(item.val)
                        }}
                    >{item.val}</button>)}
                </div>
            </div>
        )
    }
}
export default App