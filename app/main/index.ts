const main = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: 'world 123'
    }),
  };
}

export default main