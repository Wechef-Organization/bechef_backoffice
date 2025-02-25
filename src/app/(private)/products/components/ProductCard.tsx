
import { Product } from "@/interfaces/products"
import formatCurrency from "@/utils/formatCurrency"
import Image from "next/image"

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="w-full border border-border rounded-xl p-4">
            <div className="w-full h-20 flex items-center justify-between">
                <div className="w-[36%] flex items-center gap-4">
                    <div className="w-14 h-16 border border-border rounded-xl flex items-center justify-center">
                        <Image alt="Produto" src={product.image} width={40} height={55} />
                    </div>
                    <p className="text-[14px] font-semibold text-center">{product.name}</p>
                </div>
                <div className="min-w-[1px] min-h-[60%] bg-border mx-3" />
                <div className="w-[45%] flex items-center justify-between">
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">{product.category}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">Categoria</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">{product.mark}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">Marca</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">{product.stock}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">Estoque</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">{formatCurrency(product.value)}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">Preço</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">{formatCurrency(product.profit)}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">Lucro por venda</span>
                    </div>
                </div>
                <div className="min-w-[1px] min-h-[60%] bg-border mx-3" />
                <div className="flex flex-col items-center gap-2">
                    {
                        product.status ?

                            <Image alt="Switch Ligado" src={"images/Products/switchOn.svg"} width={35} height={16} />
                            :
                            <Image alt="Switch Ligado" src={"images/Products/switchOff.svg"} width={35} height={16} />

                    }
                    <span className="text-[10px] font-medium text-grey7 text-center">Status</span>
                </div>
                <Image alt="Três pontos" src={"images/Global/treePoints.svg"} width={5} height={18} />
            </div>
        </div>
    )
}

export default ProductCard