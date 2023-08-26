import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';
function Home() {
    const [who, setWho] = React.useState('');

  const handleChange = (event) => {
    setWho(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.alert("called")
    /*try {
        const response = await axios.post('http://127.0.0.1:5000/api/recruitersList', { data: who });
        console.log(response.data.message);
        
    } catch (error) {
        console.error('Error posting data:', error);
    }*/
    if(who=='1'){
        location.replace('/recruiter')
    }
    else if(who=='2'){
        location.replace('/candidate')
    }
};
    return(
        <div>
            
            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Who are you?</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={who}
    label="Who?"
    onChange={handleChange}
  >
    <MenuItem value={'1'}>Recruiter</MenuItem>
    <MenuItem value={'2'}>Candidate</MenuItem>
  </Select>
  <Stack spacing={2} direction="row">
  <Button variant="contained" onClick={handleSubmit}>Next</Button>
  </Stack>
</FormControl>
        </div>
    )
}
export default Home;