import React, { Component } from 'react';
import './App.css';
import Navbar from "./component/Navbar/Navbar.js";
import Container from "./component/Container/Container.js";
import Footer from "./component/Footer/Footer.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "Lorem Ipsum",
      username: "lorem",
      workAt: "Ipsum Uni",
      email: "ipsumlorem@loremail.com",
      ava: "https://awsimages.detik.net.id/community/media/visual/2022/03/15/kenapa-logo-halal-diganti-ada-perpindahan-wewenang-dari-mui-ke-kemenag.jpeg?w=1200",
      highlight: ["highlight 1", "highlight 2", "etc"],
      popularRepo: [
        {repoName: "repository-name", repoDesc: "this is ur repo's description", repoLang: "ur repo's main language"},
        {repoName: "repository-name", repoDesc: "this is ur repo's description", repoLang: "ur repo's main language"},
        {repoName: "repository-name", repoDesc: "this is ur repo's description", repoLang: "ur repo's main language"},
        {repoName: "repository-name", repoDesc: "this is ur repo's description", repoLang: "ur repo's main language"},
      ],
      monthlyActivity: {
        month: "August 2022",
        activity: [
          {title: "ur activity", repo: "ur repo"},
          {title: "ur activity", repo: "ur repo"},
          {title: "ur activity", repo: "ur repo"},
        ]
      }
    }
  }
  render(){
    return (
      <>
        <Navbar/>
        <Container props={this.state}/>
        <Footer/>
      </>
    )
  }
}

export default App;
