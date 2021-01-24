import React, { Component } from 'react';
import { FileService } from '../services/file-service.jsx';

export class TemplateUploader extends Component {
    constructor(props) {
        super(props);
        this.fileService = new FileService();
        this.handleUploadTemplate = this.handleUploadTemplate.bind(this);
    }

    handleUploadTemplate = (event) => {
        const data = new FormData();
        //using File API to get chosen file
        let template = event.target.files[0];
        console.log("Uploading template", event.target.files[0]);
        data.append('template', event.target.files[0]);
        data.append('name', 'my_template');
        data.append('description', 'this template is uploaded by young padawan');
        //calling async Promise and handling response or error situation
        this.fileService.uploadTemplateToServer(data).then((response) => {
            // var splittedUrl = response.data.split("/");
            // var templateName=splittedUrl[splittedUrl.length-1];
            // this.props.onFileNameChange(templateName);
            console.log("Template " + template.name + " is uploaded");
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
                <input type="file" onChange={this.handleUploadTemplate} />
            </div>
        )
    };
}
