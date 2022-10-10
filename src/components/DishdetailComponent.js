import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComment(comments) {
    const cmt = comments.map((comment) => {
      return (
        <li key={comments.id}>
          <p>{comment.comment}</p>
          <p>-- {comment.author},{" "}{new Intl.DateTimeFormat("en-US", {month: "long",day: "numeric",year: "numeric",}).format(new Date(comment.date))}
          </p>
        </li>
      );
    });

    if (comments == null) {
      return <div></div>;
    } else
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comment</h4>
          <ul className="list-unstyled">{cmt}</ul>
        </div>
      );
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const dish = this.props.dish;
    if (dish == null) {
      return <div></div>;
    }
    const dishCard = this.renderDish(dish);
    const dishCmt = this.renderComment(dish.comments);
    return (
      <div class="container">

      <div className="row">
        {dishCard}
        {dishCmt}
      </div>
      </div>
    );
  }
}

export default DishDetail;
