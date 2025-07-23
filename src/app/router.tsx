import { BrowserRouter, Routes, Route } from 'react-router';
import { Pedidos } from '@/pages/pedidos';
import { Produtos } from '@/pages/produtos';
import { Vendas } from '@/pages/vendas';
import { Dashboard } from '@/pages/dashboard';
import { Clientes } from '@/pages/clientes';

export const Router=()=>{
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' index element={<Dashboard />}/>
				<Route path='/pedidos' element={<Pedidos />}/>
				<Route path='/vendas' element={<Vendas />}/>
				<Route path='/produtos' element={<Produtos />}/>
				<Route path='/clientes' element={<Clientes />}/>
			</Routes>
		</BrowserRouter>
	);
}