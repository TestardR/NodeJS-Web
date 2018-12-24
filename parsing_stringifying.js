const url = require('url');

url.parse('https://www.pluralsight.com/search?q=buna');
url.parse('https://www.pluralsight.com/search?q=buna', true);
url.parse('https://www.pluralsight.com/search?q=buna', true).query.query

{
    protocol: 'https',
    host: 'www.pluralsight',
    search: '?q=bunq',
    pathname: '/search'
}
url.format({
    protocol: 'https',
    host: 'www.pluralsight',
    search: '?q=bunq',
    pathname: '/search'
})


{
    name: 'Samer Buna',
    website: 'jsComplete.com/samer-buna'
}
querystring.stringify({
    name: 'Samer Buna',
    website: 'jsComplete.com/samer-buna'
})
// 'name=Samer%20Buna&website=jsComplete.com%2Fsamer-buna'

querystring.parse({
    'name=Samer%20Buna&website=jsComplete.com%2Fsamer-buna'
})