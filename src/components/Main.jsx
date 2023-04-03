import {
  FormControl,
  Input,
  InputLabel,
  Typography
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Meanings from './Meanings'

function Main() {
  const [word, setWord] = useState("")
  const [result, setResult] = useState([])

  const getWord = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      setResult(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWord()
  }, [word])

  function handleSearch(e) {
    e.preventDefault()
    getWord()
  }

  
  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          width: { xs: '90%', md: '50ch' },
          mt: 2
        }}>
        <InputLabel htmlFor="search-for-a-word">Search for a word</InputLabel>
        <Input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setWord(e.target.value)}
          value={word}
          required
          endAdornment={
            <SearchIcon
              sx={{
                cursor: "pointer"
              }}
              onClick={handleSearch}
            />
          }
        />

      </FormControl>

      {result.length === 0 ?
        (<Typography
          variant='h4'
          align="center"
          mt={1}
        >
          Enter your word on the search bar
        </Typography>) :
        (
          <Meanings {...result} key={result} />
        )}

      
    </div>
  )
}

export default Main

