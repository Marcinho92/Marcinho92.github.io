import React, { Component } from 'react';
import { FileService } from '../services/file-service.jsx';
import { Button } from 'primereact/button';
import { saveAs } from 'file-saver';

 export class FileDownloader extends Component {
    constructor() {
        super();
        this.fileService = new FileService();
        this.state={downloading:false};
    }

    //  extractFileName = (contentDispositionValue) => {
    //      var filename = "";
    //      if (contentDispositionValue && contentDispositionValue.indexOf('attachment') !== -1) {
    //          var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    //          var matches = filenameRegex.exec(contentDispositionValue);
    //          if (matches != null && matches[1]) {
    //              filename = matches[1].replace(/['"]/g, '');
    //          }
    //      }
    //      return filename;
    //  }

    downloadFile = () => {
        this.setState({ downloading: true });
        let self = this;
        this.fileService.downloadFileFromServer(this.props.uploadedFileName).then((response) => {
            console.log("Response", response);
            this.setState({ downloading: false});
            //extract file name from Content-Disposition header
            var splittedUrl = response.config.url.split("/");
            var filename=splittedUrl[splittedUrl.length-1];
            console.log("File name",filename);
            //invoke 'Save As' dialog
            saveAs(response.data, filename);
        }).catch(function (error) {
            console.log(error);
            self.setState({ downloading: false });
            if (error.response) {
                console.log('Error', error.response.status);
            } else {
                console.log('Error', error.message);
            }
        });
    };

    render() {
        console.log("state",this.state);
        return (
            <div>
                <Button label="Download file" onClick={this.downloadFile} />
                <label>{this.state.downloading ? 'Downloading in progress' : ''}</label>
            </div>
        )
    };
}