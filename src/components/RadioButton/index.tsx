import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ title, label, ...props }) => {
    return (
        <div className="radio-item">
            <input type="radio" id={title} {...props} />
            <label htmlFor={title}>{ label }</label>
        </div>
    );
};

export default RadioButton;