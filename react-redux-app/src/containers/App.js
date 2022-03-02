// co nhiem vu ket noi
import { connect } from "react-redux";

import App from '../component/App'

const mapStateToProps = state =>({
    auth: state.auth
});


export default connect(mapStateToProps)(App);
// return component
