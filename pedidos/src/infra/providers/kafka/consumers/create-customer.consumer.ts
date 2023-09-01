import { kafkaConsumer } from "../kafka.consumer";

export async function createCustomerConsumer() {
  const consumer = await kafkaConsumer("COSTUMER_CREATED");
  await consumer.run({
    eachMessage: async ({ message }) => {
      // converter a message de Buffer para String
      const messageToString = message.value?.toString();
    },
  });
}
createCustomerConsumer();
