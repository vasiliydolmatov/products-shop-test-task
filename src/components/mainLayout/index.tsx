import React from 'react'
import { Card, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bucket from '../../assets/bucket.png';
import { withProduct, IProductProviderValue } from "../Product";
import './styles.scss';

interface IMainLayoutProps {
  children: React.ReactNode,
  value: IProductProviderValue,
}

const MainLayout = withProduct(({ children, value } : IMainLayoutProps) => {
  let quantityOfProducts;
  let sumOfProducts;
  if (value) {
    quantityOfProducts = value.productsSource.length;
    sumOfProducts = value.productsSource.reduce((result:any, num:any) => {
      return result + +num.price
    }, 0)
  }

  return (
    <div className="mainLayout">
      <Container>
        <Card.Body className="d-flex flex-row-reverse">
          <Link to={`/`}>
            {sumOfProducts ? <>Корзина({sumOfProducts} ₽)</> : <>Корзина</>}
            <img className="mainLayout__icon" src={bucket} alt="" width='30' height='30' />
            <Badge pill variant="primary" className="mainLayout__badge">{quantityOfProducts}</Badge>
          </Link>
        </Card.Body>
        {children}
      </Container>
    </div>
  )
})

export default MainLayout;
