import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="nama">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Enter Nama" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pesan">
                <Form.Label>Pesan</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="button">Send </Button>
        </Form>
    )
}

export default Contact