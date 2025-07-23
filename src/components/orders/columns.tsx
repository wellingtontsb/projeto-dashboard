"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import { Pedido } from '@/types/pedido';

export const columns: ColumnDef<Pedido>[] = [
  {
    accessorKey: "id",
    header: "#ID",
  },

  {
    accessorKey: "data_pedido",
    header: ({column})=>{
      return(
        <Button
          variant='ghost'
          onClick={()=>column.toggleSorting(column.getIsSorted()==='asc')}
        >
          Data Pedido
          <ArrowUpDown className='ml-2 h4 w-4'/>
        </Button>
      )
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: "valor_total",
    header: ({column})=>{
      return(
        <Button
          variant='ghost'
          onClick={()=>column.toggleSorting(column.getIsSorted()==='asc')}
        >
          Valor Total
          <ArrowUpDown className='ml-2 h4 w-4'/>
        </Button>
      )
    },
  },
]