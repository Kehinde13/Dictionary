import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function Meanings(result) {

    return (
        <div>
            <Card sx={{ minWidth: 275 }} >
                <CardContent key={result}>
                    <Typography sx={{ fontSize: 32 }} color="text.secondary" >
                        {result[0].word}
                        <br />
                        {result[0].phonetic}
                    </Typography>
                   
                  
                    {
                        result[0].phonetics.length === 0 || result[0].phonetics[0].audio === "" || result[0].phonetics[0].audio === ""
                            ? (<Typography> Audio not available for this word</Typography>) :
                            (<audio
                                style={{ backgroundColor: "#fff", borderRadius: 10 }}
                                src={result[0].phonetics[0].audio || result[0].phonetics[1].audio}
                                controls
                            >
                                Your browser does not support the audio element.
                            </audio>)
                    }
                  
                  
                
                    {result[0].meanings.map((meaning) => (
                        <Box>
                            <Typography sx={{ fontSize: 24, my: 2 }} color="text.secondary">
                                {meaning.partOfSpeech}
                            </Typography>
                            {meaning.definitions.map((item) => (
                             <Box>
                                <Typography>
                                     {item.definition}
                                </Typography>
                                <hr />
                                <Typography>
                                     {item.example}
                                </Typography> 
                             </Box>           
                            ))}
                        </Box>

                    ))}
                    
                </CardContent>
            </Card>
        </div>
    )
}

export default Meanings