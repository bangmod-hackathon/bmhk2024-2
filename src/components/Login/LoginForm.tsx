const LoginForm: React.FC = () => {
  return (
    <div className="xl:bg-[url(/LoginPage/LoginPageBg.webp)] md:bg-[url(/LoginPage/LoginPageIpadBg.webp)] w-full h-screen bg-no-repeat bg-cover bg-center bg-[url(/LoginPage/LoginPageMobileBg.webp)]">
      <div className="flex flex-col h-full w-auto items-center justify-center gap-y-6">
        <div className=" size-auto">
          <img src="Landing/Logo.webp" alt="" className=" h-72" />
        </div>
        <div className="bg-[#9ddef9]/10 h-48 px-6 sm:px-24 py-8 rounded-3xl flex flex-col items-center gap-y-6 justify-center">
          <p className=" text-white font-dm_oceanic text-[32px] tracking-wider">เข้าสู่ระบบ</p>
          {/* Add Link to Google Login*/}
          <button
            className=" rounded-[30px] bg-primary_yellow-200 py-3 px-5 flex items-center gap-x-2 group hover:bg-primary_yellow-300 duration-300"
            onClick={() => {
              window.location.href =
                (import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:4000') + '/api/auth/google'
            }}
          >
            <img src="LoginPage/Google_G_logo.svg" alt="" className="bg-white rounded-full p-[2px]" />
            <p className=" text-lg font-normal font-ibm text-bg-200 group-hover:text-bg-300 duration-300">
              Log in with Google account
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
