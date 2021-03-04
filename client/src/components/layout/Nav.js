import Logo from '../../images/logo-w.svg'

export default function Nav() {
  return (
    <div className="h-screen w-60 bg-primary text-red">
      <div className="p-8">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  )
}
