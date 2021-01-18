import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import img from './tudum.jpg'
import image from './tudum2.jpg'


const api = axios.create({
  baseURL: 'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=8c7760aebb6b4f61890b5311b4c355d5'
})

class Tudum extends Component {

   state = {
    series: []
  }

  async componentDidMount() {
    const response = await api.get()

    this.setState({
      series: response.data.articles
    })
    console.log(response.data.articles)
  } 

  render(){
  return (
  <div>
    <header>
      <div className='Container'>
        <img className='Menu' src='https://img.icons8.com/android/24/000000/menu.png'/>
        <img  className='Logo' src= {img} alt='logo'></img>
       <div className='Facebook'>
         <img className='Facebook-image' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABZklEQVRoge2YMUvDQBTH/1ebBCodOgrioASELKL5Ek5Sip9Ah6zFT9F+gfYz5CN0F5esXapDpWMxCNlU8hx0KEUbenmXS+D9lgyXe+/9eLm7cIAglEKZThDEc7eTen0CbgBcAnQM4BBApoAvAjKlsCbCOon8633jt9kr3iCcLAZI1ZhAp38Md+nn2SPCiW4OIwK3MR0s315GpPBgIv4mLRNBqyoeMCAQThaDqooHmAWCeO5CqRFnzCJYBTqp1wdwxhmzCNZF/LtVFrEC0dBz89nj3XlWNifzLkRXBS+snPbHxdN9kHJl5F7ERztHiYacxQP8At1dg56bz5jzmTkH/oPjm9+mUgETiIBttH6nw+kzcRcC4D2J/N6+k+rUgaXOJBFgpOECCq8602ojQFDN7kBL5c0W+HQcLQHWa5Wi8yGJfPZrnNp0QBcRsI0I2EYEbCMCthEB24iAbUTANiJgm8YLCEJJvgGn0FPFLWdy4AAAAABJRU5ErkJggg=='/>
          <p className='Facebook-text'>Curtir</p>
       </div>
       <div className='Twitter'>
        <img className='Twitter-image' src="https://img.icons8.com/metro/26/4a90e2/twitter.png"/>
        <a href=""></a>
        <p className='Twitter-text'>Seguir</p>
       </div>
      </div>
    </header>
    <body>
    <div className='Map-1'>
      {this.state.series.slice(0,1).map((item, index)  => (
     <div className='Map-1' key={index}>
        <img className='images-map1' src={item.urlToImage}/>
        <p className='title-map1'>{item.author}</p> 
        <p className='description-map1'>{item.content}</p> 
     </div>
      ))}
    </div> 
    <div className='Map-2'>
      {this.state.series.slice(1,4).map((item, index)  => (
     <div className='Map2' key={index}>
        <img className='images-map2' src={item.urlToImage}/>
     </div>
      ))}
    </div> 
    <div className='Map-3'>
      {this.state.series.slice(4,10).map((item, index)  => (
     <div className='Map' key={index}>
        <img className='images-map3' src={item.urlToImage}/>
        <p className='title-map3'>{item.author}</p>
        <p className='description-map3'>{item.content}</p>
     </div>
      ))}
    </div> 
     <div className='Map-4'>
      {this.state.series.slice(10,15).map((item, index)  => (
     <div className='Map4' key={index}>
        <p className='title-map4'>{item.author}</p> 
        <p className='description-map4'>{item.content}</p>
     </div>
      ))}
    </div> 
    <div className='Map-5'>
      {this.state.series.slice(15,17).map((item, index)  => (
     <div className='Map5' key={index}>
        <img className='images-map5' src={item.urlToImage}/>
        <p className='title-map5'>{item.author}</p>
        <p className='description-map5'>{item.content}</p>
     </div>
      ))}
    </div> 
  </body>
   <footer>
     <div className='Footer-back'>
       <p className='Footer-back-text'>Voltar ao topo</p>
     </div>
     <div className='Footer-text'>
     <p>Direitos exclusivos do jornal Wall Street para devidos fins lucrativos</p>
     <div className='Footer-box'>
     <img className='Footer-logo' src= {image} alt='logo'></img>
     <img className ='Footer-box1'src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAA0ElEQVRYhe2WMQ6CQBBF/xCk9RKWFnSewQZobI1XUFsrY6OJeBPNMrfwBHoN7RcLoiFmMRBHsJjX7Tb/5e8mM4CidAyVD3G8yNsINSZ95XptBH7Cd12WDSVxNdx5AyqgAiqgAiqgAs5p6JpazwkZRfMBEZ0ADCUEGjWQJMsxEZ2lwoG3jchFqY0VgDUAjyg/WtubZdnu/q1AkwY2KIS3YdifSIQDFX+ggpu1+ZT5YIyRiG4kQFdrkTCnF7noghpPQBwE/oh5Lx5el58sqMrf8AA/GTFYDuk6/QAAAABJRU5ErkJggg==" alt='caixa comentário'></img>
     <img className='Footer-box2'src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABvElEQVRIieWWsWoUURSGv3M3aBrZpEsrdsEuLzCNYCG702zwKSRsJIKNM52RZCJo5QsICjozrYsIxsLGR0ghaCtELHY197dYTNZk2HHIXRP0r2buuef/uHPPnHvhf5PVTYjjtQVorUpabOh9AHpfFDtvG4PjeG1Bch+Ayw2hRwCzW3m+/ej4uJuW5L3dPA0UQNLdqvG5aUnO2ZI0fi6KrHZbJhXH/UTiHrBU6d3ELKSmrljSLtjmXwcXxc4AGMwCfH4+dRzfjiT/GFim4nczI83zLAkK7nQ2Lkk/XgBNm8XpwK3W6Kr3bhFA4qkZH48njAsuMFiauwgeAOfckzzfehMCUqUzK66zrepOZ/2aGRuSPywqyW91u+tfJB6U5far0GAHMDbWAFiZiK1I2p0F9BAMUBTZphnpr3cz0rLMUoAoSuZnBgbI8ywxI51sElGUzLfb+y9Dg090rsmu1OslF4bD/efA9dDgqVU9Gn3tm3EjNLQWbKbge/tH4Fnq/ByLv8s+w/jS1e321cRYR7M/VcVrVnzwTGKvCfAEX7pfFai9OfZ6d9rD4fdVM640IZrxzXv/uiwfvmuS9+/qJ6hAl0Aa2m+oAAAAAElFTkSuQmCC" alt='girar tela'></img>
     <img className='Footer-box3'src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAAqElEQVRYhe3UMQ6CQBSE4V/fcgGw0ptwA4ml5/QanITOxwVwo40aCDYmhifJfMk2m9lkmh0QEVmOmZ3MUg/cX8csOdBEZAA204LJ6/pcluX+fefe0bYXz3nYLZ0B2I4L5nybPACoqgM5D1VEZlbwH62roFnq3btJwL3DrPCIzCfN8yeNflZxBY5BGfktDbWGOsC6CmqoNdTRNNQa6gDrKqih1lCLiHztAdSasHOZtMLZAAAAAElFTkSuQmCC" alt='tela grau de atividade'></img>
     </div>
     </div>
   </footer>
</div>
    );
  }
}

export default Tudum;