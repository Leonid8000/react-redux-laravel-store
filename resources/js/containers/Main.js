import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productsActions from '../store/product/actions';
import Main from '../components/Main';
import orderBy from 'lodash/orderBy';

const sortBy = (products, filterBy) => {

    switch (filterBy){
        case 'all':
            return products;
        case 'hightPrice':
            return orderBy(products, 'price', 'desc');
        case 'lowPrice':
            return orderBy(products, 'price', 'asc');
        default:
            return products;
    }
};

const filterProducts = (products, searchQuery) =>{
    return products.filter( o =>
        o.name && o.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );
};



const searchProducts = (products, filterBy, searchQuery) => {
    return sortBy(filterProducts(products, searchQuery), filterBy);
};

const mapStateToProps = ({ products, filter }) => ({
    products: products.items &&
    searchProducts(products.items, filter.filterBy, filter.searchQuery),
    isReady: products.isReady
});

const initMapDispatchToProps = dispatch =>({
    ...bindActionCreators(productsActions, dispatch)
});

export default connect(mapStateToProps, initMapDispatchToProps)(Main);



// const mapStateToProps = state => ({
//     ...state
// });


// const mapStateToProps = ({products}) => ({
//     products: products.items,
//     isReady: products.isReady
// });

// const initMapDispatchToProps = dispatch =>({
//     setProducts:products => dispatch(setProducts(products))
// });

//filter
// && products.items.filter( o =>
// o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0