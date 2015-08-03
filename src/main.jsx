var React=require("react");
var Comp1=require("./comp1");
var maincomponent=React.createClass({
  getInitialState:function(){
    return {name:"Lai",age:23};
  }
  ,componentWillMount:function(){ //元件初始化
    this.timer=setInterval(function(){
      var age=this.state.age+1;
      this.setState({age:age}); 
    }.bind(this),100);
  }
  ,componentWillUnmount:function(){ //元件將結束
    clearInterval(this.timer);
  }
  ,render: function() {
    return <div>Hello,{this.state.name},I am {this.state.age} years old
    <Comp1/ x={"hi"}></div>
  }
});
module.exports=maincomponent;