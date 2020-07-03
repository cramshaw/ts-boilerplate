import grpc from 'grpc';
import { StatusClient } from './protos/hello_grpc_pb';
import { AliveReply, AliveRequest, AliveStreamRequest } from './protos/hello_pb';

function main() {
  const client = new StatusClient('localhost:50051', grpc.credentials.createInsecure());
  // UnaryRequest
  const request = new AliveRequest();
  request.setName('world');
  client.alive(request, function (err, response) {
    console.log('Greeting:', response.getMessage());
  });

  // StreamRequest
  const streamRequest = new AliveStreamRequest();
  streamRequest.setName('thing');
  streamRequest.setNumGreetings(4);
  const stream = client.aliveStream(streamRequest);
  stream.on('data', (comment: AliveReply) => {
    console.log(`${comment}`);
  });
  stream.on('end', () => console.log('over'));
  stream.on('error', (err) => console.log(err));
}

main();
