import { useState } from 'react';
import Counter from './Counter';
import FunctionalCounter from './FunctionalCounter';
export default function ConditionalComponent()
{
    const [ display, setDisplay] = useState(true)

    if(display)
    {
        return (
            <div>
                <h3>Conditional Component</h3>
                <Counter></Counter>
            </div>
        )
        
    }else{
        return (
            <div>
                <h3>Nothing to see here</h3>
                <FunctionalCounter></FunctionalCounter>
            </div>
        );
    }

}
