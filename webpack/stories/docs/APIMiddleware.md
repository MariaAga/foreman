# API Middleware

Instead of each component handling API calls in the same way we have the API Middleware that will handle it instead.
Current use as an action:

API_OPERATIONS is defined in 'webpack/assets/javascripts/react_app/redux/API.js'
```js
import { API_OPERATIONS } from ...;
const someAction = url => ({
  type: API_OPERATIONS.GET,
  outputType: OUTPUT_TYPE,
  url,
});
```

or

```js
dispatch({
type: API_OPERATIONS.GET,
outputType: OUTPUT_TYPE,
url,
payload: data,
});`
```

Then there will be called 2 actions: **OUTPUT_TYPE_REQUEST** and **OUTPUT_TYPE_SUCCESS/ OUTPUT_TYPE_FAILURE**:
**OUTPUT_TYPE_REQUEST** will have the payload only
**OUTPUT_TYPE_SUCCESS** will have the payload and the return data from the API call.
**OUTPUT_TYPE_FAILURE** will have the payload and the return error from the API call.

In the **payload** field you should send any headers and params for the GET request, and any other data you want for the action.

The actions types can be changed with the **actionTypes** parameter:

```js
dispatch({
type: API_OPERATIONS.GET,
outputType: OUTPUT_TYPE,
url,
actionTypes: {
    REQUEST: 'CUSTOM_REQUEST',
    SUCCESS: 'CUSTOM_SUCCESS', 
    FAILURE: 'CUSTOM_FAILURE'},
});`
```
