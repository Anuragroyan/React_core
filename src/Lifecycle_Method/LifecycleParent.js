import React, { Component} from "react";
import LifecycleChildren from "./LifecycleChildren";

class LifecycleParent extends Component {
  constructor(props){
    super(props)

    this.state = {
        name:"Parent"
    }

    console.log("LifecycleParent constructor")
  }

  static getDerivedStateFromProps(props, state) {
       console.log("LifecycleParent getderivedstatefromprops")
       return null
  }

  componentDidMount() {
    console.log("LifecycleParent componentdidmount")
  }

  shouldComponentUpdate() {
    console.log("LifecycleParent shouldcomponentupdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevstate){
     console.log("LifecycleParent getsnapshotbeforeupdate")
     return null
  }
   
  componentDidUpdate(prevProps, prevstate, snapshot){
    console.log("LifecycleParent componentdidupdate")
  }

  changeState = () => {
    this.setState({
        name: 'Codevolution'
    })
}


   render() {
      console.log("LifecycleParent render")
      return (
        <>  
           <div>LifecycleParent</div>
           <button onClick={this.changeState}>Change state</button>
           <LifecycleChildren/>
        </>
      )
   }

} 

export default LifecycleParent;