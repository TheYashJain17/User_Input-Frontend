import React from 'react'

import '../../src/App.css';

import {Button} from '@mui/material'

import {Stack} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'

/*Here are getting all the props we sent through our app.js and recieving it here 
in the form of object destructuring.*/

const DataFields = ({name , email , index , data , setData}) => {

/*Here we are making a function to delete the entry we want to delete.

Inside the function i am storing the data array which we recieved through props in a variable arr.

And now we are using .splice method on our array and inside it we are providing the index value of the
entry we want to delete and saying delete 1 element from that index means the entry on that index value 
will be Deleted.
And atLast we are using the setData which we recieved as props and setting the value of arr after the deletion
of that particular entry and here we are using spread operator so that we can get the remaining the array.*/

  const removeItem = () => {

    let arr = data;

    arr.splice(index , 1);

    setData([...arr]);
      
  }


  return (

  <div className='data_val'>

  <h2>{name}</h2>
  <h2>{email}</h2>


  <Stack>

  {/* whenever we will click on this button our removeItem function will be invoked and inside that it will get
  the index value and this also we are getting from the props. */}

  <Button onClick={() => removeItem(index)} variant="contained" color="error">

  <DeleteIcon/>

  </Button>
  

  </Stack>

    

</div>

    
  )
}

export default DataFields