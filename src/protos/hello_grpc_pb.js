// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var hello_pb = require('./hello_pb.js');

function serialize_epi2me_status_AliveReply(arg) {
  if (!(arg instanceof hello_pb.AliveReply)) {
    throw new Error('Expected argument of type epi2me.status.AliveReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_epi2me_status_AliveReply(buffer_arg) {
  return hello_pb.AliveReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_epi2me_status_AliveRequest(arg) {
  if (!(arg instanceof hello_pb.AliveRequest)) {
    throw new Error('Expected argument of type epi2me.status.AliveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_epi2me_status_AliveRequest(buffer_arg) {
  return hello_pb.AliveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_epi2me_status_AliveStreamRequest(arg) {
  if (!(arg instanceof hello_pb.AliveStreamRequest)) {
    throw new Error('Expected argument of type epi2me.status.AliveStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_epi2me_status_AliveStreamRequest(buffer_arg) {
  return hello_pb.AliveStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var StatusService = exports.StatusService = {
  // Sends a greeting
alive: {
    path: '/epi2me.status.Status/Alive',
    requestStream: false,
    responseStream: false,
    requestType: hello_pb.AliveRequest,
    responseType: hello_pb.AliveReply,
    requestSerialize: serialize_epi2me_status_AliveRequest,
    requestDeserialize: deserialize_epi2me_status_AliveRequest,
    responseSerialize: serialize_epi2me_status_AliveReply,
    responseDeserialize: deserialize_epi2me_status_AliveReply,
  },
  // Sends multiple greetings
aliveStream: {
    path: '/epi2me.status.Status/AliveStream',
    requestStream: false,
    responseStream: true,
    requestType: hello_pb.AliveStreamRequest,
    responseType: hello_pb.AliveReply,
    requestSerialize: serialize_epi2me_status_AliveStreamRequest,
    requestDeserialize: deserialize_epi2me_status_AliveStreamRequest,
    responseSerialize: serialize_epi2me_status_AliveReply,
    responseDeserialize: deserialize_epi2me_status_AliveReply,
  },
};

exports.StatusClient = grpc.makeGenericClientConstructor(StatusService);
