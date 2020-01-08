export const success = body => buildResponse(200, body);


export const failure = body => buildResponse(500, body);

const buildResponse = (statusCode, body) =>
  ({
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  });
