import grpc from 'grpc';
import services from './protos/hello_grpc_pb';
import messages from './protos/hello_pb';

/**
 * Implements the SayHello RPC method.
 */
class StatusServer implements services.IStatusServer {
  counter = 0;

  alive(call: grpc.ServerUnaryCall<messages.AliveRequest>, callback: grpc.sendUnaryData<messages.AliveReply>) {
    const reply = new messages.AliveReply();
    console.log(call.request.getName());
    this.counter++;
    console.log(this.counter);
    reply.setMessage('Hello ' + call.request.getName());
    callback(null, reply);
  }
}
/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  const server = new grpc.Server();
  // server.addService(services.StatusService, { Alive: alive });
  server.addService<services.IStatusServer>(services.StatusService, new StatusServer());
  // server.addService<ISongsServer>(SongsService, new SongsServer());
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
