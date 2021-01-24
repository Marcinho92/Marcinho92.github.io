import React, { Component } from 'react';
import { AddresseeService } from '../services/addressee-service.jsx';

export class AddresseeUploader extends Component {
    constructor(props) {
        super(props);
        this.addresseeService = new AddresseeService();
        this.handleUploadAddressee = this.handleUploadAddressee.bind(this);
        this.state = {addresseeName: ''};
    }

    onChange = (e) => this.setState({ addresseeName: e.target.value })

    handleUploadAddressee = (event) => {
        console.log(this.state.addresseeName);
        const data = new FormData();
        data.append('addressee', this.state.addresseeName);

        this.addresseeService.uploadAddresseeToServer(data).then((response) => {            
            console.log("New addresse send to server.");
        }).catch(function (error) {
            console.log(error);
            if (error.response) {
                //HTTP error happened
                console.log("Upload error. HTTP error/status code=", error.response.status);
            } else {
                //some other error happened
                console.log("Upload error. HTTP error/status code=", error.message);
            }
        });
    };

    render() {
        return (
            <div>
                <textarea 
                    ref="newAddressee" 
                    onChange={this.onChange} 
                    value={this.state.addresseeName} 
                    placeholder="Podaj adresata" cols="40" rows="5">
                </textarea>
                <button 
                    onClick={this.handleUploadAddressee} 
                    type="button" 
                    name="sendAddresseeButton" 
                    formTarget="_self">
                    Dodaj adresata
                </button>
            </div>
        )
    };
}
