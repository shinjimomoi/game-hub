import { HStack, List, ListItem, Text, Image, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImgUrl from "../services/image-url";

interface Props{
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const {data, isLoading, error} = useGenres();
  if (isLoading) return <Spinner/>;
  if(error) return null;
  return (
    <List>
      {data.map(genre =>
        <ListItem paddingY={1} key={genre.id}>
          <HStack>
            <Image boxSize="32px" borderRadius={4} src={getCroppedImgUrl(genre.image_background)} />
            <Button fontWeight={ genre.id === selectedGenre?.id ? "bold" : "normal" } key={genre.id} onClick={(e) => onSelectGenre(genre)} variant="link" fontSize="lg">{genre.name}</Button>
          </HStack>
        </ListItem>
      )}
    </List>
  )
}

export default GenreList;
