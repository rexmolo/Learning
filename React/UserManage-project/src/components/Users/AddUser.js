import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        // console.log(enteredUsername, enteredAge);

        if (enteredUsername.trim().length ===0 || enteredAge.trim().length ===0) {
            setError({
                title:'error',
                message:'please fill up each input'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title:'wrong age',
                message:'please input age >0'
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
        // why doesn't re-render? need reflect to input

        console.log(enteredUsername, enteredAge);
    }

    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>)}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>

    );
}

export default AddUser;