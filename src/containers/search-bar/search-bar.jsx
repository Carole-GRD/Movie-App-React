import { useState } from 'react';
import style from './search-bar.module.css';

const SearchBar = (props) => {

    const { placeholder } = props;             // communication parent-enfant  
    const {onSearch} = props;                  // communication enfant-parent  


    const [input, setInput] = useState('');
    
    const handleClick = () => {
        // console.log(input);
        onSearch(input)

    }

    return (
        <div className={style.container}>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder={placeholder} />
            <button onClick={handleClick}>Search</button>
        </div>
    );
};

export default SearchBar;