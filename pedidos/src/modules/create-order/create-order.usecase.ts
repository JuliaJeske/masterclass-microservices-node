import { prismaClient } from "../../infra/database/prismaClient";

type CreateOrderRequest = {
  customerId: string;
  items: [
    {
      productId: string;
      quantity: number;
    }
  ];
};

export class CreateOrderUseCase {
  constructor() {}

  async execute(data: CreateOrderRequest) {
    // todo: requisição para API de produtos para verificar se tem estoque do produto
    const order = await prismaClient.order.create({
      data: {
        customerId: data.customerId,
        status: "AGUARDANDO PAGAMENTO",
        OrderItems: {
          createMany: {
            data: data.items,
          },
        },
      },
    });

    return order;
  }
}
