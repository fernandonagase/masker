import React, { useState, FormEvent, useEffect } from 'react';

import './styles.css';
import Input from '../Input';
import RadioButton from '../RadioButton';
import Select from '../SelectButton';

import SubnetCalculator, { classfulData } from '../../core/SubnetCalculator';
import { numberToIp } from '../../util/IpUtils';

function Calculator() {
    const [ ipAddress, setIpAddress ] = useState('');
    const [ addressingType, setAddressingType ] = useState('classful');

    const [ networkClass, setNetworkClass ] = useState('');
    const [ mask, setMask ] = useState('');
    const [ subnetBits, setSubnetBits ] = useState(0);
    const [ maxSubnetBits, setMaxSubnetBits ] = useState(0);

    const [ maskBits, setMaskBits ] = useState(0);

    const [ addressRange, setAddressRange ] = useState('');
    const [ maxSubnets, setMaxSubnets ] = useState('');
    const [ maxAddresses, setMaxAddresses ] = useState('');
    const [ maxHosts, setMaxHosts ] = useState('');
    const [ subnetAddress, setSubnetAddress ] = useState('');
    const [ broadcastAddress, setBroadcastAddress ] = useState('');

    useEffect(() => {
        if (networkClass === '') {
            return;
        }
        
        setMaxSubnetBits(30 - classfulData[networkClass].defaultBits)

        const mBits = classfulData[networkClass].defaultBits + subnetBits;
        setMaskBits(mBits);

        const netMask = numberToIp(parseInt('1'.repeat(mBits).padEnd(32, '0'), 2));

        setMask(netMask);
    }, [networkClass, subnetBits]);

    useEffect(() => {
        
    }, [ipAddress])

    function handleCalculateSubnets(e: FormEvent) {
        e.preventDefault();

        const calculator = new SubnetCalculator(ipAddress, mask, networkClass);

        setAddressRange(calculator.hostAddressRange);
        setMaxSubnets(`${calculator.maxSubnets}`);
        setMaxAddresses(`${calculator.maxAddresses}`);
        setMaxHosts(`${calculator.maxHosts}`);
        setSubnetAddress(calculator.subnetAddress);
        setBroadcastAddress(calculator.broadcastAddress);
    }

    return (
        <main>
            <form className="main-container" onSubmit={handleCalculateSubnets}>
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
                            <Select
                                name="netclass"
                                label="Network Class"
                                value={networkClass}
                                onChange={(e) => {setNetworkClass(e.target.value)}}
                                options={[
                                    { label: 'A', value: 'A'},
                                    { label: 'B', value: 'B'},
                                    { label: 'C', value: 'C'}
                                ]}
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
                                    type="number"
                                    min="0"
                                    max={maxSubnetBits}
                                    value={subnetBits}
                                    onChange={(e) => {setSubnetBits(Number(e.target.value))}}
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
                            onChange={(e) => {setMaskBits(Number(e.target.value))}}
                            value={maskBits}
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
                <button type="submit" className="button button-block calculate-button">Calcular</button>
            </form>
        </main>
    );
}

export default Calculator;