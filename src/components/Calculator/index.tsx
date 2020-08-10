import React, { useState } from 'react';

import './styles.css';
import Input from '../Input';
import RadioButton from '../RadioButton';

function Calculator() {
    const [ addressingType, setAddressingType ] = useState('classful');

    return (
        <main>
            <form>
                <div className="user-input-container">
                    <Input name="address" label="IP Address" placeholder="Ex: 192.168.4.4" />
                    <div className="radio-group">
                        <label>Addressing Type</label>
                        <div className="radio-inline">
                            <RadioButton
                                name="type"
                                title="classful"
                                label="Classful"
                                checked={addressingType === 'classful'}
                                onClick={() => {setAddressingType('classful')}}
                                
                            />
                            <RadioButton
                                name="type"
                                title="classless"
                                label="Classless (CIDR)"
                                checked={addressingType === 'classless'}
                                onClick={() => {setAddressingType('classless')}}
                                
                            />
                        </div>
                    </div>
                    { addressingType === 'classful' 
                        ? <Input name="mask" label="Subnet Mask" placeholder="Ex: 255.255.255.0" />
                        : <Input type="number" name="maskbits" label="Mask Bits" placeholder="Ex: 24 (1 - 32)" min="1" max="32" />
                    }
                    <button type="submit" className="button button-block">Calcular</button>
                </div>
                <div>
                    <Input name="range" label="Address Range" placeholder="Ex: 192.168.4.0 - 192.168.4.255" disabled />
                    <div className="input-row">
                        <Input name="maxsubnets" label="Max Subnets" type="number" disabled />
                        <Input name="maxaddresses" label="Max Addresses" type="number" disabled />
                        <Input name="maxhosts" label="Max Hosts" type="number" disabled />
                    </div>
                    <div className="input-row">
                        <Input name="subnet" label="Subnet Address" placeholder="Ex: 192.168.4.0" disabled />
                        <Input name="broadcast" label="Subnet Address" placeholder="Ex: 192.168.4.255" disabled />
                    </div>
                </div>
            </form>
        </main>
    );
}

export default Calculator;