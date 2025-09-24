// Server-Side JavaScript

// JavaScript was originally created to run in the browser (client-side) for tasks like form validation, animations, and handling events.

// With platforms like Node.js, JavaScript can also run on the server-side.

// On the server, it is used for:

// Handling HTTP requests & responses

// Database operations

// File handling

// Executing business logic before sending results to the client

/*----------------------------------------------------------RESTful Architecture----------------------------------------------------------*/

// REST (Representational State Transfer) is a style for designing web services.

// It is stateless, uses a client-server model, and relies on standard HTTP methods to work with resources.

/*---------------------------------------------------HTTP (Hypertext Transfer Protocol)-------------------------------------------------------*/

// The protocol used by browsers and servers to communicate and transfer data for web pages.

// Common Methods:

// GET → Retrieve data only.

// POST → Send data to create/update a resource.

// PUT → Replace an existing resource or create if missing.

// PATCH → Apply partial updates.

// DELETE → Remove a resource.

/*----------------------------------------------HTTP Status Codes-----------------------------------------------------------------------------------*/


// These codes show whether a request succeeded or failed. They are grouped into categories:

// Informational (100–199) → Request received, still processing.

// Example: 100 Continue, 101 Switching Protocols.

// Successful (200–299) → Request completed successfully.

// Example: 200 OK, 201 Created, 204 No Content.

// Redirection (300–399) → Client must take further action.

// Example: 301 Moved Permanently, 302 Found, 304 Not Modified.

// Client Errors (400–499) → Issues with the client’s request.

// Example: 400 Bad Request, 401 Unauthorized, 404 Not Found, 429 Too Many Requests.

// Server Errors (500–599) → Issues on the server side.

// Example: 500 Internal Server Error, 503 Service Unavailable, 504 Gateway Timeout.