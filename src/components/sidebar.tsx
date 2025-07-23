'use client'

import { Link } from 'react-router';
import { ShoppingCart, Package, ChartColumnIncreasing, Users2 } from 'lucide-react';

type Props={
	show: boolean;
}

export const Sidebar=({show}: Props)=>{
	return(
		<div className='relative min-h-screen bg-[#007a95]'>
			{show &&
				<aside className='w-2xs absolute z-10 bg-[#007a95] min-h-screen md:w-50 lg:static'>
					<nav>
						<ul className='mx-20 pt-5 md:ml-5'>
							<li className='my-2 text-lg hover:text-white md:font-bold'>
								<Link to='/pedidos' className='flex items-center'>
									<ShoppingCart className='inline pr-2 size-6 md:size-8'/>
									<span>Pedidos</span>
								</Link>
							</li>
							<li className='my-2 text-lg hover:text-white md:font-bold'>
								<Link to='/produtos' className='flex items-center'>
									<Package className='inline pr-2 size-6 md:size-8'/>
									<span>Produtos</span>
								</Link>
							</li>
							<li className='my-2 text-lg hover:text-white md:font-bold'>
								<Link to='/vendas' className='flex items-center'>
									<ChartColumnIncreasing className='inline pr-2 size-6 md:size-8'/>
									<span>Vendas</span>
								</Link>
							</li>
							<li className='my-2 text-lg hover:text-white md:font-bold'>
								<Link to='/clientes' className='flex items-center'>
									<Users2 className='inline pr-2 size-6 md:size-8'/>
									<span>Clientes</span>
								</Link>
							</li>
						</ul>
					</nav>
				</aside>
			}
		</div>
	);
}