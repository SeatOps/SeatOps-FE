import Logo from "../assets/img/logo.svg"

function Header() {
  return (
    <header className="w-full flex justify-between items-center px-[50px] 2xl:px-[100px] py-[25px] 2xl:py-[50px]">
        <img 
            src={Logo} 
            alt="시대원 로고"
            className="w-[260px] 2xl:w-[360px] h-auto"
        />
        <div className="flex gap-[50px]">
            <p className="typo-lg-semibold 2xl:typo-ll-semibold text-gray-50"> 로그인 </p>
            <p className="typo-lg-semibold 2xl:typo-ll-semibold text-gray-50"> 회원가입</p>
            <p className="typo-lg-semibold 2xl:typo-ll-semibold text-gray-50"> 로그아웃</p>
        </div>
    </header>
  )
}

export default Header