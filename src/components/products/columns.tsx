"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Produto } from '@/types/produto';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';

export const columns: ColumnDef<Produto>[] = [
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "quantidade_vendida",
    header: ({column})=>{
      return(
        <Button
          variant='ghost'
          onClick={()=>column.toggleSorting(column.getIsSorted()==='asc')}
        >
          Vendidos
          <ArrowUpDown className='ml-2 h4 w-4'/>
        </Button>
      )
    },
  },
  {
    accessorKey: "quantidade_estoque",
    header: ({column})=>{
      return(
        <Button
          variant='ghost'
          onClick={()=>column.toggleSorting(column.getIsSorted()==='asc')}
        >
          Estoque
          <ArrowUpDown className='ml-2 h4 w-4'/>
        </Button>
      )
    },
  },
]