import { HStack, List, ListItem, Text, Image, Spinner } from "@chakra-ui/react";
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      )}
    </List>
  )
}

export default GenreList;
