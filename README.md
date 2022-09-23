# All About Node.js

Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine

- Event-Driven Programming

## Built-in Modules

+ `os`
+ `path`
+ `fs`
+ `http`
+ `crypto`
+ `util`
+ `events`

## http

### `response`

`response.end()`: This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), **MUST** be called on each response. (node 14) [^1]

## events

- Listener (`on`) should always be in front of emitter

## express

`app.all()`: use all request (get, post, delete, put) => handle all http verbs

### Params

```javascript
app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params
})
```

### Query String

```javascript
app.get('/api/products/:productID', (req, res) => {
  const { search, limit } = req.query
})
```
### Middleware

> req => middleware => res

- `next()`: the next piece of middleware inline is going to be run
- able to access the request and response

```javascript
// manually write a middleware
function logger(req, res, next) {
  console.log('log');
  next();
}
// add to global level
// should always be as early as possible to declare
app.use(logger);
```
  
### API vs SSR

| API | SSR |
| --- | --- |
| send data |  send template |
| `res.json()` |  `res.render()` |

## Event Loop

It allows Node.js to perform non-blocking I/O operations.

## References

1. [Node.js and Express.js - Full Course (2021.4)](https://youtu.be/Oe421EPjeBE)
2. https://github.com/john-smilga/node-express-course
3. [事件驅動伺服器：原理和實例](https://hackmd.io/@sysprog/event-driven-server)
4. [Node.js - Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#the-node-js-event-loop-timers-and-process-nexttick)
5. [Bert Belder; Morning Keynote- Everything You Need to Know About Node.js Event Loop (2016.9)](https://youtu.be/PNa9OMajw9w)
6. [The Node.js Event Loop](https://nodejs.dev/learn/the-nodejs-event-loop)
7. [Express 4.x API](https://expressjs.com/en/api.html)
8. [Learn Express Middleware In 14 Minutes (2020.03)](https://youtu.be/lY6icfhap2o)

[^1]: https://nodejs.org/docs/latest-v14.x/api/http.html#http_response_end_data_encoding_callback
