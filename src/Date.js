import React, { useState } from 'react';
import { Api } from './Api';

export function Date(props) {
    const [value, setValue] = useState('')
    
    return (
        <div>
            <h3>Select A Previous Date</h3>
            <form onSubmit={Api(props.setData, props.setDescription,props.setTitle, value)} >
                <input type={`date`} name={`date`} value={value} onChange={(e) => setValue(e.target.value)}></input>
            </form>
        </div>
    )
}