import { useEffect } from "react"
import { useParams } from "react-router"

interface IParams {
    object: string;
}

const People = () => {

    const { object: id } = useParams<IParams>()
    
    useEffect(() => {
        console.log(id)
    })

    return (        

        <h3>People</h3>
    )
}

export default People