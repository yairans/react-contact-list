import { connect } from 'react-redux'
import { helloWorld, filter } from './../actions'
import Table from '../components/Table/Table'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.helloWorld.items,
    filter: state.helloWorld.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => dispatch(helloWorld()),
		onChange: (x) => {
			debugger;
			dispatch(filter(x))
		}
	}
}

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)

export default TableContainer
