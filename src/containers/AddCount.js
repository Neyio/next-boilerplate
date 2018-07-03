
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addCount } from '../actions/counter'
import AddCount from '../components/AddCount'

const mapStateToProps = state => {
	return {
		count: state.count
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addCount: bindActionCreators(addCount, dispatch)
	}
}

//直接在该组件上封装成为容器组件
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddCount)
