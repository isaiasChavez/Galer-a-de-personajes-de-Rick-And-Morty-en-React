import React, { Component } from "react";
import Meme from "./Meme";

import Search from "./Search";
import { getDataByPopular, getDataBySearch } from "../Services/memes";
class MemeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      isFetch: true,
    };
  }
  async componentDidMount() {
    const responseJson = await getDataByPopular();
    this.setState({
      memes: responseJson.results,
      isFetch: false,
    });
  }
  handleSearch = async (search) => {
    const responseJson = await getDataBySearch(search);
    console.log(responseJson);
    this.setState({ memes: responseJson.results });
  };
  componentDidUpdate() {}
  render() {
    const { isFetch, memes } = this.state;

    //   const name = this.state.memes[0].name;

    return (
      <>
        <Search handleSearch={this.handleSearch} />
        {isFetch && "Loading"}

        <section className="memes-container">
          {memes.map(({ name, id, image, status, species }) => (
            <Meme
              name={name}
              key={id}
              image={image}
              status={status}
              species={species}
            />
          ))}
        </section>
      </>
    );
  }
}

export default MemeContainer;
