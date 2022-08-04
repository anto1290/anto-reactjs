import React from 'react'

export default function FunctionalComponent(props) {
    const { nama } = props
    return (
        <div>
            <h1>Membuat Component dengan Functional component</h1>
            <h2>Halo {nama} , Semangat Belajar</h2>
        </div>
    )
}
