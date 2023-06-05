import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return ( <TextField label="search" fullWidth variant="standard" type='search' value={value} onChange={onChange} 
    sx={{ 
        marginBottom: "1.5rem",
    }}
    />
    ); 
};

export default Search;