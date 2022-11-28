import { useEffect, useState } from "react"

const useBuyer = email => {

    const [isBuyer, setIsBuyer] = useState(false)
    const [dashLoader, setDashLoader] = useState(true);


    useEffect(() => {
        fetch(`https://e-mobo-server.vercel.app/user/buyer/${email}`)
            .then(res => res.json())
            .then(data => {

                console.log(data)
                setIsBuyer(data.isBuyer)
                setDashLoader(false)
            })
    }, [email])
    return [isBuyer, dashLoader]
}
export default useBuyer