import { useContext, useEffect } from 'react'
import { LocalContext } from './Test';


const SubmitHandler = () => {

    const data = useContext<any>(LocalContext)
    useEffect(() => data.submitHandler(), [])

    return (<>
        <span>Time over</span>
    </>)
}

export { SubmitHandler }