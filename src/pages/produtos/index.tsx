import { DashboardLayout } from '@/layouts/dashboard-layout';
import { columns } from '@/components/products/columns';
import { DataTable } from '@/components/ui/data-table';
import { produtos } from '@/data/produtos';
import { Produto } from '@/types/produto';

export const Produtos=()=>{
	const prods: Produto[] = produtos;

	

	return(
		<DashboardLayout>	
			<div className='mx-5'>
				<div className='text-center font-bold text-xl'>Meus produtos</div>
				<DataTable
					columns={columns}
					data={prods}
					placeholder='Digite o nome do produto'
					inputField='nome'
				/>
			</div>
		</DashboardLayout>
	);
}