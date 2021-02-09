import React, {useMemo} from 'react';
import { hetHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


export const SearchScreen = ({history}) => {

    const location = useLocation();
    
    const {q = ''} =  queryString.parse(location.search);
    const [formValues, handleInputChange] = useForm({
        searchText:q
    })
    const {searchText} = formValues
     

    const heroesFiltered = useMemo(() => hetHeroesByName(searchText), [q])
    const handleForm = (e) =>{
        e.preventDefault();
        history.push(`?q=${searchText}`)
        console.log(searchText)
    }
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searh Form</h4>
                    <hr/>
                    <form onSubmit={handleForm}>
                        <input 
                            type="text"
                            placeholder="find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}/>
                            <button
                                type="submit"
                                className="btn m-1 btn-block btn-outline-primary">
                                Search...
                            </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        (q=== '') &&
                        <div className="alert alert-info">
                        search hero </div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-danger">
                        There is no a hero with {q} </div>
                    }
                    
                    {
                        heroesFiltered.map(hero=>(
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
