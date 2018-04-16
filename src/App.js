import React from 'react';
import './App.css';

class Quote extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      text:'yo'
    }
  }

componentDidMount() {
    const head =document.querySelector('h1')
    const top =document.getElementById('top')

    const endpoint = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    const quotes = this.state.quotes
    const submit = document.querySelector('.submit')
    const random = Math.floor(Math.random() * 100)


    submit.addEventListener('click', () => {
      head.style.opacity = '0'
      top.style.opacity ='0'
      setTimeout(this.submit,800)
    })
    head.addEventListener('transitionend', () => {
      head.style.opacity = '1'
      top.style.opacity ='1'
    })

    fetch(endpoint)
        .then(a =>a.json())
        .then(data => {quotes.push(...data.quotes)
          head.innerHTML = `${quotes[random].quote}
                            </br></br>
                            <span id ='author'>
                            ${this.state.quotes[random].author}
                            </span>`;
          this.setState({
            text:this.state.quotes[random].quote
            })
          head.style.opacity = '1'
          top.style.opacity ='1'
          });
          this.setState({
            quotes:quotes
          });
        }

tweet = () => {
    const url = "https://twitter.com/intent/tweet?text=" + this.state.text
    window.open(url)
    }

submit = () => {
  const random = Math.floor(Math.random() * 101)
  const random2 = Math.floor(Math.random() * 360)
  const random25 = Math.floor(Math.random() * 360)
  const random3 = Math.floor(Math.random() * 80)
  const random4 = Math.floor(Math.random() * 80)
  const head = document.querySelector('h1')

    head.innerHTML = `${this.state.quotes[random].quote}
                      </br></br>
                      <span id ='author'>
                      ${this.state.quotes[random].author}
                      </span>`
    this.setState({
      text:this.state.quotes[random].quote
      })
    document.body.style.background=
    `linear-gradient(hsl(${random2},${random3}%,${random4}%),
    hsl(${random25},${random4}%,${random3}%))`
    }

render() {
    return (
      <div className="App">

      <div id ='top'>
      <div className ='submit'> Need a Quote?</div>
      <div className ='twit' onClick = {this.tweet}>
      <img alt ='' src ="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png"/>
      </div>
      </div>
      <h1></h1>
      </div>
      );
    }
  }

export default Quote;
