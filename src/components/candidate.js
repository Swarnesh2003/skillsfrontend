import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
function Candidate() {
    const [outData, setOutData] = useState([]);
    const [recData, setRecData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [nameData, setNameData] = useState('Name');
    const [items, setItems] = useState([]); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        window.alert("called")
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/recruitersList', { name: nameData , skills:items});
            console.log(typeof response.data.message);
            setOutData(response.data.message);
            setRecData(response.data.recom);

            
        } catch (error) {
            console.error('Error posting data:', error);
        }
        
    }
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue(''); // Clear the input after adding
        }
    };

    return(
        <div>
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setNameData(e.target.value)}
                />
                <br></br>
                <h3>Add Skills</h3>
                <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter skill"
            />
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
                <button onClick={handleSubmit}>Submit</button>
                <br>
                </br><br></br>
                <h4>Companies recruiting your skills: </h4>{outData}
                <br></br>
                <h4>Recommended skills to develop: </h4>{recData}
        </div>
    )
}
export default Candidate;