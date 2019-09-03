import React from "react";
import { Card, Button } from "react-bootstrap";
import { IProduct } from "../MainPage";
import img from "../../assets/T-shirt.jpg";
import "./styles.scss";

interface IProductCardProps {
  array: IProduct[];
  selectProduct: (product: IProduct) => void;
  toggleModal: () => void;
  fetchProduct: (product: IProduct) => void;
}

class ProductCard extends React.Component<IProductCardProps> {

  checkProduct = (product: IProduct) => {
    const { selectProduct } = this.props;
    selectProduct(product);
  }

  onToggle = (product: IProduct) => {
    const { toggleModal, fetchProduct} = this.props;
    toggleModal();
    fetchProduct(product);
  }

  public render() {
    const { array } = this.props;
    return (
      <>
      {array && array.map((item: IProduct) => {

        const { id, name, price } = item;
        return (
          <Card
            key={id}
            style={{ width: "20rem", margin: "1rem" }}
            className="productCard"
            onClick={() => this.onToggle(item)}
          >
          <Card.Img variant="top" alt="" src={img} />
          <Card.Body>
            <Card.Text>{price} ₽</Card.Text>
            <Card.Title>{name}</Card.Title>
            <Button
              variant="primary"
              as="span"
              className="float-right"
              onClick={(e: React.SyntheticEvent) => {
                e.stopPropagation();
                this.checkProduct(item);
              }}
            >
              Добавить в корзину
            </Button>
          </Card.Body>
          </Card>
        );
      })}
      </>
    );
  }
}

export default ProductCard;