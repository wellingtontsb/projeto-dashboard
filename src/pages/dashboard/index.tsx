import { DashboardLayout } from '@/layouts/dashboard-layout';
import { TicketMedioKPI } from '@/components/kpis/ticket-medio-kpi';
import { TotalPedidosKPI } from '@/components/kpis/total-pedidos-kpi';
import { ResumoPedidosKPI } from '@/components/kpis/resumo-pedidos-kpi';
import { SalesChart } from '@/components/sales/sales-chart';
import { RecentOrders } from '@/components/orders/recent-orders';
import { columns } from '@/components/products/columns';
import { produtos } from '@/data/produtos';
import { Produto } from '@/types/produto';
import { TopProducts } from '@/components/products/top-products';

export const Dashboard=()=>{
    const prods: Produto[] = produtos;
    return(
        <DashboardLayout>
            <div className='grid grid-cols-1 gap-5 mx-5 mb-4 md:grid-cols-2 lg:grid-cols-3'>
                <TicketMedioKPI />
                <TotalPedidosKPI />
                <ResumoPedidosKPI />
            </div>
            <div className='text-center font-bold text-lg my-3'>Informações de vendas</div>
            <SalesChart />
            <div className='text-center font-bold text-lg my-3'>Ultimos Pedidos</div>
            <RecentOrders />
            <div className='text-center font-bold text-lg my-3'>Top Produtos Vendidos</div>
            <TopProducts />
        </DashboardLayout>
    );
}