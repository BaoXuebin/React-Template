import _fetch from 'isomorphic-fetch';

export const href = (url) => {
    if (window) {
        window.location.href = url;
    }
};

export const reload = (url) => {
    if (window) {
        window.location.reload();
    }
};

export const fetch = (url, headers) => {
    let _headers = headers;
    // 默认 header
    const _defaultHeaders = {
        credentials: 'include' // 添加 cookie
    };
    _headers = Object.assign({}, _defaultHeaders, headers);
    return new Promise((resolve, reject) => {
        _fetch(url, _headers)
            .then(res => res.json())
            .then(result => {
                const { code, error } = result;
                if (code) {
                    switch (code) {
                        case 401:
                            href('/login');
                            reject(error);
                            break;
                        default:
                            break;
                    }    
                }
                resolve(result);
            })
            .catch((e) => { reject(e); });
    });
};