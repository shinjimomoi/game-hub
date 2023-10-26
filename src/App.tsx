import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import AccordionComponent from './components/AccordionComponent'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null> (null);

  return ( <Grid
    templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: "1fr",
      lg: "200px 1fr"
    }}

    >
    <GridItem area={"nav"} >
      <Navbar/>
    </GridItem>
    <Show above='lg'>
      <GridItem padding={4} area={"aside"} >
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}/>
      </GridItem>
    </Show>
      <GridItem padding={4} area={"main"}>
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
  </Grid>

  )
}

export default App
