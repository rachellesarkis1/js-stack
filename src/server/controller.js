// @flow

// $FlowIgnore
export const homePage = () => null;

// $FlowIgnore
export const helloPage = () => ({
  hello: { message: "Server-side preloaded message" },
});

// $FlowIgnore
export const helloAsyncPage = () => ({
  hello: { messageAsync: "Server-side preloaded message for async page" },
});

// $FlowIgnore
export const helloEndpoint = (num: number) => ({
  serverMessage: `Hello from the server! (received ${num})`,
});
