class Randomizer extends React.Component {
    render() {
        return (
            <div>
                <h1>Randomizer</h1>
                <Header />
                <Action />
                <Options/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return <p>Let me make a random decision for you</p>
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>Select Random</button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Enter Your Option"></input>
                    &nbsp;<button>Add Option</button>
                </form>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <h3>These are your options</h3>
            </div>
        );
    }
}



ReactDOM.render(<Randomizer/>, document.getElementById('app'));