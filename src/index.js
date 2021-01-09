import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Router from './component/Router'




// class Indecission extends React.Component{
//     constructor(props){
//         super(props)
//         this.deleteOne=this.deleteOne.bind(this)
//         this.deleteAll=this.deleteAll.bind(this)
//         this.state={
//             person:null
//         }
//     }
//     async componentDidMount(){
//             const response=await fetch('https://api.github.com/users')
//             const data=await response.json()
//             this.setState(()=>({person:data}))
//             console.log(data)
//     }
//     deleteOne(optionToRemove){
//         this.setState(()=>({
//             person:this.state.person.filter((option)=>{
//                 return optionToRemove!==option
//             })
//         }))
//     }
//     deleteAll(){
//         this.setState(()=>({person:null}))
//     }
//     render(){
//         return(
//             <div>
//                 {!this.state.person?(
//                     <h1>loading....</h1>
//                 ):
//                     <div>
//                         <button onClick={this.deleteAll}>Delete all</button>
//                         {this.state.person.map((result)=>{
//                             return(
//                                 <div>
//                                     <h1>{result.login}</h1>
//                                     <button onClick={(e)=>{
//                                         this.deleteOne(result)
//                                     }}>Delete</button>
//                                 </div>
//                             )
//                         })}
//                     </div>

//                 }
//             </div>
//         )
//     }
// }






// const Header=(props)=>{
//     return(
//         <div>
//             Hello from the Heder page
//         </div>
//     )
// }
// const Body=(props)=>{
//     return(
//         <div>
//             Hello from the Body page
//         </div>
//     )
// }
// const Footer=(props)=>{
//     return(
//         <div>
//             Hello from the footer page
//         </div>
//     )
// }


ReactDOM.render(<Router />, document.getElementById('root'))
export default App
