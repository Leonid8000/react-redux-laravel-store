import React  from 'react';
import axios from 'axios';

import Navbar from './Navbar/Navbar';
import Title from './Title/Title';
import Preloader from './Preloader/Preloader';

import ProductList from '../containers/ProductList';
import Filter from '../containers/Filter';

import './Main.css';


class Main extends React.Component {

    //     UNSAFE_componentWillMount() {
    //     const { setProducts } = this.props;
    //     axios.get('/products.json').then(({ data }) => {
    //         setProducts(data);
    //     })
    // };

    componentDidMount() {
        this.props.getProducts();
    };

    render() {
        const {products, isReady} = this.props;

        return (
    <div>
        <React.Fragment>
            <Navbar />
            <Title title={'Apple Westfarms'}/>
            <Filter />
            {!isReady ?  <Preloader /> : products.map((product, i) => <ProductList key={i}{...product} />)}
        </React.Fragment>
    </div>
        );
    }
}

export default Main;

// {!isReady ?  <Preloader /> : products.map((product, i) => <ProductList key={i}{...product} />)}
