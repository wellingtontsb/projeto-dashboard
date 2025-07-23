'use client'

import { ReactNode, useState } from 'react';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Footer } from '@/components/footer';

type Props={
	children: ReactNode;
}

export const DashboardLayout=({children}: Props)=>{
	const [showSidebar, setShowSidebar] = useState(true);

	const toogleSidebar=()=>{
		setShowSidebar(!showSidebar);
	}

	return(
		<>
	        <Header show={showSidebar} setShow={toogleSidebar}/>
	        <div className='flex'>
		        <Sidebar 
		        	show={showSidebar}
		        />
		        <div className='mt-8 flex-1'>
		        	{children}
		        </div>
	    	</div>
	    	<Footer />
        </>
	);
}