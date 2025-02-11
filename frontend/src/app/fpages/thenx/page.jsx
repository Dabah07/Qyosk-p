import Link from "next/link"


export default function Thanex() {
    return (

        <div className="text-5xl text-center bg-gradient-to-t from-[#130d08e0] to-[#512f1faa]  from-25%  rounded-3xl max-w-screen-2xl text-gray-400 italic  mx-auto h-1/2 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-4">
                <h1 className="font-bold">Thank you for your purchase!</h1>
                <p className="text-3xl ">We will send you an email with the details of your order.</p>
            </div>
            <Link className="text-3xl  py-0.5 pt-1 hover:text-black font-serif text-center italic text-black hover:bg-amber-500  bg-primary rounded-lg mt-9 px-5" href='/fpages/product'>Shopping</Link>
        </div>
    )
}