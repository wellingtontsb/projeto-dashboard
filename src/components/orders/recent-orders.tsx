import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { pedidos } from '@/data/pedidos';
import { Pedido } from '@/types/pedido';
import { getLastPedidos } from '@/lib/utils';

export const RecentOrders=()=>{
	const peds:Pedido[] = pedidos;
	
	return(
		<Table className='border rounded-md w-3/4 my-5 mx-auto'>
			<TableHeader>
				<TableRow>
					<TableHead>#ID Pedido</TableHead>
					<TableHead>Data do Pedido</TableHead>
					<TableHead>Status do Pedido</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{getLastPedidos(peds).map(item=>(
					<TableRow key={item.id}>
						<TableCell>{item.id}</TableCell>
						<TableCell>{item.data_pedido}</TableCell>
						{item.status==='Entregue' &&
							<TableCell>
								<span className='bg-[green] p-1 px-2 rounded-sm text-white'>{item.status}</span>
							</TableCell>
						}
						{item.status==='Enviado' &&
							<TableCell>
								<span className='bg-[blue] p-1 px-2 rounded-sm text-white'>{item.status}</span>
							</TableCell>
						}
						{item.status==='Cancelado' &&
							<TableCell>
								<span className='bg-[red] p-1 px-2 rounded-sm text-white'>{item.status}</span>
							</TableCell>
						}
						{item.status==='Pendente' &&
							<TableCell>
								<span className='bg-[yellow] p-1 px-2 rounded-sm'>{item.status}</span>
							</TableCell>
						}
						{item.status==='Processando' &&
							<TableCell>
								<span className='bg-[lightblue] py-1 px-2 rounded-sm'>{item.status}</span>
							</TableCell>
						}
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}