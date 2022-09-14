import React from 'react'
import { Form, Button } from 'react-bootstrap'
import {Link, Outlet} from 'react-router-dom'

const Filter = (props) => {
    return (
        <div>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e)=>props.handleFilter(e.target.value)}
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>
    )
}

export default Filter