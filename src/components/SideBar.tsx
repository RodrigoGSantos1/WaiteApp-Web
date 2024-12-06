import { ButtonSideBar } from '@/components/UI'
import HomeIcon from '@/assets/icons/interface/home.svg'
import OrderIcon from '@/assets/icons/interface/order.svg'
import MenuIcon from '@/assets/icons/interface/menu.svg'
import UsersIcon from '@/assets/icons/interface/users.svg'
import ProfileIcon from '@/assets/icons/interface/profile.svg'
import LogOffIcon from '@/assets/icons/interface/log-off.svg'
import Logo from '@/assets/svg/logo.svg'

export function SideBar() {
  return (
    <div className="w-[108px] h-screen bg-white py-10 px-5 flex flex-col items-center justify-between">
      <Logo />
      <div className="h-[50%] flex flex-col items-center justify-evenly">
        <ButtonSideBar icon={<HomeIcon />} title="Home" path="/home" />
        <ButtonSideBar
          icon={<OrderIcon />}
          title="Histórico"
          path="/historico"
        />
        <ButtonSideBar icon={<MenuIcon />} title="Cardápio" path="/cardapio" />
        <ButtonSideBar icon={<UsersIcon />} title="Usuários" path="/usuarios" />
      </div>
      <div className="h-[20%] flex flex-col items-center justify-around">
        <ButtonSideBar
          icon={<ProfileIcon />}
          title="Meu Perfil"
          path="/perfil"
        />
        <ButtonSideBar icon={<LogOffIcon />} title="Sair" path="/" />
      </div>
    </div>
  )
}
