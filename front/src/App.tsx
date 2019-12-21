import React from 'react';
import logo from './logo.svg';
import './App.css';

type cardProps = {
  //onSubmit: Function
}

type cardState = {
  title: string
  contents: string
}

class CardCtl extends React.Component<cardProps, cardState> {
  constructor(props: cardProps){
    super(props);
    this.state = {title: "", contents: ""};
  }

  onChangeField(e: React.ChangeEvent){
    // this.setState({ title: e.target.})
  }

  handleSubmit(e: React.FormEvent){
    e.preventDefault()
    let title = this.state.title.trim()

  }

  render(){
    return (
      <div className="cardCtl">
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            className="card-ctl-input"
            placeholder="Card title"
            value={this.state.title}
            onChange={this.onChangeField}/>
          <textarea
            className="card-ctl-input"
            placeholder="Card contents."
            value={this.state.contents}
            onChange={this.onChangeField}>
          </textarea>
          <button className="card-ctl-submit">Add!</button>
        </form>
      </div>
    );
  }
}

const flexItem: React.FC = () => {
  return (
    <div className="flex-item">
      
    </div>
  );
}

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>React transition sample</h1>
      <CardCtl />
    </div>
  );
}

export default App;
