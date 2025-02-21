import Header from "@/components/Header"
import FilterHeader from "./components/FilterHeader"

const Requests = () => {
  return (
    <div className="w-full px-[60px] pb-11 flex flex-col gap-11">
      <Header title="Pedidos" name="Mateus barbosa" />
      <div className="flex flex-col gap-6 pt-32">
        <FilterHeader />
      </div>
    </div>
  )
}
export default Requests