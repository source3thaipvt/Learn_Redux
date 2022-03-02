import axios from "axios";
import * as Config from '../constants/Config'
export default function callApi(
  method = "GET",
  endpoint,
  body,
) {
  return axios({
      method: method,
      url: `${Config.API_URL}/${endpoint}`,
      data: body
  }).catch(err=>{console.log(err)});
}
