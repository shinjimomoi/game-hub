import { Card, CardHeader, CardBody, CardFooter, Image, Heading, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'

interface Props {
  game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={16} overflow={'hidden'}>
      <Image src={game.background_image}/>
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <CardFooter>{game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)}</CardFooter>
      </CardBody>
    </Card>
  )
}

export default GameCard
