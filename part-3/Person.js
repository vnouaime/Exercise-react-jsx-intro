const MaxNameLength = 6

const Person = ({ name, age, hobbies}) => {
    const voteText = age >= 18
      ? "Please go vote!"
      : "Not old enough to vote!";

    const hobbiesList = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person</p>

            <ul>
                <li>Name: {name.slice(0, MaxNameLength)}</li>
                <li>Age: {age}</li>
            </ul>
            <ul>
                Hobbies:
                {hobbiesList}
            </ul>
            <h3>{voteText}</h3>
        </div>
    )
}