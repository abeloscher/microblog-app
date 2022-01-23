import { useEffect, useState } from 'react'
import { Post, getAllPosts } from './model/Post'
import PostPreview from './PostPreview';

const PostPreviewContainer: React.FC = () => {
    const [data, setData] = useState([] as Array<Post>);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllPosts().then((posts) => {
            setData(posts)
            setLoading(false)
        }).catch((err) => {
            setData([])
            setLoading(false)
            console.error(err)
        })
    }, [])

    return (
        <div>
            {loading ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="d-inline-flex flex-wrap p-3">
                    {data.map((post) => {
                        return (
                            <PostPreview post={post} />
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default PostPreviewContainer