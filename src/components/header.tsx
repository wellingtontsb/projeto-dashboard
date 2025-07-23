import { Link } from 'react-router';
import { Menu } from 'lucide-react';
import { ModeToggle } from '@/components/animations/dark-toggle';

type Props={
	show: boolean;
	setShow: ()=>void;
}

export const Header=({show, setShow}: Props)=>{
	return(
		<header className='px-3 bg-[#0f8ca8] relative'>
			<div className='text-right md:absolute md:right-0'>
				<ModeToggle />
			</div>
			<div className='flex justify-between mx-auto items-center max-w-6xl py-3 container'>
				<Menu
					className='block lg:hidden'
					onClick={setShow}
				></Menu>
				<div className='text-2xl font-bold'><Link to='/'>Dashboard</Link></div>
				<div className='flex justify-between items-center gap-5'>
					<div className='size-12 bg-[green] rounded-full md:size-16'></div>
					<div className='hidden md:block'>Nome do usuário</div>
				</div>
			</div>
		</header>
	);
}