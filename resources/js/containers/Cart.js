import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../actions/cart';
import Cart from '../components/Navbar/Cart';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ products, cart  }) => ({
    totalPrice: cart.items.reduce((total, product) => total + product.price, 0),
    count: cart.items.length,
    items: uniqBy(cart.items, o => o.id)
});

const mapDispatchToProps = dispatch =>({
    ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
