//import the axios HTTP client to communicate with the API
import axios from 'axios';

class jeopardyService {
    constructor() {
        this.url = 'http://jservice.io/api/random'
        this.client = axios.create();
    }
    getQuestion(){
        return this.client.get(this.url);
    }
}
export default jeopardyService;
