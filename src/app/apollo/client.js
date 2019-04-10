import createClient from "/lib/apollo/client";

import introspectionURL from "./schema/introspectionRequest.macro";
import introspectionQueryResultData from "./schema/apolloIntrospection.macro";

export default () => {
  const client = createClient({
    introspectionURL,
    introspectionQueryResultData,
  });

  return client;
};
