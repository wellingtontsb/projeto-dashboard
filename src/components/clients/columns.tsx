"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import { Cliente } from '@/types/cliente';

export const columns: ColumnDef<Cliente>[] = [
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: 'telefone',
    header: 'Telefone',
  },
  {
    accessorKey: "total_pedidos",
    header: ({column})=>{
      return(
        <Button
          variant='ghost'
          onClick={()=>column.toggleSorting(column.getIsSorted()==='asc')}
        >
          Total Pedidos
          <ArrowUpDown className='ml-2 h4 w-4'/>
        </Button>
      )
    },
  },
]