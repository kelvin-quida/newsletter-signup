import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <div className="justify-center items-center w-[1000px] h-[600px] bg-white rounded-3xl grid grid-flow-col gap-x-10" >
        <div className="">
          <h1 className="text-text text-5xl font-bold" >Stay updated!</h1>

          <h3 className="mt-10 text-text">  Join 60,000+ product managers receiving monthly updates on:</h3>

          <ul className="mt-8">
          <li className="flex items-center gap-2 mt-3">
            <img src="/icon-list.svg" alt="Imagem 1" className="w-6 h-6" />
            <span className="text-text font-bold">Product discovery and building what matters</span>
          </li>
          <li className="flex items-center gap-2 mt-3">
            <img src="/icon-list.svg" alt="Imagem 2" className="w-6 h-6" />
            <span className="text-text font-bold">Measuring to ensure updates are a success</span>
          </li>
          <li className="flex items-center gap-2 mt-3 mb-10">
            <img src="/icon-list.svg" alt="Imagem 3" className="w-6 h-6" />
            <span className="text-text font-bold">And much more!</span>
          </li>
        </ul>

        <span className="text-text" >Email Address:</span>

         <form className="">
            <input  
            type="text" 
            placeholder="Type here" 
            className="p-4 border border-slate-700 w-full mt-4 mb-6 rounded-lg"

            />

            <button className="btn w-full  hover:bg-gray-400 ">  Subscribe to monthly newsletter</button>
          </form>
        </div>

        <div>
          <Image src='/illustration-sign-up-desktop.svg' width={365} height={0} alt=""/>
        </div>
      </div>
    </div>
    </>
  )
}
