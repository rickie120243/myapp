var React=require("react");
var Comp1=React.createClass({
	render:function(){
		return <div>I am Comp1{this.props.x}</div>
	}
});
module.exports=Comp1;