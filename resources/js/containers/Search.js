import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../actions/seacrh';
import SearchBox from '../components/Navbar/SearchBox';

const mapStateToProps = ({ products }) => ({
    searchQuery: products.searchQuery
});

const mapDispatchToProps = dispatch =>({
    ...bindActionCreators(searchActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
