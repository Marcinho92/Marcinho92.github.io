import React, { Component } from 'react'
import ApiService from './ApiService'

class ImportFromFileBodyComponent extends Component {

    state = {
        selectedFile: ''
      }

    onFileChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
        });
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        ApiService.upload(formData)
            .then(res => {
                    console.log(res.data);
                    alert("File uploaded successfully.")
            })
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group files color">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ImportFromFileBodyComponent;