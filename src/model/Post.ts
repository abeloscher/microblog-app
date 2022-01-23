interface Post {
    _id: string
    title: string
    body: string
}

function getAllPosts(): Promise<Array<Post>> {
    return new Promise<Array<Post>>((resolve, reject) => {
        fetch("http://localhost:3000/post").then((resp) => {
            resp.json().then((posts) => {
                resolve(posts)
            })
        }).catch((err) => {
            reject(err)
        })
    })
}

export { getAllPosts }
export type { Post }