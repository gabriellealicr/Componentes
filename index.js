import React from 'react'
import {Colors, colors} from '.theme/colors'
import {Background, Box} from './BoxStyles'


 export type Props = {
    color?: Colors
    children : React.ReactNode
 }

 const ColorBox = ({children,color = 'dark-high',...rest }: Props) >={
    return(
        <Background>
        {children}
        <Box color = {colors[color]} />
        </Background>
    )
 }

 export default ColorBox