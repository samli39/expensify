//get the actual package from the node modules
const moment = require.requireActual('moment');


export default (timestamp=0)=>{
	return moment(timestamp);
}