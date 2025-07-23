'use client'

import { LineChart, Line, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { useEffect, useState } from 'react';
import { Produto } from '@/types/produto';
import { LoadingCircleSpinner } from '@/components/animations/circle-loading';

export const SalesChart=()=>{
	const [data, setData] = useState<Produto[]|null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(()=>{
		async function getSales() {
			setLoading(true);
		    const resp = await fetch('http://minha-url-teste.com');
		    const jsonData = await resp.json();
		    setData(jsonData);
		    setLoading(false);
		}
		getSales();
	}, []);
	
	return(
		<>	
			{loading &&
				<>
					<LoadingCircleSpinner />
					<div className='text-center font-bold'>Carregando...</div>
				</>
			}

			{!loading && data &&
				<>
					<h2 className='text-lg text-center my-6 font-bold'>Faturamento Mensal(ultimos 12 meses)</h2>
					<ResponsiveContainer width='80%' height='70%' className='mx-auto max-h-80'>
						<LineChart width={800} height={500} data={data} className='mx-auto'>
							<Line type='monotone' dataKey='faturamento' stroke='#8884D8' />
							<CartesianGrid stroke='#CCC' strokeDasharray='5 5'/>
							<XAxis dataKey='mes' />
							<YAxis />
							<Tooltip />
						</LineChart>
					</ResponsiveContainer>

					<h2 className='text-lg text-center my-6 font-bold'>Quantidade de vendas</h2>
					<ResponsiveContainer width='80%' height='70%' className='mx-auto max-h-80'>
						<LineChart width={800} height={500} data={data} className='mx-auto'>
							<Line type='monotone' dataKey='quantidade_vendas' stroke='#8884D8' />
							<CartesianGrid stroke='#CCC' strokeDasharray='5 5'/>
							<XAxis dataKey='mes' />
							<YAxis />
							<Tooltip />
						</LineChart>
					</ResponsiveContainer>
				</>
			}

			{!loading && !data &&
				<div className='font-bold text-center'>Sem dados disponíveis no momento...</div>
			}
		</>
	);
}