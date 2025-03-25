import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda/trigger/api-gateway-proxy";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body || '');

    if(!body) return { statusCode: 500, body: "ERROR" };
    
    return { statusCode: 200, body: JSON.stringify(event) };
  } catch(err){
    console.error(err);
    return { statusCode: 500, body: "ERROR" };
  }
};
