const url = 'https://stapi.co/api/v2/rest/spacecraft/search';
// GET requests can include querystrings
//  url + '?name=enterprise&year=2224
const dumpInfo = function(element, obj) {
    console.log(element);
    console.log(obj);
    if(element && obj) {
        let spacecrafts = obj.spacecrafts.filter(item => !!item.registry);


        let content = `<table><tr><th>Name</th><th>Registry</th></tr>`;

        let rows = spacecrafts.map(item => `<tr><td>${item.name}</td><td>${item.registry}</td></tr>`);
        
        content += rows.join('');
        content += `</table>`;
        element.innerHTML = content;
    } else {
        console.log('Missing element or object');
    }
}



const demoFetch = function(element) {
    // for more on Promises in JavaScript, see
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    
    fetch(url)
        .then(response => response.json())
        .then(data => dumpInfo(element, data))
        .catch(err => console.error(err));
}

export { demoFetch };