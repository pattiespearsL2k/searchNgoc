import React from "react";
import { Form, Button, FormControl, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Filter from "../../Filter/Filter";
import './Search.css'


const Search = () => {
    return (
        <div >
            <Form className="d-flex search-bar">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Filter />
            <Card style={{ width: '30%' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body className="showcase__overlay">
                    <div className="showcase__text">
                        <Button href="#">Thêm so sánh</Button>
                        <Button href="#">Xem chi tiết</Button>
                    </div>
                </Card.Body>
            </Card>
            
        </div>
    );
};
export default Search
