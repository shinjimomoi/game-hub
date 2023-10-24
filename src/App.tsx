import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import AccordionComponent from './components/AccordionComponent'
import GenreList from './components/GenreList'

function App() {

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
        <GenreList />
      </GridItem>
    </Show>
      <GridItem padding={4} area={"main"}>
        <GameGrid />
      </GridItem>
  </Grid>

  )
}

export default App
