import React, { Component } from 'react';
import { FileService } from '../services/file-service.jsx';

export class FileUploader extends Component {
    constructor(props) {
        super(props);
        this.fileService = new FileService();
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.state = {fileName: ''};
    }

    handleUploadFile = (event) => {
        const data = new FormData();
        //using File API to get chosen file
        let file = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        data.append('file', event.target.files[0]);
        data.append('name', 'my_file');
        data.append('description', 'this file is uploaded by young padawan');
        //calling async Promise and handling response or error situation
        this.fileService.uploadFileToServer(data).then((response) => {
            var splittedUrl = response.data.split("/");
            var filename=splittedUrl[splittedUrl.length-1];
            this.props.onFileNameChange(filename);
            console.log("File " + file.name + " is uploaded");
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
                <input type="file" onChange={this.handleUploadFile} />
            </div>
        )
    };
}
