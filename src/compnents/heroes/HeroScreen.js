import React from 'react';
import { useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
export const HeroScreen = ({history}) =>{
    const {heroId} = useParams();
    const hero = getHeroById(heroId);
    console.log(hero)
    if(!hero){
        return <Redirect to="/"/> 
    }
    const {
        superhero,
        alter_ego,
        publisher,
        first_appearance,
        characters
    } = hero;
    const handleReturn = () =>{
        if(history.length <=2){
            history.push('/')
        }else{
            history.goBack();
        }
    }
    return(
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`../assets/heroes/${heroId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail"/>
            </div> 
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: {alter_ego}</b></li>
                    <li className="list-group-item"><b>Publisher: {publisher}</b></li>
                    <li className="list-group-item"><b>first apparence: {first_appearance}</b></li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}>
                    Return
                </button>
            </div>           
        </div>
    )
}