import React from "react";
import { IProduct } from "../MainPage";
import { Form } from "react-bootstrap";
import img from "../../assets/T-shirt.jpg";

interface IFormProductProps {
  product: IProduct;
}

class FormProduct extends React.Component<IFormProductProps> {
  public render() {
    const { product: { name, description, price } } = this.props;
    return (
      <Form className="d-flex">
        <div>
          <img className="mainLayout__icon" src={img} alt="" width="350" height="300" />
        </div>
        <div>
          <Form.Text>{name}</Form.Text>
          <Form.Label>Описание</Form.Label>
          <Form.Text>{description}</Form.Text>
          <Form.Label>Цена</Form.Label>
          <Form.Text>{price} ₽</Form.Text>
        </div>
      </Form>
    );
  }
}

export default FormProduct;
