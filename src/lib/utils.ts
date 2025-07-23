import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Produto } from '@/types/produto';
import { Pedido } from '@/types/pedido';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getTicketMedio(data){
    let totalValor = 0;
    let totalProdutos = 0;
    for(let i of data){
        totalValor += i.faturamento;
        totalProdutos += i.quantidade_vendas;
    }
    return (totalValor/totalProdutos).toFixed(2);
}

export function getTopProdutos(produtos:Produto[]) {
    let topProdutos = [];
    let maisVendidos = produtos;
    maisVendidos.sort((a,b)=> b.quantidade_vendida - a.quantidade_vendida );

    for(let i=0; i<8; i++){
        topProdutos.push(maisVendidos[i]);
    }
    return topProdutos;
}

export function getLastPedidos(peds:Pedido[]){
    let lastPedidos = [];
    let newPedidos = peds;
    
    for(let i=0;i<peds.length;i++){
        newPedidos[i].data_pedido = new Date(newPedidos[i].data_pedido);
        
    }
    newPedidos.sort((a,b)=> b.data_pedido - a.data_pedido);

    for(let i=0;i<peds.length;i++){
        newPedidos[i].data_pedido = newPedidos[i].data_pedido.toLocaleDateString();
    }

    for(let i=0;i<8;i++){
        lastPedidos.push(newPedidos[i]);
    }
    return lastPedidos;
}