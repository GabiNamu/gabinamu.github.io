import React from 'react'
import { Link } from 'react-router-dom';
import TrybeTunes from '../../images/search.png';
import Trivia from '../../images/trivia.png';
import Tryunfo from '../../images/tryunfo.png';
import StarWars from '../../images/starwars.png';
import SolarSystem from '../../images/solarSystem.png';
import TrybeWallet from '../../images/wallet.png';
import Calculator from '../../images/calculator.png';
import RecipesAPP from '../../images/recipes.png';
import FrontCard from '../../components/frontCard/FrontCard';
import ShoppingCart from '../../images/store.png';
import QRcode from '../../images/qrcode.png';
import './front.css';

const Front = () => {
  return (
    <div className='front-container'>
      <div className='front-link-container'>
      <Link to="/" className='front-link'>Back</Link>
      <Link to="/Back" className='front-link'>Back-end projects</Link>
      </div>

      <h1 className='front-title'>Front-end Projects:</h1>
      <div className='front-content'>
      <FrontCard 
      image={RecipesAPP}
      title="Recipes APP"
      content="The layout focuses on mobile devices"
      github="https://github.com/GabiNamu/recipes-app"
      demo="https://gabinamu.github.io/recipes-app" />
      <FrontCard 
      image={TrybeTunes}
      title="TrybeTunes"
      github="https://github.com/GabiNamu/TrybeTunes"
      demo="https://gabinamu.github.io/TrybeTunes/#/" />
      <FrontCard 
      image={Trivia}
      title="Trivia"
      github="https://github.com/GabiNamu/Trivia"
      demo="https://gabinamu.github.io/Trivia/#/" />
      <FrontCard 
      image={Tryunfo}
      title="Tryunfo"
      github="https://github.com/GabiNamu/Tryunfo"
      demo="https://gabinamu.github.io/Tryunfo/" />
       <FrontCard 
      image={QRcode}
      title="QRcode Generator"
      github="https://github.com/GabiNamu/qrcode-generator"
      demo="https://gabinamu.github.io/qrcode-generator" />
      <FrontCard 
      image={StarWars}
      title="StarWars Planets Search"
      github="https://github.com/GabiNamu/starwars-planets-search"
      demo="https://gabinamu.github.io/starwars-planets-search/" />
      <FrontCard 
      image={SolarSystem}
      title="Solar System"
      github="https://github.com/GabiNamu/solar_system"
      demo="https://gabinamu.github.io/solar_system/" />
      <FrontCard 
      image={TrybeWallet}
      title="TrybeWallet"
      github="https://github.com/GabiNamu/trybewallet"
      demo="https://gabinamu.github.io/trybewallet/#/" />
      <FrontCard 
      image={Calculator}
      title="Calculator"
      github="https://github.com/GabiNamu/calculator"
      demo="https://gabinamu.github.io/calculator/" />
      <FrontCard 
      image={ShoppingCart}
      title="Shopping Cart"
      github="https://github.com/GabiNamu/Shopping-Cart"
      demo="https://gabinamu.github.io/Shopping-Cart/" />
      </div>
    </div>
  )
}

export default Front