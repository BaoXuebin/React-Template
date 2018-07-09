const error = '浏览器不支持 localStorage';

export const put = (k, v) => {
    if (localStorage) {
        localStorage.setItem(k, v);
    } else {
        console.error(error);
    }
};

export const get = k => {
    if (localStorage) {
        return JSON.parse(localStorage.getItem(k));
    }
    console.error(error);
    return null;
};

export const remove = k => {
    if (localStorage) {
        localStorage.removeItem(k);
    } else {
        console.error(error);
    }
};