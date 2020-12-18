import { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderComments(comments){
        const commentsRender = comments.map((comment) => {
            return (
                <div>
                    <li>
                        <div>{comment.comment}</div>
                        <div>-- {comment.author}, {comment.date} </div>
                    </li>
                </div>
            );
        });

        if(comments){
            return (
                <div>
                    <h4>Comments</h4>
                    <ul class="list-unstyled">
                        {commentsRender}
                    </ul>
                </div>
            );
        } 

        return (
            <div></div>
        );
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        if(!this.props.dish){
            return (<div></div>);
        }

        return (
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;