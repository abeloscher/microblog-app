import { useState } from 'react'
import { Post } from './model/Post'


interface Props {
    post: Post
}

const PostPreview: React.FC<Props> = (props: Props) => {

    const [post] = useState(props.post);

    return (
        <div className="card border-dark my-3 mx-3 shadow card-sizing">
            <div className="card-header">
                <h2 className="card-title card-image-top">{post.title}</h2>
            </div>
            <div className="card-body text-dark card-text-style">
                <p className="card-text text-muted card-text-style">{post.body}</p>
            </div>
            <div className="card-footer card-tags-style">tags</div>
        </div>
    )
}

export default PostPreview