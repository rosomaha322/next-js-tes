import { get } from 'lodash';
import { getToken } from './user';

import 'url-search-params-polyfill';

interface Options {
  [key: string]: any;
}

interface GlobalOptions {
  headers: {
    [key: string]: any;
  };
  mode: string;
}

/**
 * default headers
 * enabled cors
 */
const globalOptions = (): GlobalOptions => {
  return {
    headers: {
      Authorization: 'Bearer ' + getToken(),
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  };
};

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 * @return {object|undefined} Returns either the response, or throws an error
 */
const checkStatus = async <T>(response: Response): Promise<T> => {
  const json = await response.json();
  if (response.status >= 200 && response.status < 300) {
    return json;
  }
  // catches error in sagas
  throw json;
};

/**
 * @param url string
 * @param options object
 * @returns {Promise<T>}
 */
const http = async <T>(url: string, options: Options): Promise<T> => {
  const newOptions: Options = { ...globalOptions(), ...options };

  const urlParams = new URLSearchParams(get(options, 'params', {}));
  const newUrl = `${process.env.NEXT_PUBLIC_API_URL}/${url}${
    urlParams.toString() ? '?' : ''
  }${urlParams.toString()}`;
  const response = await fetch(newUrl, newOptions);

  return checkStatus(response);
};

export default http;
