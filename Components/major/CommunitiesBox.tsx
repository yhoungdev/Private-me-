import { Box , Text} from "@chakra-ui/react";
import  CommunityData from './CommunityData'
const CommunityBox =() => {
    return (
        <>
            <Box p={'2em'} bg={'var(--dark-shade)'}>
                <Text my={'0.5em'} fontWeight={'bold'}> Top Communities  </Text>
                <CommunityData/>
            </Box>
        </>
    )
}

export default CommunityBox;