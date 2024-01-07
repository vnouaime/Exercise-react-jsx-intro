const App = () => (
    <div>
        <Person 
            name="Vera"
            age={25}
            hobbies={["swimming", "hiking", "skiing"]}
        />
        <Person 
            name="Test"
            age={16}
            hobbies={["painting", "drawing", "running"]}
        />
        <Person 
            name="Test 2"
            age={40}
            hobbies={["reading", "writing", "biking"]}
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))