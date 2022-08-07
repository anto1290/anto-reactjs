// eslint-disable-next-line
import { Component } from 'react'

const Input = ({ type, name, rest, onChange, label }) => (
    <div>
        <label>{label}</label>
        <br />
        <input type={type} name={name} onChange={e => onChange(e.target.value)} {...rest} />
        <br />
    </div>
);
const ShowError = ({ errors }) => {
    return (
        <ul style={{ color: 'red', marginLeft: '-27px' }}>
            {errors.map((error, index) => <li key={index}>{error}</li>)}
        </ul>
    );
}
export default class Register extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        passwordConfirmation: '',
        errors: []
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, address, password, passwordConfirmation } = this.state;
        // eslint-disable-next-line
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const angka = /^[0-9]+$/;
        let message = [];
        if (name.length < 3) {
            message.push('Name must be at least 3 characters');
        }
        if (!email.includes('@')) {
            message = [...message, 'Email must be valid'];
        }
        if (!re.test(String(email).toLowerCase())) {
            message = [...message, 'Email must be valid'];
        }
        if (!phone.match(angka)) {
            message = [...message, 'Phone must number to be valid'];
        }
        if (phone.length > 13 || phone.length < 8) {
            message = [...message, 'Phone must be 8-13 characters'];
        }
        if (password !== passwordConfirmation) {
            message = [...message, 'Password confirmation does not match'];
        }
        if (address.length < 0) {
            message = [...message, 'address is required'];
        }
        if (password.length < 6) {
            message = [...message, 'Password must be at least 6 characters'];
        }
        if (message.length > 0) {
            this.setState({ errors: message });
        } else {
            alert(
                `Name: ${name},
                Email: ${email},
                Phone: ${phone},
                Address: ${address},
                Password: ${password}
                Password Confirmation: ${passwordConfirmation}`
            )
        }
    }
    render() {
        const style = {
            width: '400px',
            margin: '100px auto',
            border: '1px solid black',
            padding: '10px',
        }

        return (
            <div style={style}>
                <h3>Register Data</h3>
                {this.state.errors && <ShowError errors={this.state.errors} />}
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" name="name" label="Name" onChange={value => this.setState({ name: value })} />
                    <Input type="email" name="email" label="Email" onChange={value => this.setState({ email: value })} />
                    <Input type="tel" name="phone" label="Phone" onChange={value => this.setState({ phone: value })} />
                    <Input type="text" name="address" label="Address" onChange={value => this.setState({ address: value })} />
                    <Input type="password" name="password" label="Password" onChange={value => this.setState({ password: value })} />
                    <Input type="password" name="passwordConfirmation" label="Password Confirmation" onChange={value => this.setState({ passwordConfirmation: value })} />
                    <br />
                    <button type='submit'>Register</button>
                </form>
            </div>
        )
    }
}
