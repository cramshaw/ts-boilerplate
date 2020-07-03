// package: epi2me.status
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as hello_pb from "./hello_pb";

interface IStatusService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    alive: IStatusService_IAlive;
    aliveStream: IStatusService_IAliveStream;
}

interface IStatusService_IAlive extends grpc.MethodDefinition<hello_pb.AliveRequest, hello_pb.AliveReply> {
    path: string; // "/epi2me.status.Status/Alive"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<hello_pb.AliveRequest>;
    requestDeserialize: grpc.deserialize<hello_pb.AliveRequest>;
    responseSerialize: grpc.serialize<hello_pb.AliveReply>;
    responseDeserialize: grpc.deserialize<hello_pb.AliveReply>;
}
interface IStatusService_IAliveStream extends grpc.MethodDefinition<hello_pb.AliveStreamRequest, hello_pb.AliveReply> {
    path: string; // "/epi2me.status.Status/AliveStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<hello_pb.AliveStreamRequest>;
    requestDeserialize: grpc.deserialize<hello_pb.AliveStreamRequest>;
    responseSerialize: grpc.serialize<hello_pb.AliveReply>;
    responseDeserialize: grpc.deserialize<hello_pb.AliveReply>;
}

export const StatusService: IStatusService;

export interface IStatusServer {
    alive: grpc.handleUnaryCall<hello_pb.AliveRequest, hello_pb.AliveReply>;
    aliveStream: grpc.handleServerStreamingCall<hello_pb.AliveStreamRequest, hello_pb.AliveReply>;
}

export interface IStatusClient {
    alive(request: hello_pb.AliveRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.AliveReply) => void): grpc.ClientUnaryCall;
    alive(request: hello_pb.AliveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.AliveReply) => void): grpc.ClientUnaryCall;
    alive(request: hello_pb.AliveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.AliveReply) => void): grpc.ClientUnaryCall;
    aliveStream(request: hello_pb.AliveStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.AliveReply>;
    aliveStream(request: hello_pb.AliveStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.AliveReply>;
}

export class StatusClient extends grpc.Client implements IStatusClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public alive(request: hello_pb.AliveRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.AliveReply) => void): grpc.ClientUnaryCall;
    public alive(request: hello_pb.AliveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.AliveReply) => void): grpc.ClientUnaryCall;
    public alive(request: hello_pb.AliveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.AliveReply) => void): grpc.ClientUnaryCall;
    public aliveStream(request: hello_pb.AliveStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.AliveReply>;
    public aliveStream(request: hello_pb.AliveStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.AliveReply>;
}
