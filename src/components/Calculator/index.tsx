import React from 'react';

import './styles.css';

function Calculator() {
    return (
        <main>
            <form>
                <div className="user-input-container">
                    <div className="input-group">
                        <label htmlFor="address">IP Address</label>
                        <input type="text" name="address" placeholder="Ex: 192.168.4.4" id="address" />
                    </div>
                    <div className="radio-group">
                        <label>Addressing Type</label>
                        <div className="radio-inline">
                            <div className="radio-item">
                                <input type="radio" name="type" id="classful" checked disabled />
                                <label htmlFor="classful">Classful</label>
                            </div>
                            <div className="radio-item">
                                <input type="radio" name="type" id="classless" disabled />
                                <label htmlFor="classless">Classless (CIDR)</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="input-group">
                                <label htmlFor="mask">Subnet Mask</label>
                                <input type="text" name="mask" placeholder="Ex: 255.255.255.0" id="mask" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="button button-block">Calcular</button>
                </div>
                <div>
                    <div className="input-group">
                        <label htmlFor="range">Address Range</label>
                        <input type="text" name="range" placeholder="Ex: 192.168.4.0 - 192.168.4.255" id="range" disabled />
                    </div>
                    <div className="input-row">
                        <div className="input-group">
                            <label htmlFor="maxsubnets">Max subnets</label>
                            <input type="number"name="maxsubnets" id="maxsubnets" disabled />
                        </div>
                        <div className="input-group">
                            <label htmlFor="maxaddresses">Max addresses</label>
                            <input type="number" name="maxaddresses" id="maxaddresses" disabled />
                        </div>
                        <div className="input-group">
                            <label htmlFor="maxhosts">Max hosts</label>
                            <input type="number" name="maxhosts" id="maxhosts" disabled />
                        </div>
                    </div>
                    <div className="input-row">
                        <div className="input-group">
                            <label htmlFor="subnet">Subnet address</label>
                            <input type="text" name="subnet" placeholder="Ex: 192.168.4.0" id="subnet" disabled />
                        </div>
                        <div className="input-group">
                            <label htmlFor="broadcast">Broadcast address</label>
                            <input type="text" name="broadcast" placeholder="Ex: 192.168.4.0" id="broadcast" disabled />
                        </div>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default Calculator;