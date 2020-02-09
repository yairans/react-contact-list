import { connect } from 'react-redux'
import { helloWorld, filter } from './../actions'
import Header from '../components/Header/Header'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.helloWorld.items,
    filter: state.helloWorld.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(helloWorld()),
    onChange: (x) => dispatch(filter(x))
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
