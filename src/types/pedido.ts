export type Pedido={
	id: number;
	status: string;
	data_pedido: date;
	cliente: string;
	valor_total: number;
	forma_pagamento: string;
}