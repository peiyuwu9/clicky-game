import React, { Component } from "react";
import charactors from "./charactor.json";
import Container from "./components/Container/Container";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Row from "./components/Row/Row";

class App extends Component {
    state = {
        charactors,
        highScore = 0,
        clicked =[]
    };

    randomize = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    componentDidMount() {
        this.setState({
            charactors: this.randomize(this.state.charactors)
        });
    };

    handleOnClickImage = id => {
        if (this.state.clicked.includes(id)) {
            alert("You loss the game!");
            this.resetGame();
        }
        else {
            this.setState(
                preState => ({
                    clicked: [...preState.clicked, id],
                    charactors: this.randomize(this.state.charactors)
                }),
                () => {
                    this.checkHighScore();
                    this.handleWin();
                }
            )
        }
    };

    checkHighScore = () => {
        if (this.state.clicked.length > this.state.highestScore) {
            this.setState({ highScore: this.state.clicked.length });
        }
    }

    handleWin = () => {
        if (this.state.clicked.length === this.state.charactors.length) {
            alert("You Win!");
            this.resetGame();
        }
    }

    resetGame = () => {
        this.setState({
            charactors: this.randomize(this.state.charactors),
            clicked =[]
        });
    }

    render() {

        const { charactors, highScore, clicked } = this.state;

        return (
            <Container>
                <Jumbotron score={clicked.length} highScore={highScore} />
                <Row>
                    {charactors.map(({ id, name, image }) => {
                        return (
                            <Section key={id} size="col-4">
                                <Card name={name}>
                                    <Image
                                        id={id}
                                        name={name}
                                        image={image}
                                        onClick={this.handleOnClickImage}
                                    />
                                </Card>
                            </Section>
                        )
                    }
                    )}
                </Row>
            </Container>
        )
    }
}


export default App;