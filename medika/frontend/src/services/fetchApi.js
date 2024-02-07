const fetchApi = (url, method, test = null ) => {
    if(['GET', 'DELETE'].includes(method)) {
        return fetchApiWithoutBody(url, method);
    }
    else if(['POST', 'PUT'].includes(method) ) {
        return fetchApiWithBody(url, method, test);
    }

    function fetchApiWithoutBody(url, method){     
        return fetch(url, {
            method: method, 
             headers: {
              'Content-Type': 'application/json',   
               Accept : 'application/json',
               Authorization : `Bearer ${localStorage.getItem('storeSaved').jwt}`
            },
         }).then( response => response.json());
    }
    function fetchApiWithBody(url, method, test) {     
        return fetch (url, {
            method: method, 
             headers: {
              'Content-Type': 'application/json',   
               Accept : 'application/json',
               Authorization : `Bearer ${localStorage.getItem('storeSaved').jwt}`

            },
             body: JSON.stringify(test),
 
        }).then(response => response.json());
    }
}

export default fetchApi;