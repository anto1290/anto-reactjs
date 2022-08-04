import { Component } from 'react';
import ClassComponent from './pembahasan/ClassComponent';
import FunctionalComponent from './pembahasan/FunctionalComponent';

export default class Komponent extends Component {
    render() {
        return (
            <div>
                <ClassComponent nama="Muhammad Nurwibawanto" />
                <FunctionalComponent nama="Muhammad Nurwibawanto" />
            </div>
        )
    }
}
