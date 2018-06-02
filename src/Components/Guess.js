import React, { Component } from 'react';

class BusquedaHogar extends Component {
  constructor(){
     super()
     this.state = {
      llegada :"",
      result: ""
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    var input = event.target.id;
    this.setState({[input]: event.target.value});  
  }

  handleSubmit(event) {
    let number = this.state.llegada;

    if(!number){
      this.setState({
        resultado: "Incorrect Number format"
      })  
    }else{
      this.setState({
        resultado: false
      })  

  /*************************************************************************************************************************************/
  //llamado de la api de scala
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://codebreakerservices.herokuapp.com/answer/'+number;
        fetch(proxyUrl + targetUrl, {
          method: 'GET'
        }).then(response => response.json())
        .then(data => {
          this.setState({
            resultado: "Answer: "+data
          });
        })
        .catch(error => console.log(error));
      
    }
    event.preventDefault();
  }

  render() {
    console.log(this.state.result)
    return (
          <div className="Guess">
            <div className="MenuPrincipal" >
            <form onSubmit={this.handleSubmit}>
              <div className="form-group" >
                <label>Number  
                <input className="form-control" id="llegada" type="number" name="llegada"   onChange={this.handleChange} min={this.state.minLlegada} max="5000-01-01" required/>
                </label>
              </div>    
              <button type="submit" className="btn">Guess</button>
              <span className={this.state.resultado ? 'alert' : 'hidden'}>{this.state.resultado}</span>
            </form>
            </div>      
          </div>
    );
  }
}

export default BusquedaHogar;