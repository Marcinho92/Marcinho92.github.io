import service from './service.jsx';

export class AddresseeService {
    uploadAddresseeToServer(data) {
        //returns Promise object
        return service.getRestClient().post('/addressee/upload', data);
    }

}