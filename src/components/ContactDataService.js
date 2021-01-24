import axios from 'axios'

const CONTACT_API_URL = 'http://localhost:8080/contacts'

class ContactDataService {

    retrieveAllContacts(name) {
        return axios.get({CONTACT_API_URL})
    }

}

export default new ContactDataService()