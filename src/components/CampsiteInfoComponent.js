import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

function RenderComments({ comments }) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>
                    Comments
                  </h4>
                {comments.map(comment => <div key={comment.id} > <p> {comment.text} <br /> {comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))} </p> </div>)}
                <CommentForm />
            </div>
        )
    }
}

function RenderCampsite({ campsite }) {

    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}



function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = { modalIsOpen: false };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ modalIsOpen: !this.state.modalIsOpen });
    }

    formAlert(values) {
        console.log("state is" + JSON.stringify(values));
        alert("state is" + JSON.stringify(values));
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    < Button outline onClick={this.toggleModal} color="primary">
                        <i className=" fa fa-lg fa-pencil">
                            Submit Comment
                    </i>
                    </Button>
                    <Modal isOpen={this.state.modalIsOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}> Submit Comment</ModalHeader>
                        <ModalBody>

                            <LocalForm onSubmit={values => this.formAlert(values)}>
                                <Row className="form-group">
                                    <Label md={12} htmlFor="rating">
                                        Rating
                                    </Label>
                                    <Col md={12}>
                                        <Control.select defaultValue='1' name="rating" id="rating" model=".rating" className="form-control" >
                                            <option value=''></option>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>

                                        </Control.select>

                                    </Col>

                                </Row>
                                <Row className="form-group">
                                    <Label md={12} htmlFor="author">
                                        Your Name
                                    </Label>
                                    <Col md={12}>
                                        <Control.textarea name="author" id="author" model=".author" className="form-control" placeHolder="Your Name"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}>


                                        </Control.textarea>
                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "required",
                                                minLength: "You must have more than 2 characters",
                                                maxLength: "You must have less than 15 characters"
                                            }}
                                        >


                                        </Errors>

                                    </Col>

                                </Row>
                                <Row className="form-group">
                                    <Label md={12} htmlFor="text">
                                        Comment
                                    </Label>
                                    <Col md={12}>
                                        <Control.textarea name="text" id="text" model=".text" className="form-control"
                                        validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(50)
                                            }}>


                                        </Control.textarea>

                                        <Errors
                                            className="text-danger"
                                            model=".text"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "required",
                                                minLength: "You must have more than 2 characters",
                                                maxLength: "You must have less than 50 characters"
                                            }}
                                        >


                                        </Errors>

                                    </Col>

                                </Row>
                                <Row className="form-group">
                                    <Label md={12} >
                                    </Label>
                                    <Col md={12}>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>

                                    </Col>

                                </Row>




                            </LocalForm>

                        </ModalBody>

                    </Modal>
                </div>
            </React.Fragment>
        )
    }
}
export default CampsiteInfo;