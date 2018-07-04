import React from 'react';
import uuid from 'uuid';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import {getItems,deleteItems} from './../actions/itemAction';
import PropTypes from 'prop-types';


class ShoppingList extends React.Component {
    state = {
        items: [
            { id: uuid(), name: "Thinking Fast and slow" },
            { id: uuid(), name: "Harry poter and the Philosopher" },
            { id: uuid(), name: "7 habits of successfult people" }
        ]
    }

    componentDidMount(){
          this.props.getItems();  
    }

    addItemHandler = () => {
        const bookName = prompt("Enter the book name to add");
        this.setState(state => ({
            items: [...state.items, { id: uuid(), name: bookName }]
        }))
    }

    handleDeleteItem = (id) => {
        // this.setState((state) => ({
        //     items: state.items.filter(data => {
        //         return data.id !== id;
        //     })
        // }))
        this.props.deleteItems(id);
    }
    render() {
       
        const { items } = this.props.item;
        console.log(items, "items")
        return (
            <Container className="wrapper">
                <ListGroup>
                    <TransitionGroup>
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        sytle={{ 'margin-right': '5px;' }}
                                        onClick={() => this.handleDeleteItem(_id)}
                                    >
                                        &times;
                          </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        )
    }
};

ShoppingList.propTypes={
   getItems:PropTypes.func, 
   item:PropTypes.object.isRequired
}

const mapStateToProp=(state)=>{
    console.log(state,"mapstatetotproops")
    return {
        item:state.item
    }
}

export default connect(mapStateToProp,{getItems,deleteItems})(ShoppingList);