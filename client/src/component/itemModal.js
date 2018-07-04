import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, 
    Label, Input, FormText } from 'reactstrap';
import uuid from 'uuid';
import React from 'react';
import { connect } from 'react-redux';
import { defaultCipherList } from 'constants';
import {addItem} from './../actions/itemAction';

const buttonPosition = {
    marginLeft: '200px',
    marginTop: '100px'
}

class ItemModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            book: ''
        };

        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.book) {
            const newBook = {
                name: this.state.book
            }
            this.props.addItem(newBook);
            this.toggle();
        }

    }
    onChange(e) {
        console.log(e.target.value, "hsdj");
        this.setState({
            book: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Button color="dark" onClick={this.toggle} style={buttonPosition}>Add Book</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="exampleEmail"> Book</Label>
                                <Input type="text" name="book" id="bookName" onChange={this.onChange}
                                    placeholder="Add item" />
                            </FormGroup>

                            <Button type="submit" style={{ 'width': '100%' }}>Add</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
};

const mapStateToProp=(state)=>{
    console.log(state,"mapstatetopropo")
}

export default connect(mapStateToProp,{addItem})(ItemModal)