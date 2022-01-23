import { useState } from 'react'
import { Post } from './model/Post'


interface Props {
    post: Post
}

const PostView: React.FC<Props> = (props: Props) => {

    const [post] = useState(props.post);
    
    return (
        <div></div>
    )
}

export default PostView