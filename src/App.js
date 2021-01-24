import React, { Component } from 'react';
import {FileUploader} from './components/fileUploader.jsx';
import {TemplateUploader} from './components/templateUploader.jsx';
import {FileDownloader} from './components/fileDownloader.jsx';
import {AddresseeUploader} from './components/addresseeUploader.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleFileNameChange = this.handleFileNameChange.bind(this);
    this.state = {fileName: ''};
  }

  handleFileNameChange(fileName) {
    this.setState({fileName});
  }

  render() {
    return (
      <div>
        <AddresseeUploader />
        <FileUploader onFileNameChange={this.handleFileNameChange}/>
        <TemplateUploader />
        <FileDownloader uploadedFileName={this.state.fileName}/>
      </div>
    );
  }

}

export default App
