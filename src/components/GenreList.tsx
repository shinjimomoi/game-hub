import { HStack, List, ListItem, Text, Image, Spinner, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"
import getCroppedImgUrl from "../services/image-url";

const GenreList = () => {
  const {data, isLoading, error} = useGenres();
  if (isLoading) return <Spinner/>;
  if(error) return null;
  return (
    <List>
      {data.map(genre =>
        <ListItem paddingY={1} key={genre.id}>
          <HStack>
            <Image boxSize="32px" borderRadius={4} src={getCroppedImgUrl(genre.image_background)} />
            <Button key={genre.id} onClick={(e) => console.log(genre)} variant="link" fontSize="lg">{genre.name}</Button>
          </HStack>
        </ListItem>
      )}
    </List>
  )
}

export default GenreList;
