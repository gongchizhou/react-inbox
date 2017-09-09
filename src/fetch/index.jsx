import 'es6-promise'
import 'whatwg-fetch'

export function getMailData(){
    const res = get('/api/mail');
    return res;
}

export function getMailDetail(id){
    const res = get('/api/mail/detail',id);
    return res;
}

export function getUserData(){
    const res = get('/api/user');
    return res;
}

function get(url){
    const res = fetch(url,{
        credentials:'include',
        headers: {
            'Accept':'application/json'
        }
    });
    return res;
}