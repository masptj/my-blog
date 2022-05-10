import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'
// import { GatsbyImage as Img} from "gatsby-plugin-image"

import * as S from './styled'


const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
        query {
            avatarImage: file(relativePath: { eq: "profile-image.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED)
                    }
                }
            }`
    )

    return <S.AvatarWrapper image={avatarImage.childImageSharp.gatsbyImageData} />
}

export default Avatar