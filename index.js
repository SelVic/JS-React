import React, {Component} from "react";
import {render} from 'react-dom';
import {MyPrivetFuncComponent} from "./index2";

//console.log(5);


class MyPrivetComponent extends Component {
    componentDidMount() {
        console.log(33)
    }

    render() {
        return (
            <div>
                <MyPrivetFuncComponent/>
                <div>Привет 2</div>
                <div>Привет 2</div>
            </div>
        )
    }
}


render(<div>
            <MyPrivetComponent/>
            <MyPrivetFuncComponent/>
        </div>, document.querySelector("#root"));


