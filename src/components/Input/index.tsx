import React, { InputHTMLAttributes } from 'react';

import 'components/Input/styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...props }) => {
    return (
        <div className="input-group">
            <label htmlFor={ name }>{ label }</label>
            <input type="text" name={ name } id={ name } {...props} />
        </div>
    );
}

export default Input;