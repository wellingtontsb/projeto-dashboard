import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Produto } from '@/types/produto';
import { produtos } from '@/data/produtos';
import { getTopProdutos } from '@/lib/utils';

export const TopProducts=()=>{
	const prod:Produto[] = getTopProdutos(produtos);
	return(
		<Table className='border rounded-md w-3/4 my-5 mx-auto'>
			<TableHeader>
				<TableRow>
					<TableHead>Produto</TableHead>
					<TableHead>Vendidos</TableHead>
					<TableHead>Estoque</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{prod.map(item=>(
					<TableRow key={item.id}>
						<TableCell>{item.nome}</TableCell>
						<TableCell>{item.quantidade_vendida}</TableCell>
						<TableCell>{item.quantidade_estoque}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}