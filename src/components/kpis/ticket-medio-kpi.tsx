'use client'

import { Card, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { useEffect, useState } from 'react';
import { getTicketMedio } from '@/lib/utils';

export const TicketMedioKPI= ()=> {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(()=>{
        async function getSales() {
            setloading(true);
            const resp = await fetch('http://minha-url-teste.com');
            const jsonData = await resp.json();
            setData(jsonData);
            setloading(false);
        }
        getSales();
    }, []);

  return (
    <Card className="p-4 shadow-md rounded-2xl">
        <CardContent>
            <div className="flex items-center justify-between">
                <h2 className="text-md font-semibold text-gray-700 md:text-lg">Ticket Médio(ultimos 12 meses)</h2>
                <DollarSign className="text-orange-500" size={24} />
            </div>
            <p className="text-xl font-bold text-orange-600 md:text-3xl">
                {loading &&
                    <span className='text-md'>Carregando...</span>
                }

                {!loading && data.length < 1 &&
                    <span className='text-md'>Sem dados disponíveis</span>
                }

                {!loading && data.length >= 1 &&
                    <span>R$ {getTicketMedio(data)}</span>
                }
            </p>
            <span className="text-sm text-gray-500">Meta: R$ 250,00</span>
        </CardContent>
    </Card>
  );
}