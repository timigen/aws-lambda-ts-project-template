import {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
} from "aws-lambda/trigger/api-gateway-proxy";

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
  console.info(`__ START @ ${new Date().toISOString()} ____`);
  try {
    const body = JSON.parse(event.body || '');

    if(!body) return { statusCode: 500, body: "ERROR" };
    
    return { statusCode: 200, body: JSON.stringify(event) };
  } catch(err){
    console.error(err);
    return { statusCode: 500, body: "ERROR" };
  }
   finally {
    console.info(`__END ${new Date().toISOString()}___`);
   }
};
