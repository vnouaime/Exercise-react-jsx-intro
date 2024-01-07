const App = () => (
    <div>
        <Tweet username="vera" date="1/6/24" name="Vera N." message="My first tweet." />
        <Tweet username="testuser" date="10/23/20" name="Test User" message="My first tweet." />
        <Tweet username="testuser2" date="1/6/24" name="Test User 2" message="My first tweet." />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))