import React, { useState } from 'react';

import './styles.css';
import Input from '../Input';
import RadioButton from '../RadioButton';

function Calculator() {
    const [ ipAddress, setIpAddress ] = useState('');
    const [ addressingType, setAddressingType ] = useState('classful');
    const [ mask, setMask ] = useState('');

    const [ addressRange, setAddressRange ] = useState('');
    const [ maxSubnets, setMaxSubnets ] = useState('');
    const [ maxAddresses, setMaxAddresses ] = useState('');
    const [ maxHosts, setMaxHosts ] = useState('');
    const [ subnetAddress, setSubnetAddress ] = useState('');
    const [ broadcastAddress, setBroadcastAddress ] = useState('');

    return (
        <main>
            <form className="main-container">
                <button type="submit" className="button button-block calculate-button">Calcular</button>
                <div className="user-input-container">
                    <Input
                        name="address"
                        label="IP Address"
                        placeholder="Ex: 192.168.4.4"
                        value={ipAddress}
                        onChange={(e) => {setIpAddress(e.target.value)}}
                    />
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
                        ? <div>
                            <Input
                                name="class"
                                label="Network Class"
                                placeholder="Ex: C"
                            />
                            <div className="classful-inputs">
                                <Input
                                    name="mask"
                                    label="Subnet Mask"
                                    placeholder="Ex: 255.255.255.0"
                                    onChange={(e) => {setMask(e.target.value)}}
                                    value={mask}
                                    className="classful-inputs-mask"
                                />
                                <Input
                                    name="subnetbits"
                                    label="Subnet Bits"
                                    placeholder="Ex: 0"
                                    className="classful-inputs-bits"
                                />
                            </div>
                        </div>
                        : <Input
                            type="number"
                            name="maskbits"
                            label="Mask Bits"
                            placeholder="Ex: 24 (1 - 32)"
                            min="1"
                            max="32"
                            onChange={(e) => {setMask(e.target.value)}}
                            value={mask}
                        />
                    }
                </div>
                <div className="calculated-input-container">
                    <Input
                        name="range"
                        label="Address Range"
                        placeholder="Ex: 192.168.4.0 - 192.168.4.255"
                        onChange={(e) => {setAddressRange(e.target.value)}}
                        value={addressRange}
                        disabled
                    />
                    <div className="input-row">
                        <Input
                            name="maxsubnets"
                            label="Max Subnets"
                            placeholder="Ex: 1"
                            type="number"
                            onChange={(e) => {setMaxSubnets(e.target.value)}}
                            value={maxSubnets}
                            disabled
                        />
                        <Input
                            name="maxaddresses"
                            label="Max Addresses"
                            placeholder="Ex: 256"
                            type="number"
                            onChange={(e) => {setMaxAddresses(e.target.value)}}
                            value={maxAddresses}
                            disabled
                        />
                        <Input
                            name="maxhosts"
                            label="Max Hosts"
                            type="number"
                            placeholder="Ex: 254"
                            onChange={(e) => {setMaxHosts(e.target.value)}}
                            value={maxHosts}
                            disabled
                        />
                    </div>
                    <div className="input-row">
                        <Input
                            name="subnet"
                            label="Subnet Address"
                            placeholder="Ex: 192.168.4.0"
                            onChange={(e) => {setSubnetAddress(e.target.value)}}
                            value={subnetAddress}
                            disabled
                        />
                        <Input
                            name="broadcast"
                            label="Broadcast Address"
                            placeholder="Ex: 192.168.4.255"
                            onChange={(e) => {setBroadcastAddress(e.target.value)}}
                            value={broadcastAddress}
                            disabled
                        />
                    </div>
                </div>
            </form>
        </main>
    );
}

export default Calculator;