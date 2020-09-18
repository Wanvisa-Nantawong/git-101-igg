import React, { useState, useEffect} from 'react'
import axios from 'axios'

export default (props) => {
    const [rename, setResume] = useState({
        name:'',
        nickname:'',
        age:'',
        skill:'',
    })

    useEffect(() => {
        const id = props.route.params.id
        axios.get('https://movie-api.igeargeek.com/users/profile/' + id)
        .then((res) => {
            console.log('res', res.data)
        }).catch((error) => {
            console.log('error', error)
        })

    }, []
    )

    return null
}