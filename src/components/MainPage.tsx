import React from 'react';
import { Container, Row } from 'react-bootstrap';
import data from '../mock/products.json';
import ProductCard from '../components/ProductCard/index';
import ModalWindow from "../components/Modal";
import FormProduct from "../components/Form";
import { withProduct } from "../components/Product";

export interface IProduct {
  id?: string,
  name: string,
  description: string,
  price: string,
  photo: string
}

export interface IMainPage {
  array: IProduct[];
  selectProduct: (product: IProduct) => void;
  toggleModal: () => void;
  fetchProduct: (product: IProduct) => void;
}

export interface IMainPageState {
  isOpen?: boolean | undefined;
  products: IProduct[];
  product: IProduct;
}

interface IMainPageProps {
  value: any
}


class MainPage extends React.Component<IMainPage & IMainPageProps, IMainPageState> {
  constructor(props: any) {
    super(props);
    const productsSource = JSON.parse(`${localStorage.getItem('products')}`) || [];
    this.state = {
      isOpen: false,
      products: productsSource,
      product: {
        name: "",
        description: "",
        price: "",
        photo: ""
      },
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  };

  fetchProduct = (product: IProduct) => {
    this.setState({ product })
  }

  selectProduct = (product: IProduct) => {
    const { products } = this.state;
    const { value } = this.props;
    const newProducts = products.concat([{ ...product }]);
    localStorage.setItem('products', JSON.stringify(newProducts));
    value.checkIsProducts(newProducts);
    this.setState({
      products: newProducts,
      isOpen: false,
    });
  };


  public render() {
    const { isOpen, product } = this.state;

    return (
      <div className="mainPage">
        <Container>
          <Row className="justify-content-md-center">
            <ProductCard
              array={data.products}
              toggleModal={this.toggleModal}
              selectProduct={this.selectProduct}
              fetchProduct={this.fetchProduct}
            />
          </Row>

          <ModalWindow
            isOpen={isOpen}
            onClose={this.toggleModal}
          >
            <FormProduct
              product={product}
            />
          </ModalWindow>
        </Container>
      </div>
    )
  }

}

export default withProduct(MainPage);