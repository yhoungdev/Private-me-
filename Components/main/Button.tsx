
import {Button} from '@chakra-ui/react';

interface Props {
    children ?: any ,
    width ?: any,
    color ?: any ,
    px ?: any,
    bg ?: any,
    onClick ?: any
    loadingText ?: any,
    isLoading ?: any
}

const  InterfaceButton =( {width , isLoading, loadingText, color, children, px, bg, onClick} : Props ) => {
    return (
        <>

            <Button width={width} color={color} _hover={{}}
             onClick={onClick} loadingText={loadingText} isLoading={isLoading}
             px={px ? px : '3em'} p={'1.5em'} bg={bg} my={'1em'}>
                {children}
            </Button>
        
        </>
    )
}

export default InterfaceButton;