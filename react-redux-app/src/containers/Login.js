// co nhiem vu ket noi
import { connect } from "react-redux";

import Login from '../component/Login'
import { login } from "../redux/auth";

const mapActionToProps = {
    login
};

export default connect(null, mapActionToProps)(Login);
// return component
