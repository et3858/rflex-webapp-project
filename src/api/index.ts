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

function _addQueryParams(params = {}) {
    return (Object.keys(params).length === 0) ? "" : ("?" + new URLSearchParams(params));
}

export function getRequest<T>(endpoint: string = "", params: object = {}): Promise<T> {
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
