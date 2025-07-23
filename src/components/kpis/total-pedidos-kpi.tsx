import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { kpis } from '@/data/kpiData';

export const TotalPedidosKPI=()=> {
  const myKpi = kpis;

  return (
    <Card className="p-4 shadow-md rounded-2xl">
        <CardContent>
        <div className="flex items-center justify-between">
            <h2 className="text-md font-semibold text-gray-700 md:text-xl">Total de Pedidos</h2>
            <ShoppingCart className="text-blue-500" size={24} />
        </div>
        <p className="text-xl font-bold text-blue-600 md:text-3xl">{myKpi.totalPedidos.total}</p>
        <span className="text-sm text-gray-500">+{myKpi.totalPedidos.crescimento}% em relação a Maio</span>
        </CardContent>
    </Card>
  );
}