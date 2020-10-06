import React, {useEffect, useState} from 'react'
import {getStremsKey} from '../../Service/Api/Api'

function DetailsFollowStremer() {

    const [streamsKey, setStreamsKey] = useState()

    useEffect(() => {
        const resp = getStremsKey().then((re)=>{
            setStreamsKey(re.data)
            console.log('re.data',re.data)
        })
    }, [])

    return (
        <div>
              
        </div>
    )
}

export default DetailsFollowStremer
