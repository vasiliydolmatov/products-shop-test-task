import React from "react";
import { IProduct } from "../components/MainPage";

interface IProductProviderState {
  productsSource?: IProduct[];
}

export interface IProductProviderFunc {
  checkIsProducts?: (any: any) => void;
}

interface IProductProviderProps {
  children?: any;
}

export interface IProductProviderValue {
  productsSource: IProduct[];
  checkIsProducts: (any: any) => void;
}

const ProductContext = React.createContext({});
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends React.Component<IProductProviderProps, IProductProviderState & IProductProviderFunc> {
  constructor(props: IProductProviderProps) {
    super(props);
    const productsSource = JSON.parse(`${localStorage.getItem("products")}`) || [];
    this.state = {
      productsSource,
    };
  }

  checkIsProducts = (productsSource: any) => {
    this.setState({ productsSource });
  }

  public render() {
    const { productsSource } = this.state;
    const { children } = this.props;

    return (
      <ProductContext.Provider value={{ productsSource, checkIsProducts: this.checkIsProducts }}>
        {children}
      </ProductContext.Provider>
    );
  }
}

const withProduct = (Cmp: any) => (props: any) => {
  return (
    <ProductConsumer>
      {value => <Cmp value={value} {...props} />}
    </ProductConsumer>
  );
};

export default ProductContext;
export { withProduct, ProductProvider };
