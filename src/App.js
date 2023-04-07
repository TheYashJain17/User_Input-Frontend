import './App.css';

import Header from './Components/Header';

import { TextField } from '@mui/material';

import {Button} from '@mui/material';

import {Stack} from '@mui/material';

import { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';

import DataFields from './Components/DataFields';

function App() {

  //This is the section in which we are making the form through which user will enter his/her data.

  const [Name , setName] = useState('');

  const [Email , setEmail] = useState('');

  const [Data , setData] = useState([]);

  const addData = () => {

  // Now With the help of spread operator(...) we are targetting the Data which we declared inside the state
  // we are doing this becaue we want to get all the Data which we have stored inside the array , with this
  // we are showing the data of the previuos users.
  // And putting everything inside the array as we are showing multiple things.

    setData([...Data,{

      
      Name : Name,
      Email : Email
    
    }]);

    // After entering the data both the fields will gonna be set to empty again because of the below line of code.

    setName("");
    setEmail("");

  }

  

  return (
    <div className="App">

      <Header/>

      <div className='form'>

      <Stack direction="row" spacing={2}>

        {/* The field we have provided inside value in below line of code that should be equal exactly equal
        to the field we provided inside our useState(Like in both places we have Provided Name and be careful
        While Writing this as this matter is case sensitive , so both the field names should be exactly same.)*/}

        {/* Then we declare an onChange event this is like onClick event means this will get triggered when there
        would be any change , now inside that we are taking a callback function as we have already discussed
        about this as we have to take a parameter inside it therefore using a callback function.
        as parameter we have passed this is an inbuilt parameter we could have also take only e but have taken
        full name event to understand it better and now inside this function we are using the 2nd field of
        our useState(1st was Name) which is setName in this case as we want to set the value we gonna 
        provide inside this and now inside this we are using the event parameter which we delared just before
        and then using .target.value this will give us the exact value which the user is writing inside the 
        textfiled , this is how we gonna get the value and set it into the state. */}


      <TextField
      value={Name}
      onChange={(event) => setName(event.target.value)}
      id="outlines-basic"
      label="Name" 
      variant='outlined'/>

      {/* The field we have provided inside value in below line of code that should be equal exactly equal
        to the field we provided inside our useState(Like in both places we have Provided Email and  be careful
        While Writing this as this matter is case sensitive , so both the field names should be exactly same.)*/}

        {/* Then we declare an onChange event this is like onClick event means this will get triggered when there
        would be any change , now inside that we are taking a callback function as we have already discussed
        about this as we have to take a parameter inside it therefore using a callback function.
        as parameter we have passed this is an inbuilt parameter we could have also take only e but have taken
        full name event to understand it better and now inside this function we are using the 2nd field of
        our useState(1st was Email) which is setEmail in this case as we want to set the value we gonna 
        provide inside this and now inside this we are using the event parameter which we delared just before
        and then using .target.value this will give us the exact value which the user is writing inside the 
        textfiled , this is how we gonna get the value and set it into the state. */}

      <TextField 
      value={Email} 
      onChange={(event) => setEmail(event.target.value)}
      id="outlines-basic" 
      label="Email" 
      variant='outlined'/>

      <Button 
      onClick={addData}
      variant='contained' 
      color="success">
      Add
      </Button>

      </Stack>

      </div>

      {/* This is the section through which we are showing the form data */}

      <div className="data">

        <div className='data_val'>

        {/* These are the headings which are showing on the top. */}

        <h2>Name</h2>
        <h2>Email</h2>
        <h2>Remove</h2>

        </div>

        {

          // We are using .map on the array we created above in the useState and inside it using element and index
          // element will gonna contain all the data of the array and index will save us from the key error
          // and inside return we are sending the props to the component we made and we are using our element
          // as it contains all the data and using dot(.)method to store the data inside we want to.

          Data.map((element , index) => {

            return(

/*Here we are sending the whole data to our component to use it in the component file 
here we are sending name email index as well as the array we made (data) and also the setData to use it.
This is how we are making things clean and separating the things for better readablility.*/

        <DataFields name ={element.Name}  email = {element.Email} index={element.index} data={Data} setData={setData}/>

            )

          })

        }

      </div>
      
    </div>
  );
}

export default App;



            //We have declared this whole data inside another file known DataFields.jsx. 


// const removeItem = (index) => {

  //   let arr = Data;

  //   arr.splice(index , 1);

  //   setData([...arr]);

  // }

{/*  // <div>

 // <div key={index} className='data_val'>

// <h2>{element.Name}</h2>
// <h2>{element.Email}</h2> */}

{/* // <Stack>
{/* 
<Button onClick={() => removeItem(index)} variant="contained" color="error">

<DeleteIcon/>

</Button> */}

// </Stack> */}



{/* </div> */}
