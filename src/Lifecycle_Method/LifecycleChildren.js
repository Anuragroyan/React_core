import React, {Component} from "react";

class LifecycleChildren extends Component{
   constructor(props){
     super(props)

     this.state = {
        name: "Children"
     }
     console.log("LifecycleChildren constructor")
   }

   static getDerivedStateFromProps(props, state) {
          console.log("LifecycleChildren getderivedstatefromprops")
          return null
  } 
    componentDidMount(){
           console.log("LifecycleChildren componentdidmount")
    }

    shouldComponentUpdate() {
        console.log("LifecycleChildren shouldcomponentupdate")
        return true
      }
    
      getSnapshotBeforeUpdate(prevProps, prevstate){
         console.log("LifecycleChildren getsnapshotbeforeupdate")
         return null
      }
       
      componentDidUpdate(prevProps, prevstate, snapshot){
        console.log("LifecycleChildren componentdidupdate")
      }
    
      changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
    
  render() {
    console.log("LifecycleChildren render")
    return <div>LifecycleChildren</div>
  }
}

export default LifecycleChildren