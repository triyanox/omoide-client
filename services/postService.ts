import http from './http'
import config from '../production/config.json'

const posts = config.endpoint + '/v1/posts'

// create a post
export async function createPost(post: {
  title: string
  content: string
  category: string
}) {
  return http.post(posts, post)
}

// update a post
export async function updatePost(post: {
  link: string
  title: string
  content: string
  category: string
}) {
  return http.put(posts + '/' + post.link, post)
}

// get post by user link
export async function getPostByUserLink(userLink: string) {
  return http.get(posts + '/user/' + userLink)
}

// get post by link
export async function getPostByLink(link: string) {
  return http.get(posts + '/' + link)
}

// delete by link
export async function deletePostByLink(link: string) {
  return http.delete(posts + '/' + link)
}

// update likes
export async function updateLikes(link: string) {
  return http.put(posts + '/likes/' + link)
}

// search a post
export async function searchPost(search: string) {
  return http.get(posts + '/search/' + search)
}
