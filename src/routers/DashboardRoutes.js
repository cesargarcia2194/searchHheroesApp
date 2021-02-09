import React from 'react'
import { Navbar } from '../compnents/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'

import { MarvelScreen } from '../compnents/marvel/MarvelScreen'
import { HeroScreen } from '../compnents/heroes/HeroScreen'
import { DcScreen } from '../compnents/dc/DcScreen'
import { SearchScreen } from '../compnents/search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroId" component={HeroScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>
                    <Redirect to="/marvel" />
                </Switch>
            </div>   
        </>
    )
}
