import { prismaClient } from "../../../database/prismaClient";
import { kafkaConsumer } from "../kafka.consumer";

type CustomerConsumer = {
  email: string;
  id: string;
};

export async function createCustomerConsumer() {
  console.log(`CUSTOMER CONSUMER`);
  const consumer = await kafkaConsumer("COSTUMER_CREATED");
  await consumer.run({
    eachMessage: async ({ message }) => {
      // converter a message de Buffer para String
      const messageToString = message.value!.toString();
      const customer = JSON.parse(messageToString) as CustomerConsumer;

      await prismaClient.customer.create({
        data: {
          externalId: customer.id,
          email: customer.email,
        },
      });
    },
  });
}
createCustomerConsumer();
