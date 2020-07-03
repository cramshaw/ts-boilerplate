import grpc from 'grpc';
import services from './protos/hello_grpc_pb';
import messages from './protos/hello_pb';

function main() {
  const client = new services.StatusClient('localhost:50051', grpc.credentials.createInsecure());
  const request = new messages.AliveRequest();
  let user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'world';
  }
  request.setName(user);
  client.alive(request, function (err, response) {
    console.log('Greeting:', response.getMessage());
  });
}

main();
