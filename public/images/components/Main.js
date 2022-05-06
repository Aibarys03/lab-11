
import React, { Component } from 'react'
export default class Main extends Component {

 

  constructor(props){
    super(props);
      this.state = {
        message: "Our best offers of individual courses!"
    };}
    buttonChange = () => {
      this.setState({
      message: "Oops, something went wrong, try again later"
    })
  }
  
    
  

  render() {
    const Repits = [
      { name: "Oleg Murmansk", age: "35",exp:"7"},
      { name: "Dylan Pol", age: "25",exp:"3"},
      { name: "Nikita Bercov", age: "29",exp:"5"},
      { name: "Jenat Brige", age: "40",exp:"10"},
      { name: "Julius Born", age: "57",exp:"20"},
    ];



  return(
        <div className='Main'>
          <header>
          <div className='Pod'>
   <ul>
     <li className='programma'>Welcome to the "Tutor" Educational Center</li>
     <div className='prog'>
     <li>The surest way to a high—quality command of English is maximum immersion in the language environment and constant practice of speech.</li>
     <li>Our individual packages provide just the same kind of training method.</li>
     <li>In individual classes with your personal teacher, you only sort out what you need in your professional field!</li>
     <li>The selection of the program is carried out with you individually, depending on the needs and goals that you want to achieve.</li>
     <li>In addition to individual lessons, one of the most important aspects is conversational practice, which you can get from us in unlimited quantities!</li>
     </div>
     </ul>
          </div>
          <img className='first' src="../images/first.jpg" alt="prepod"/>
          <img className='second' src="../images/second.jpg" alt="prepodsha"/>
          <img className='third' src="../images/third.jpg" alt="uchenic"/>
          </header>
<body>
  <div className='body-zag'></div>

          <div className='Vybor-paketa'>
            <li className='Zagolovok'>{this.state.message}</li>
            <li className='Podzagolovok'>Choose the package that suits you:</li>
          </div>
          
<div className='Standart-shapka'>
<ul>
    <li>Standart</li>
    <li>35 000тг</li>
  </ul>
</div>

<div className='Standart-footer'>
  <ul>
    <li>Group form of training</li>
    <li>An experienced teacher</li>
    <li>12 hours per month</li>
    <li>The duration of the lesson is 60 minutes</li>
  </ul>
</div>
<div className='button-first'><button onClick={()=>{alert("Sorry, but all the seats are taken for this course.Try it another time.")} } className='button-first-but'>sign up</button></div>

<div className='Silver-shapka'>
<ul>
    <li>Advanced</li>
    <li>50 000тг</li>
  </ul>
</div>
<div className='Silver-footer'>
  <ul>
    <li>Individual form of training</li>
    <li>Foreign teacher</li>
    <li>12 hours per month</li>
    <li>The duration of the lesson is 60 minutes</li>
  </ul>
</div>
<div className='button-second'><button onClick={this.buttonChange} className='button-second-but'>sign up</button></div>


<div className='Professional-shapka'>
<ul>
    <li>Professional</li>
    <li>80 000тг</li>
  </ul>
</div>
<div className='Professional-footer'>
  <ul>
    <li>Individual form of training</li>
    <li>Foreign teacher</li>
    <li>16 hours per month</li>
    <li>The duration of the lesson is 70 minutes</li>
  </ul>
</div>
<div className='button-third'><button className='button-third-but'>sign up</button></div>


<div className='reps'>Our tutors</div>

<img className='foto1' src="../images/1.jpg" alt="foto"/>
<img className='foto2' src="../images/2.jpg" alt="foto"/>
<img className='foto3' src="../images/3.jpg" alt="foto"/>
<img className='foto4' src="../images/4.jpg" alt="foto"/>
<img className='foto5' src="../images/5.jpg" alt="foto"/>

<div>
  {Repits.map((userInfo) => {
    return (
      <div className='user'>
        <h1>Hello, My name is {userInfo.name} , I am {userInfo.age} years old. I've been teaching for {userInfo.exp} years.</h1>
        
    </div>
    );
  })}
</div>

</body>
</div>
  )}}

