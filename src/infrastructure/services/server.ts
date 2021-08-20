import axios from 'axios'
import progress from 'nprogress'
import events from '../core/globalEvent'


export default function(publicToken:string,baseURL:string):any {


    const apiClient = axios.create({
        baseURL:baseURL,
        timeout: 1000000,
        headers: {
            Accept: 'application/json',
             'X-P-T': publicToken
        }
    });

    apiClient.interceptors.request.use(function (req) {

         events.api_interceptors_request_begin(req);

        !progress.isStarted() ? progress.start() : false

        const userToken = window.sessionStorage.getItem("X-U-T");

        req.headers['X-U-T'] = userToken == null ? "not authentication :(" : userToken;

        events.api_interceptors_request_end(req);

        return req;
    });



    apiClient.interceptors.response.use(function (response) {

        events.api_interceptors_response_begin(response);

        progress.isStarted() ? progress.done() : progress.isStarted()

        const userToken = response.headers['X-U-T'];

        window.sessionStorage.setItem("X-U-T", userToken == null ? "not authentication :(" : userToken);

        events.api_interceptors_response_end(response);
        return response;
    });


    return apiClient;

}



