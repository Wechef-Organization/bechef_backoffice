import { Recipie } from "@/interfaces/orders";
import formatCurrency from "@/utils/formatCurrency";

import Image from "next/image";


const RecipieCard = ({ recipie }: { recipie: Recipie }) => {
    return (
        <div className="w-[30%] border border-border rounded-xl">
            <div className=" p-3 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <Image alt="Capa da receita" src={recipie.image} width={55} height={55} className="rounded" />
                    <div>
                        <h2 className="text-base font-medium">{recipie.description}</h2>
                        <div className="flex items-center gap-2">
                            <Image alt="Usuário" src={recipie.user_image} width={22} height={22} />
                            <span className="text-[11px]">@{recipie.nick_name}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <h3 className="text-sm font-medium">Ingredientes</h3>
                        <div className="px-2 pt-[2px] flex items-center justify-center bg-primarycolor rounded-full">
                            <p className="text-[9px] text-white">{recipie.ingredients.length}</p>
                        </div>
                    </div>
                    <div className="h-[200px] flex flex-col gap-3 overflow-y-auto">
                        {recipie.ingredients.length > 0 && recipie.ingredients.map((elm) => (
                            <div className="w-full p-2 flex gap-4 items-center border border-border rounded-xl" key={elm.id}>
                                <Image alt="Ingrediente" src={elm.image} width={55} height={55} />
                                <div className="flex flex-col gap-2">
                                    <p className="text-xs font-medium">{elm.title}</p>
                                    <div className="flex items-center gap-2">
                                        <div className="px-2 pt-[2px] flex items-center justify-center bg-primarycolor rounded-full">
                                            <p className="text-[9px] text-white">{elm.quantity}</p>
                                        </div>
                                        <span className="text-[13px] font-semibold">{formatCurrency(elm.value)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3 p-3 border-t border-x border-border rounded-xl">
                <Image alt="Ingrediente" src="images/Requests/bagMoney.svg" width={30} height={30} />
                <div>
                    <p className="text-sm">Valor total</p>
                    <p className="text-[15px] font-semibold">{formatCurrency(recipie.total)}</p>
                </div>
            </div>

        </div>
    )
}
export default RecipieCard