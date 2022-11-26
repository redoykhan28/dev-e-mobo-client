import { useEffect, useState } from "react"

const useSeller = email => {

    const [isSeller, setIsSeller] = useState(false)
    const [dashLoader, setDashLoader] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:5000/user/seller/${email}`)
            .then(res => res.json())
            .then(data => {

                console.log(data)
                setIsSeller(data.isSeller)
                setDashLoader(false)
            })
    }, [email])
    return [isSeller, dashLoader]
}
export default useSeller