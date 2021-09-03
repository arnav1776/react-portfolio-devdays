import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaLaptop, FaCode, FaWifi } from 'react-icons/fa'

function Social() {
    return (
        <HStack spacing="24">
            <Icon as={FaLaptop} boxSize="50" />
            <Icon as={FaCode} boxSize="50" />
            <Icon as={FaWifi} boxSize="50" />
        </HStack>
    )
}

export default Social
