import React from 'react';

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={ spans:0 };
    this.articleRef=React.createRef();
  }

  componentDidMount() {
    this.articleRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = () => {
    const height = this.articleRef.current.clientHeight;
    let x=0;
    if (this.props.author!==null) {
        x=this.props.author.length;
    }
    const spans = Math.ceil(height/10)+Math.ceil(this.props.title.length/32)*2+Math.ceil(x/40)*2+4;
    console.log(Math.ceil(height/10))
    console.log(spans);
    this.setState({ spans });
  };

  render() {
    //console.log(this.props);
    const image=this.props.article;
    const url=this.props.url;
    const author=this.props.author;
    const title=this.props.title;
    const time=this.props.time.split("Z")[0].split("T");

    return (
      <div id="card" style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img style={{ width: '100%' }}
          ref={this.articleRef}
          alt="#"
          src={image}
        />
        <div className="container" style={{ padding: 3 }}>
          <a href={url}><h4><b>{title}</b></h4></a>
          <p>{author}<br/>{time[0]+"   "+time[1]+" EST"}</p>
        </div>
      </div>
    );
  }
}

export default ArticleCard;
