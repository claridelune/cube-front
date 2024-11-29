import axios from "axios";

export default defineNuxtPlugin((nuxt) => {
  const config = useRuntimeConfig();
  const options: any = config.public.http;

  const defaultOptions = {
    reqHandleFunc: (config: unknown) => config,
    reqErrorFunc: (error: Error) => Promise.reject(error),
    resHandleFunc: (response: unknown) => response,
    resErrorFunc: (error: Error) => Promise.reject(error),
  };

  const initOptions = {
    ...defaultOptions,
    ...options,
  };

  const axiosInstance = axios.create(initOptions);

  axiosInstance.interceptors.request.use(
    (config) => initOptions.reqHandleFunc(config),
    (error) => initOptions.reqErrorFunc(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => initOptions.resHandleFunc(response),
    (error) => initOptions.resErrorFunc(error)
  );

  nuxt.vueApp.provide("http", axiosInstance);
  //   nuxt.vueApp.use(VueQueryPlugin);
});
