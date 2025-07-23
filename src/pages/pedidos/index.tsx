import { DashboardLayout } from '@/layouts/dashboard-layout';
import { columns } from '@/components/orders/columns';
import { DataTable } from '@/components/ui/data-table';
import { Pedido } from '@/types/pedido';
import { pedidos } from '@/data/pedidos';

export const Pedidos=()=>{
	const ped:Pedido[] = pedidos;
	return(
		<DashboardLayout>	
			<div className='mx-5'>
				<div className='text-center font-bold text-xl'>Meus produtos</div>
				<DataTable
					columns={columns}
					data={ped}
					placeholder='Digite o status do pedido'
					inputField='status'
				/>
			</div>
		</DashboardLayout>
	);
}