const fetchApi = (url, method, body = null ) => {
    if(['GET', 'DELETE'].includes(method)) {
        return fetchApiWithoutBody(url, method);
    }
    else if(['POST', 'PUT'].includes(method) ) {
        return fetchApiWithBody(url, method, body);
    }

    function fetchApiWithoutBody(url, method){     
        return fetch(url, {
            method: method, 
             headers: {
              'Content-Type': 'application/json',   
               Accept : 'application/json',
               Authorization : `Bearer ${JSON.parse(localStorage.getItem('storeSaved')).user.currentUser.jwt}`
            },
         }).then( response => response.json());
    }
    function fetchApiWithBody(url, method, body) {     
        return fetch (url, {
            mode: 'cors',
            method: method, 
            headers: {
            "Content-Type": "application/json",
            Authorization : `Bearer ${JSON.parse(localStorage.getItem('storeSaved')).user.currentUser.jwt}`
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}

export default fetchApi;