"use client"
import Port from "@/lib/Port";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function order_id() {
    const [ordersid, setOrdersid] = useState([]);
    const router = useRouter();


    useEffect(() => {

        Port.get(`/orders/${id}`)
            .then((res) => setOrdersid(res.data))
            .catch((error) => console.error('Error fetching order:', error));

    }, []);
    return (
        <>
            <div>
                {
                    ordersid.map((order) => (
                        <div key={order._id}>

                            <div>Number Phone: {order.name}</div>
                            <div>Confirm: <button className="border border-primary font-bold px-2 bg-[#17100ab1] rounded-md">Vu</button></div>
                        </div>
                    ))
                }
            </div>



        </>
    )
}