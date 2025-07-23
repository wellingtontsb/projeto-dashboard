import { DashboardLayout } from '@/layouts/dashboard-layout';
import { columns } from '@/components/clients/columns';
import { DataTable } from '@/components/ui/data-table';
import { Cliente } from '@/types/cliente';
import { clientes } from '@/data/clientes';


export const Clientes=()=>{
	const clt:Cliente[] = clientes;
	return(
		<DashboardLayout>
			<div className='mx-5'>
				<div className='text-center font-bold text-xl'>Nossos clientes</div>
				<DataTable
					columns={columns} 
					data={clt}
					placeholder='Digite o nome do cliente'
					inputField='nome'
				/>
			</div>
		</DashboardLayout>
	);
}