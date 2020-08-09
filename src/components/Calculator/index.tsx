import React from 'react';

import './styles.css';
import Input from '../Input';
import RadioButton from '../RadioButton';

function Calculator() {
    return (
        <main>
            <form>
                <div className="user-input-container">
                    <Input name="address" label="IP Address" placeholder="Ex: 192.168.4.4" />
                    <div className="radio-group">
                        <label>Addressing Type</label>
                        <div className="radio-inline">
                            <RadioButton name="type" title="classful" label="Classful" checked disabled />
                            <RadioButton name="type" title="classless" label="Classless (CIDR)" disabled />
                        </div>
                    </div>
                    <Input name="mask" label="Subnet Mask" placeholder="Ex: 255.255.255.0" />
                    <button type="submit" className="button button-block">Calcular</button>
                </div>
                <div>
                    <Input name="range" label="Address Range" placeholder="Ex: 192.168.4.0 - 192.168.4.255" />
                    <div className="input-row">
                        <Input name="maxsubnets" label="Max Subnets" type="number" />
                        <Input name="maxaddresses" label="Max Addresses" type="number" />
                        <Input name="maxhosts" label="Max Hosts" type="number" />
                    </div>
                    <div className="input-row">
                        <Input name="subnet" label="Subnet Address" placeholder="Ex: 192.168.4.0" />
                        <Input name="broadcast" label="Subnet Address" placeholder="Ex: 192.168.4.255" />
                    </div>
                </div>
            </form>
        </main>
    );
}

export default Calculator;