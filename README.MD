/***
 * 1. Create a post api on the server side
 * 2. client side send data via post
 * 3. set fetch method inside the fetch options ( second parameter)
 * 4. options will have three things:
 *              * method
 *              * headers
 *              * body
 * 5. options will have headers : 'Content-Type': 'application/json'
 * 6. don't forget to send data by JSON stringify in the body : JSON.stringify(user)
 * 7. on the server side : don't forget to use express.json() middleware
 * ***/