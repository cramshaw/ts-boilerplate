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

  async aliveStream(call: grpc.ServerWritableStream<messages.AliveStreamRequest>): Promise<void> {
    console.log(`${new Date().toISOString()}    getChat`);
    const makeReturn = () => {
      for (const comment of ['comment', 'comment2']) {
        console.log(comment);
        const reply = new messages.AliveReply();
        reply.setMessage(comment);
        call.write(reply);
      }
    };
    const started = setInterval(makeReturn, 500);
    setTimeout(() => {
      clearInterval(started);
      call.end();
    }, 2000);
  }
}
/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  const server = new grpc.Server();
  server.addService<services.IStatusServer>(services.StatusService, new StatusServer());
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
