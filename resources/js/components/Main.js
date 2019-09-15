import React  from 'react';
import axios from 'axios';

import Navbar from './Navbar/Navbar';
import Title from './Title/Title';
import Preloader from './Preloader/Preloader';

import ProductList from '../containers/ProductList';
import Filter from '../containers/Filter';

import './Main.css';


class Main extends React.Component {

        UNSAFE_componentWillMount() {
        const { setProducts } = this.props;
        axios.get('/products.json').then(({ data }) => {
            setProducts(data);
        })
    };

    // UNSAFE_componentWillMount(){
    //     axios.get('http://127.0.0.1:8000/home')
    //         .then(response=>{
    //             this.setState({products: response.data});
    //         });
    // }

    // UNSAFE_componentWillMount() {
    //     const { setProducts } = this.props;
    //     axios.get('http://127.0.0.1:8000/home').then(({data}) => {
    //         setProducts(data);
    //     })
    // };

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

// {this.state.products.map(products=>{
//     return(
//         <p>{products.name}</p>
//     )
// })}
