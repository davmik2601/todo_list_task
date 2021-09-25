import Axios from '../plugins/Axios';

class Api {
    constructor() {
        this.instance = Axios;
        this.pendingRequests = {}
    }

    call({method, url}, data) {
        let request_key = `/api/version1/${url}/${method}`;
        this.pendingRequests[request_key] = new Promise((resolve, reject) => {
            this.instance[method](`/api/version1/${url}`, data)
                .then(res => {
                    resolve(res);
                }).catch(err => {
                reject(err);
            }).finally(() => {
                delete this.pendingRequests[request_key];
            })
        })
        return this.pendingRequests[request_key];
    }

    get(url, data) {
        return this.call({method: 'get', url: url}, data)
    }
    post(url, data) {
        return this.call({method: 'post', url: url}, data)
    }
    delete(url, data) {
      return this.call({method: 'delete', url: url}, {data})
    }

}

export default new Api();