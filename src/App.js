import React from 'react';
import './App.css';
import { thisExpression } from '@babel/types';
import './my-sass.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faArrowAltCircleUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
// import Comments from './components/comments';
// import Moment from 'react-moment';
// import 'moment-timezone';

class App extends React.Component {

  constructor() {
    super();
    this.state = { 
      children: "",
      title: "",
      upvotes: "",
      comments: "",
      showCommentsModal: false,
      selectedPostIndex: 0
    }
  }
  
  async getData() {
    this.url = "https://www.reddit.com/r/news/.json?=";
    this.response = await fetch(this.url);
    this.data = await this.response.json();
    this.title = [];
    this.upvotes = [];
    this.children = [];
    for (let children of this.data.data.children)
    {
      this.children.push(children.data);
      this.title.push(children.data.title);
      this.upvotes.push(children.data.ups);
    }
    this.setState({ children: this.children, title: this.title, upvotes: this.upvotes });
  }


  async getCommentsData(post){
    console.log(post);
    var post_url = post.permalink;
    post_url = post_url.substring(0, post_url.length - 1);
    this.commenturl = "https://www.reddit.com/"+post_url+".json";
    this.commentresponse = await fetch(this.commenturl);
    this.commentdata = await this.commentresponse.json();
    var subreddit_comments = [];
    for(var i = 0; i<this.commentdata.length;i++){
      for(var j = 0;j<this.commentdata[i].data.children.length;j++){
        if(this.commentdata[i].data.children[j].data.body)
          subreddit_comments.push(this.commentdata[i].data.children[j].data);
      }
    }
    this.setState({comments: subreddit_comments});
  }

  async componentDidMount(){
    this.getData();
  }

  getComments() {
    var post = this.state.children[this.state.selectedPostIndex];
    this.getCommentsData(post);
    var comments = [];
    for(var i =0;i<this.state.comments.length;i++){
      comments.push(<li key={i} className="card"> 
        <div className="commentBody">
          {this.state.comments[i].body}
        </div> 
        <div className="flex-justify-between">
          <p className="author"> posted by {this.state.comments[i].author}</p>
          <p className="author"><FontAwesomeIcon icon={faArrowAltCircleUp} /> {this.state.comments.ups} upvotes</p>
        </div>
      </li>);
    }
    return comments;
  }

  getListItem(){
    var list = [];
    var datetime = []
    for(let i=0; i<this.state.children.length; i++){
      datetime.push((new Date(this.children[i].created * 1000).toDateString()))
      list.push(<li key={i} className="card">
      <p className="author">{datetime[i]}</p>
      <div className="updates">
        <a className="newsTitle">{this.children[i].title}</a>
      </div>

      <p className="author">posted by {this.children[i].author}</p>
        <div className="article flex">
          <p className="actualArticle"><a href={this.children[i].url}>Read Full Article <FontAwesomeIcon icon={faExternalLinkAlt} /></a>  </p>
          <div className="flex">
            {/* <Router> */}
              <p> 
              <a onClick={()=>{
                this.showComments(i);
                // this.setState({ showCommentsModal:  })
              }} >
              <FontAwesomeIcon icon={faComments} /> {this.children[i].num_comments}
              </a>  comments</p>
              {/* <p className="comments">
                <Link to="/comments"><FontAwesomeIcon icon={faComments} /> {this.children[i].num_comments} comments</Link>
              </p> */}
            {/* <Switch>
              <Route path="/comments">
                <Comments />
              </Route>
            </Switch>
            </Router> */}
            <p className="upvotes"><FontAwesomeIcon icon={faArrowAltCircleUp} /> {this.children[i].ups} upvotes</p>
          </div>
        </div>
      </li>
      )
    }
    // console.log(datetime);
    return list;
  }

  showComments(i) {
    console.log(i);
    console.log(this.state.children);
    var post = this.state.children[i];
    // this.getComments(post);
    this.setState({ showCommentsModal: true, selectedPostIndex : i });
  }


  render()
  {
    return (
      <React.Fragment>
        <h1 className="text-center page-title">Reddit News Client</h1>
        <ul>{ 
          this.state.title.length === 0 ?
            "loading news articles from subreddit r/news ..." : 
            this.state.showCommentsModal ? this.getComments() : this.getListItem()
          }
        </ul>
      </React.Fragment>
    )
  }
}

function Comments() {
  return <h1>This is the comments Section</h1>
}

export default App;