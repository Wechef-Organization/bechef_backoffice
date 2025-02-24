"use client"

import Image from "next/image";
import { useState } from "react";

import { Order } from "@/interfaces/orders";
import formatCurrency from "@/utils/formatCurrency";
import formatDate from "@/utils/formatDate";
import RecipieCard from "./RecipieCard";

const OrderCard = ({ order }: { order: Order }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-full border border-border rounded-xl p-4">
            <div className="w-full h-20 flex items-center justify-between">
                <div className="w-[50%] flex items-center justify-between">
                    {
                        isOpen ? (
                            <Image alt="Seta para cima" src={"/images/Requests/arrowUp.svg"} width={22} height={22} className="cursor-pointer" onClick={() => { setIsOpen(false) }} />
                        ) :
                            <Image alt="Seta para baixo" src={"/images/Requests/arrowDown.svg"} width={22} height={22} className="cursor-pointer" onClick={() => { setIsOpen(true) }} />
                    }
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">#{order.id}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">Pedido</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">{formatDate(order.date)}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">Data</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2">
                            <Image alt="Imagem do cliente" src={order.client.image} width={20} height={20} />
                            <p className="text-[13px] font-medium text-center">{order.client.name}</p>
                        </div>
                        <span className="text-[10px] font-medium text-grey7 text-center">Cliente</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">{order.address}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">Endereço de entrega</span>
                    </div>
                </div>

                <div className="min-w-[1px] min-h-[60%] bg-border mx-3" />

                <div className="flex flex-col items-center">
                    <p className="text-[13px] font-medium text-center">{order.items_number}</p>
                    <span className="text-[10px] font-medium text-grey7 text-center">N° itens</span>
                </div>  <div className="flex flex-col items-center">
                    <p className="text-[13px] font-medium text-center">{formatCurrency(order.value)}</p>
                    <span className="text-[10px] font-medium text-grey7 text-center">Valor dos produtos</span>
                </div>  <div className="flex flex-col items-center">
                    <p className="text-[13px] font-medium text-center">{formatCurrency(order.freight)}</p>
                    <span className="text-[10px] font-medium text-grey7 text-center">Frete</span>
                </div>  <div className="flex flex-col items-center">
                    <p className="text-[13px] font-medium text-center">{formatCurrency(order.value + order.freight)}</p>
                    <span className="text-[10px] font-medium text-grey7 text-center">Valor total</span>
                </div>  <div className="flex flex-col items-center">
                    <div className={`px-3 ${order.status == "Entrege" ? "bg-green5" : "bg-secondarycolor"} rounded-full`}>

                        <p className={`text-[10px] font-medium text-center ${order.status == "Entrege" ? "text-green0" : "text-primarycolor"}`}>{order.status}</p>
                    </div>
                    <span className="text-[10px] font-medium text-grey7 text-center">Status</span>
                </div>
            </div>
            {isOpen && <>
                <div className="min-w-full min-h-[1px] bg-border my-5" />
                <div className="w-full h-[400px] flex flex-wrap gap-5 overflow-y-auto">
                    {order.recipies.length > 0 && order.recipies.map((elm, i) => (
                        <>
                            <RecipieCard recipie={elm} key={elm.id} />
                            {i != order.recipies.length - 1 && (i + 1) % 3 !== 0 && <div className="min-w-[1px] min-h-[400px] bg-border " />}
                        </>
                    ))}

                </div>
            </>}
        </div>)
}

export default OrderCard