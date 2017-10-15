import 'es6-promise'
import 'whatwg-fetch'

export function getMailData(){
    //const res = get('/api/mail');
    const res = get('/json/mail.json');
    return res;
}

export function getUserData(){
    //const res = get('/api/user');
    const res = get('/json/user.json');
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