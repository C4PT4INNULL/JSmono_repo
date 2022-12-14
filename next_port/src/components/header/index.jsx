import React from 'react'
import LOGO from '../svgComponent/Logo'
import Text from '../../common/Text/Text'
import Git from '../svgComponent/Git'
import Insta from '../svgComponent/Insta'
import Linkdin from '../svgComponent/Linkdin'
import { ContactBlock, LogoBlock, HeaderContainer, NavLinksBlock, SocialBlock, HeaderLeft, HeaderRight } from './styles'
import Box from '../../common/Box/Box'
import Link from 'next/link'

const Header = ({ onMouseEnter, onMouseLeave, bgColor, animate, transition, bgVariant, textVariants, textAnimate, animatePath }) => {
    return (
        <HeaderContainer>
            <HeaderLeft variants={bgVariant} animate={animate} transition={transition}>
                <LogoBlock bgColor={bgColor}>
                    <Box p="0" animate onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link href="/">
                            <LOGO animatePath={animatePath} fillOne="#F2F2F2" fillTwo='#F2F2F2' />
                        </Link>
                    </Box>
                </LogoBlock>
                <NavLinksBlock bgColor={bgColor}>
                    <Link href="/about">
                        <Text animate={textAnimate} variants={textVariants} transition={transition} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>ABOUT</Text>
                    </Link>
                    <Link href="/work">
                        <Text animate={textAnimate} variants={textVariants} transition={transition} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>WORK</Text>
                    </Link>
                </NavLinksBlock>
            </HeaderLeft>
            <HeaderRight variants={bgVariant} animate={animate} transition={transition}>
                <SocialBlock bgColor={bgColor} variants={bgVariant} animate={animate} transition={transition}>
                    <Box animate onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Git animatePath={animatePath} />
                    </Box>
                    <Box animate onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Insta animatePath={animatePath} />
                    </Box>
                    <Box animate onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Linkdin animatePath={animatePath} />
                    </Box>
                </SocialBlock>
                <ContactBlock bgColor={bgColor} variants={bgVariant} animate={animate} transition={transition}>
                    <Link href='/contact'>
                        <Text onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} animate={textAnimate} variants={textVariants} transition={transition}>
                            GET IN TOUCH
                        </Text>
                    </Link>
                </ContactBlock>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;