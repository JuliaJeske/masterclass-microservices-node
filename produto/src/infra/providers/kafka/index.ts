import { Kafka } from "kafkajs";

const kafka = new Kafka({
  brokers: ["powerful-dove-12579-us1-kafka.upstash.io:9092"],
  sasl: {
    mechanism: "scram-sha-256",
    username: "cG93ZXJmdWwtZG92ZS0xMjU3OSSj1R7w7Z3JRXmBdoXB8iMBhYB0Z2-_VHMDmlo",
    password: "OTZkMjY3ZDktOWRhNC00YmM0LTlkZmMtNzg5ZTM4OTRhY2I1",
  },
  ssl: true,
});

export { kafka };
