class Header extends React.Component {
    render(){
        return <p>Header</p>
    }
}

const jsx = (
    <div>
        <h1>this is title</h1>
        <Header />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));