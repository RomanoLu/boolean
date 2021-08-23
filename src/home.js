import React from "react";
import { FcDisapprove } from "react-icons/fc";
import { FcApprove } from "react-icons/fc";
import Card from 'react-bootstrap/Card';
import logo from './images/logo2.png';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      questions: require("./data/food.json"), //JSON
      question: "",
      bool: "",
      pic: "",
      ID: 0
      };
    }

    componentDidMount() {
      console.log(this.state.questions.find(quest =>(quest.ID === 1)));
      this.setState({question: this.state.questions.find(quest =>(quest.ID === 1).Frage)})
      this.setState({pic: this.state.questions.find(quest =>(quest.ID === 1)).pic})
      this.setState({ID: 2})
    }

    handletrue = event =>{
      if (this.state.ID > 21){
        alert("Ende")
      }else{
      if(this.state.questions.find(quest =>(quest.ID === this.state.ID)).boolean === "true"){
        alert("Next->");
      }else{
        alert("Drink!!");
      }

      console.log(this.state.ID)
      this.setState({question: this.state.questions.find(quest =>(quest.ID === this.state.ID)).Frage})
      this.setState({pic: this.state.questions.find(quest =>(quest.ID === this.state.ID)).pic})
      this.setState({ID: this.state.ID +1})
    }
    }
    handlefalse = event =>{
      if (this.state.ID > 21){
        alert("Ende")
      }else{
      if(this.state.questions.find(quest =>(quest.ID === this.state.ID)).boolean === "false"){
        alert("Next->");
      }else{
        alert("Drink!!");
      }

      console.log(this.state.ID)
      this.setState({question: this.state.questions.find(quest =>(quest.ID === this.state.ID)).Frage})
      this.setState({pic: this.state.questions.find(quest =>(quest.ID === this.state.ID)).pic})
      this.setState({ID: this.state.ID +1})
    }
  }

      render() {
        return (
          <React.Fragment>
           
          <div className="container">
          <img src={logo} height="120px" alt="Kein Pic"/> 
           <Card style={{ width: '20rem' }} responsive>
              <Card.Img variant="top" src={this.state.pic} />
              <Card.Body>
                <Card.Title>True or False??</Card.Title>   
                <Card.Text>{this.state.question}</Card.Text>             
                <button onClick={this.handletrue}>
                <FcApprove></FcApprove>
                </button>
                
                <button className="false" onClick={this.handlefalse}>
                <FcDisapprove></FcDisapprove></button>
                    </Card.Body>
            </Card>          
           </div>
           </React.Fragment>
        );
      }
}
export default Home;