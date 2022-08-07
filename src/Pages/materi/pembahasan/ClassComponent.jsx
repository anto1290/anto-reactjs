import { Component } from 'react'
import PropsTypes from 'prop-types'

export default class ClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>Membuat Component dengan class component</h1>
                <h2>Halo, {this.props.nama} , Semangat Belajar</h2>
            </div>
        )
    }
}

ClassComponent.propTypes = {
    nama: PropsTypes.string.isRequired
}