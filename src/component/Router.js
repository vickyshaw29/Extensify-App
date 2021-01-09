import React from 'react'
import HomePage from './dasboard'
import CreatePage from './create'
import EditPage from './edit'
import HelpPage from './help'
import ErrorPage from './error'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import index from  './../index.css'
const Header=()=>{
    return(
        <div>
            <h1>Expensify App</h1>
            <NavLink to='/' className="btn">Dashboard</NavLink>
            <NavLink to='/create' className="btn">CreateExpense</NavLink>
            <NavLink to='/edit' className="btn">EditExpense</NavLink>
            <NavLink to='/help' className="btn">Help</NavLink>
        </div>
    )
}
const Router=()=>{
    return(
        <div>
            <BrowserRouter>
            <Header/>
            <Switch>
                    <Route path="/" component={HomePage} exact={true}/>
                    <Route path="/create" component={CreatePage}/>
                    <Route path="/edit" component={EditPage}/>
                    <Route path="/help" component={HelpPage}/>
                    <Route component={ErrorPage}/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Router