import { useEffect, useState } from "react"

const useVerify = email => {

    const [isVerify, setIsVerify] = useState(false)


    useEffect(() => {
        fetch(`http://localhost:5000/seller/verify/${email}`)
            .then(res => res.json())
            .then(data => {

                console.log(data)
                setIsVerify(data.isVerify)
            })
    }, [email])
    return [isVerify]
}
export default useVerify