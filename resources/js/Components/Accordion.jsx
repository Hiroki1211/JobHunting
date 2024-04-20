import { React, useState} from "react";
import ReactDOM, { render } from 'react-dom';

const AccordionTitle = (props) => {
    const { checkState, setCheckState, title } = props;
    if(checkState == true){
        return(
            <button onClick={(e) =>setCheckState(!checkState)}>
                <div class="flex items-center pl-2">
                    <div>
                        &#9662;
                    </div>
                    <div>
                        {title}
                    </div>
                </div>
            </button>
        )
    }else{
        return(
            <button onClick={(e) => setCheckState(!checkState)}>
                <div class="flex items-center pl-2">
                    <div>
                        &#9656;
                    </div>
                    <div>
                        {title}
                    </div>
                </div>
            </button>
        )
    }
}

const AccordionBody = (props) => {
    const { checkState, children } = props;
    if(checkState == true){
        return(
            <div>
                {children}
            </div>
        )
    }else{
        return(
            <div>
            </div>
        )
    }    
}

export default function Accordion(props){
    const { check, title, children } = props;
    const [ checkState, setCheckState ] = useState(check);
    return(
        <div>
            <AccordionTitle checkState={checkState} setCheckState={setCheckState} title={title}/>
            <AccordionBody checkState={checkState}>{ children }</AccordionBody>
        </div>
    );
}