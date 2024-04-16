# Fetch API

we use the built in javascript function *fetch* to send request to an API

- fetch is an asynchronous operation

```
fetch ()
```

- we pass a url into a function so the function knows where to get data from
- any API can be used in they are public use

```
fetch ('someAPI.com')

const response = fetch ('someAPI.com')
```

- this will send us a response back to us

  ```
  {Response} = fetch({Request})
  ```

- fetch is taking a request object and returns a response object
  - *technically* fetch would return a response promise that will get resolved eventually after getting information from API

```
const request = new Request('someAPI.com')

//const response = fetch(request)

response//{promise}
```

- JavaScript is creating a request obj in the background and sets string into the url
- JavaScript needs to know what is the method of the request
  - wether our request is a GET or POST
  - if no method is specified javascript will set default of GET
    - if the desire *is* a fetch request you can pass in the string
- **Response** is a special type of object with its own prototype

- the method JSON is an async operation
  - this needs to be awaited

## API Token

Apis may require tokens, multiple reason why an API could be dependent on the need for tokens:

- tokens may be needed to track/prevent how many times an API will allow themselves to be called for data
- tokens act as developer "signature" for an API
- Get Request Parameters
  - specific request that are being asked for
  - you can URL parameters
- Get Request Header(s)
  - need to create a request object
    - pass in headers as an object
      - will need to pass in authorization

        ```
            async function getData() {
                const request = new Request(url,{
                    headers: {
                        'Authorization': 'Bearer XvalueX'
                    }
                })
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            }

            getData()

## Error Handling

error 401 is an authentication error

- *Invalid Access Token*
  - result of successful fetch call
    - the promise was resolved
      - just getting to the API is considered a success
      - error(resulting in the .catch block) will display when there is an issue reaching API
        - failed to reach fetch operation

## Fetch history

fetch request have been around since 2015 getting native support in 2018
    - no need to be installed
fetch is not only native way to pull requests from API

- XHR = XmlHttpRequest
  - still available as a filter in DevTools in network tab
  - you can see when a site makes a request to a server
- HTTP Request
  - when there is a request from a client to a server
- Fetch is a good way to take car of server communication natively
    - removes callbacks, creating cleaner code with promises