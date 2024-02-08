const URL_SOURCE = import.meta.env.VITE_API_URL;

const HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
};

const OPTIONS: RequestInit = {
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: HEADERS,
    redirect: "follow",
    referrerPolicy: "no-referrer",
};

interface IGetParams {
    [key: string]: any
}

function _addQueryParams(params: IGetParams = {}) {
    return (Object.keys(params).length === 0) ? "" : ("?" + new URLSearchParams(params));
}

export function getRequest(endpoint: string = "", params: IGetParams = {}): Promise<any> {
    const path = URL_SOURCE + endpoint + _addQueryParams(params);

    return new Promise((resolve, reject) => {
        fetch(path, OPTIONS)
            .then(response => response.json())
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}
