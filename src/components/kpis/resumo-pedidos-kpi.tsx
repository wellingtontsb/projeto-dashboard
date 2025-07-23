import { Card, CardContent } from "@/components/ui/card";
import { Package, CheckCircle, Clock, XCircle } from "lucide-react";
import { kpis } from '@/data/kpiData';

export const ResumoPedidosKPI=()=> {
  const myKpi = kpis;

  return (
    <Card className="p-4 shadow-md rounded-2xl">
      <CardContent>
        <h2 className="text-md font-semibold text-gray-700 mb-2 md:text-xl">Resumo de Pedidos - Junho 2025</h2>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="text-blue-500" size={20} />
              <span>Total de Pedidos</span>
            </div>
            <span className="font-bold text-blue-600">{myKpi.resumoPedidos.total}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} />
              <span>Entregues</span>
            </div>
            <span className="font-bold text-green-600">{myKpi.resumoPedidos.entregues}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="text-yellow-500" size={20} />
              <span>Pendentes</span>
            </div>
            <span className="font-bold text-yellow-600">{myKpi.resumoPedidos.pendentes}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <XCircle className="text-red-500" size={20} />
              <span>Cancelados</span>
            </div>
            <span className="font-bold text-red-600">{myKpi.resumoPedidos.cancelados}</span>
          </div>
        </div>

        <div className="mt-3 text-sm text-gray-500">
          <span>📈 Crescimento de +{myKpi.resumoPedidos.crescimento}% em relação a Maio</span>
        </div>
      </CardContent>
    </Card>
  );
}