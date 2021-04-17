import { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>
                        Comments
                  </h4>
                    {comments.map(comment => <div key={comment.id}> <p> {comment.text} <br /> {comment.author} - {comment.date} </p> </div>)}
                </div>
            )
        }
    }

    renderCampsite(campsite) {

        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }


    render() {
        if (this.props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.campsite.comments)}
                    </div>
                </div>
            );
        }
        return <div />;
    }
}
export default CampsiteInfo;