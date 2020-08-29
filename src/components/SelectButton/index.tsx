import React, { SelectHTMLAttributes } from 'react';

import 'components/SelectButton/styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        label: string;
        value: string;
    }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...props }) => {
    return (
        <div className="select-group">
            <label htmlFor={ name }>{ label }</label>
            <select id={ name } value="" {...props}>
                <option value="" disabled hidden>Choose an option</option>
                {
                    options.map((option) => (
                        <option key={option.value} value={option.value}>{ option.label }</option>
                    ))
                }
            </select>
        </div>
    );
}

export default Select;