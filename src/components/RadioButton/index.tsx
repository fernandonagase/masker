import React, { useState, useEffect, InputHTMLAttributes } from 'react';

import 'components/RadioButton/styles.css';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ title, label, ...props }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(props.checked || false);
    }, [props.checked]);

    function handleCheck() {
        setChecked(checked => !checked);
    }

    return (
        <div className="radio-item">
            <input type="radio" id={title} {...props} checked={checked} onChange={handleCheck} />
            <label htmlFor={title}>{ label }</label>
        </div>
    );
};

export default RadioButton;