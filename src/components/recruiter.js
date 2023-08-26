import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';
function Recruiter() {
    const [nameData, setInputData] = useState('Name');
    const handleSubmit = async (e) => {
        e.preventDefault();
        window.alert("called")
        /*try {
            const response = await axios.post('http://127.0.0.1:5000/api/recruitersList', { data: who });
            console.log(response.data.message);
            
        } catch (error) {
            console.error('Error posting data:', error);
        }*/
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Recruiter;