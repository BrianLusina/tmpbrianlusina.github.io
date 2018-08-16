import React, { Component } from 'react'
import { shape, arrayOf, string, number } from 'prop-types'
import PostItem from '../components/posts/PostItem'
import moment from 'moment'

class DesignPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [],
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		const {
			data: {
				allMarkdownRemark: { edges: posts },
			},
		} = nextProps

		if (posts !== prevState.posts) {
			return {
				...prevState,
				posts,
			}
		} else {
			return null
		}
	}

	renderPosts(){
		const {
			data: {
				allMarkdownRemark: { edges: posts },
			},
		} = this.props
		// limit these items to most 6 recent posts
		return posts.map(
			(
				{
					node: {
						frontmatter: {
							title,
							subtitle,
							path,
							excerpt,
							author: { avatar, link, name },
							image: { feature },
							date,
							tags,
						},
					},
				},
				index
			) => {
				const time = moment(date).format('MMMM DD, YYYY')
				return (
					<PostItem
						key={index}
						link={path}
						img={{
							src: feature,
							alt: feature,
						}}
						author={{
							name,
							avatar,
							link,
						}}
						title={title}
						subtitle={subtitle}
						date={time}
						excerpt={excerpt}
						tags={tags}
					/>
				)
			}
		)
	}

	render() {
		return <section>{this.renderPosts()}</section>
	}
}

DesignPage.propTypes = {
	data: shape({
		allMarkdownRemark: shape({
			edges: arrayOf(
				shape({
					node: shape({
						frontmatter: shape({
							title: string,
							subtitle: string,
							excerpt: string,
							date: string,
							author: shape({
								name: string,
								link: string,
								avatar: string,
							}),
							image: shape({
								feature: string,
								thumbnail: string,
								teaser: string,
								credit: string,
								creditlink: string,
							}),
							tags: arrayOf(string),
						}),
						timeToRead: number,
						html: string,
					}),
				})
			),
		}),
	}),
}

// eslint-disable-next-line no-undef
export const query = graphql`
	query TechPageQuery {
		allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "design" } } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
						title
						subtitle
						excerpt
						date(formatString: "MMMM DD, YYYY")
						author {
							name
							link
							avatar
						}
						image {
							feature
							thumbnail
							teaser
							credit
							creditlink
						}
						tags
					}
					excerpt
					timeToRead
					html
				}
			}
		}
	}
`

export default DesignPage
