const host = 'http://localhost:3030/';

async function requester(method, url, body) {
    const option = {
        method,
        headers: {}
    }

    if (body) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(body);
    }

    const user = JSON.parse(sessionStorage.getItem('userData'));

    if (user) {
        option.headers['X-Authorization'] = user.accessToken;
    }

    try {
        const response = await fetch(host + url, option);
        if (!response.ok) {
           if (response.status === 404) {
            sessionStorage.clear();
           }

           const err = await response.json();
           throw new Error(err.message);
        }

        if (response.status !== 204) {
            return await response.json();
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

const get = requester.bind(null, 'GET');
const post = requester.bind(null, 'POST');
const put = requester.bind(null, 'PUT');
const del = requester.bind(null, 'DELETE');

export {
    get,
    post, 
    put, 
    del
}