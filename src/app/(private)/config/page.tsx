import Header from "@/components/Header"
import Categories from "./components/Categories"
import Switch from "./components/Switch"

const Config = () => {
  return (
    <div className="w-full px-[60px] pb-11 flex flex-col gap-9">
      <Header title="Configurações" name="Mateus barbosa" />
      <div className="flex flex-col items-center gap-6 pt-32">
        <Switch />
        <Categories />
      </div>
    </div>
  )
}
export default Config