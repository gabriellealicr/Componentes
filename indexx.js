import React from 'react'
import {BodyM, Display, HeadingL, HeadingM, HeadingS, HeadingXS, StyledProps, Subheading} from '.TypographyStyles'
import {Colors, colors} from '.theme/colors'


type Variants = 'Display' | 'HeadingL' | 'HeadingM' | 'HeadingS' | 'HeadingXS' | 'Subheading' | 'BodyM'

export type Props = {
    children: React.ReactNode
    color?: Colors
    variant?: Variants
    bold?:Boolean
}

const variants: Record<Variants, React.FunctionComponent<StyledProps>>={
    Display : Display,
    HeadingL : HeadingL,
    HeadingM : HeadingM,
    HeadingS : HeadingS,
    HeadingXS : HeadingXS,
    Subheading : Subheading,
    BodyM : BodyM
}

const Typography = ({children, color = 'dark-high',variant = 'BodyM',bold=false,...rest}:Props) >= {
 const Component = variants[variant]

 return(
     <Component color = {colors[color]}>
     {children}
     </Component>
 )

}

export defaults Typography