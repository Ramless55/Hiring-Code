import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags(props) {

    const handleLabel = (event) => {
        const value = event.target.value
        props.setPublicationData((prev) => ({...prev, labels: [...prev, value]}))
    }
    
    return (
        <Autocomplete
            onclick={handleLabel}
            multiple
            sx={{marginTop: 2.5}}
            id="checkboxes-tags-demo"
            options={top30Technologies}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.title}
                </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} label="Checkboxes" placeholder="Favorites" />
            )}
        />
    );
}

const top30Technologies = [
    { title: 'C'},
    { title: 'C#'},
    { title: 'C++'},
    { title: 'Cobol'},
    { title: 'CSS'},
    { title: 'F#'},
    { title: 'Go'},
    { title: 'Git'},
    { title: 'HTML'},
    { title: 'Java'},
    { title: 'JavaScript'},
    { title: 'Kotlin'},
    { title: '.JSON'},
    { title: 'MongoDB'},
    { title: '.NET'},
    { title: 'Node.js'},
    { title: 'Pascal'},
    { title: 'Python'},
    { title: 'PHP'},
    { title: 'Postman'},
    { title: 'Ruby'},
    { title: 'Rust'},
    { title: 'SQL'},
    { title: 'Swift'},
    { title: 'TypeScript'},
    { title: 'Visual Basic'},
    { title: 'XML'},
];
