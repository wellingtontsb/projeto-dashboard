import { DashboardLayout } from '@/layouts/dashboard-layout';
import { SalesChart } from '@/components/sales/sales-chart';

export const Vendas=()=> {
	return(
		<DashboardLayout>
			<SalesChart />
		</DashboardLayout>
	);
}