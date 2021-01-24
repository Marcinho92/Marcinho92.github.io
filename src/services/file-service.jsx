import service from './service.jsx';

export class FileService {
    uploadFileToServer(data) {
        return service.getRestClient().post('/documents/upload', data);
    }

    downloadFileFromServer(fileName) {
        return service.getRestClient().get('/documents/download/' + fileName, { responseType: "blob" });
    }

    uploadTemplateToServer(data) {
        return service.getRestClient().post('/documents/uploadTemplate', data);
    }
}