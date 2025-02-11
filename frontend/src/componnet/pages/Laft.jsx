
import Link from "next/link"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

export default function Laft() {
    const isConnected = useSelector(state => state.user.isConnected)

    return (
        <>
            <main className="flex flex-col items-center text-xl text-center gap-3 ">
                <div style={{
                    width: 60,
                    height: 65,
                    backgroundColor: '#17100ac4',
                    padding: 5,

                    color: '#fff',
                    overflow: "hidden",
                    borderRadius: 10,
                }} >
                    {isConnected && <Link
                        href="/fpages/product/create"

                    >
                        <div className=" flex flex-col justify-center items-center ">  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-copy-plus w-10 h-14 hover:w-11 hover:h-11  ease-in-out duration-300"><line x1="15" x2="15" y1="12" y2="18" /><line x1="12" x2="18" y1="15" y2="15" /><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg></div>
                        <p className="text-sm">Add</p>
                    </Link>}

                </div>
                <div style={{
                    width: 60,
                    height: 65,
                    backgroundColor: '#17100ac4',
                    padding: 5,

                    color: '#fff',
                    overflow: "hidden",
                    borderRadius: 10,
                }} >
                    <Link href='/fpages/order'>
                        <div className=" flex flex-col justify-center items-center " >  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-copy-plus w-10 h-14 hover:w-11 hover:h-11 ease-in-out duration-300"><path d="M13 12h8" /><path d="M13 18h8" /><path d="M13 6h8" /><path d="M3 12h1" /><path d="M3 18h1" /><path d="M3 6h1" /><path d="M8 12h1" /><path d="M8 18h1" /><path d="M8 6h1" /></svg>
                        </div>           <p className="text-sm ">DashBord</p>         </Link>
                </div>
                <div style={{
                    width: 60,
                    height: 65,
                    backgroundColor: '#17100ac4',
                    padding: 5,

                    color: '#fff',
                    overflow: "hidden",
                    borderRadius: 10,
                }} >

                </div>
                <div style={{
                    width: 60,
                    height: 65,
                    backgroundColor: '#17100ac4',
                    padding: 5,

                    color: '#fff',
                    overflow: "hidden",
                    borderRadius: 10,
                }} >

                </div>

                {/* <div className="text-white text-xl ">
                        <ul className="flex flex-col  pt-5 pl-3 gap-4">
                            <div className="flex gap-2">
                                <span>*</span>
                                <li className=" underline"> Accessoires</li>
                            </div>
                            <div className="flex gap-2">
                                <span>*</span>
                                <li className=" underline">Bijoux</li>
                            </div>
                            <div className="flex gap-2">
                                <span>*</span>
                                <li className=" underline"> Dachbored</li>
                            </div>
                            <div className="flex gap-2">
                                <span>*</span>
                                <li className=" underline"> Order</li>
                            </div>


                        </ul>

                    </div> */}
            </main>



        </>
    )
}