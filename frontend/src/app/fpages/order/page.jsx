"use client"
import Port from "@/lib/Port";
import Link from "next/link";
import { useEffect, useState } from "react"


export default function order() {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        Port.get('/orders')
            .then((res) => setOrders(res.data))

    }, []);
    return (
        <>
            <div className="bg-gradient-to-t from-[#130d08e0] to-[#512f1faa]  from-25% max-w-screen-2xl mx-auto  rounded-3xl p-8 h-full">
                <table className="table-auto w-full border border-primary max-w-screen-lg mx-auto  bg-[#17100ab1] shadow-white rounded-lg">
                    <thead className="text-gray-400 border border-primary ">
                        <tr className="border border-primary ">
                            <th className="hover:underline">Order ID</th>
                            <th className="hover:underline">Number Phone</th>
                            <th className="hover:underline">Aderess</th>
                            <th className="hover:underline">Date</th>
                            <th className="hover:underline">Price</th>
                            <th className="hover:underline">Confirm</th>

                        </tr>

                    </thead>

                    <tbody className="border border-primary">
                        {orders.map((order) => (
                            <tr className="table-auto text-center border border-primary py-3 text-white *:py-2" key={order._id}>
                                <Link href={"/fpages/orderid"}><td className="hover:underline">{order._id} </td></Link>
                                <td className="hover:underline">{order.phone}</td>
                                <td className="hover:underline">{order.address}</td>
                                <td className="hover:underline">{order.date}</td>
                                <td className="hover:underline">{order.totalPrice} Da</td>
                                <td className="hover:underline"> <button className="border border-primary font-bold px-2 bg-[#17100ab1] rounded-md">Vu</button></td>
                            </tr>

                        ))
                        }
                    </tbody>
                </table>
            </div>



        </>
    )
}