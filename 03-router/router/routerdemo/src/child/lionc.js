import React from 'react'

class Lionc extends React.Component{
  componentWillMount(){
    console.log(this.props);
  }
  render(){
    return (
      <div>LionC页面:参数值为-{this.props.match.params.react}</div>
    )
  }
}

export default Lionc