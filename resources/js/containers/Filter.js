import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as filterActions from '../store/filter/actions';
import Filter from '../components/Filter/Filter';

const mapStateToProps = ({ products, filter }) => ({
    filterBy: filter.filterBy
});

const mapDispatchToProps = dispatch =>({
    ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
