import { AxiosRequestConfig, AxiosResponse } from "axios";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

function api_interceptors_request_begin(req:AxiosRequestConfig) {

  return true;
}


function api_interceptors_request_end(req:AxiosRequestConfig) {

  return true;
}

function api_interceptors_response_begin(response:AxiosRequestConfig) {

  return true;
}

function api_interceptors_response_end(response:AxiosRequestConfig) {

  return true;
}



function route_before_each(routeTo:RouteLocationNormalized, routeFrom:RouteLocationNormalized, next:NavigationGuardNext) {

  next();
}


function route_after_each(routeTo:RouteLocationNormalized, routeFrom:RouteLocationNormalized) {

}



export default { route_before_each, route_after_each, api_interceptors_request_begin, api_interceptors_request_end, api_interceptors_response_begin, api_interceptors_response_end }