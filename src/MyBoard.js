import { useState } from "react";

function MyBoard() {

    const [newPost, setNewPost] = useState({ title: '', content: '' });
    const [posts, setPosts] = useState([]);

    return (
        <>
            <div className="black-nav">
                <h1>나만의 게시판</h1>
            </div>

            <div>
                <h2>게시글 목록</h2>
                <ul>
                    {
                        posts.map((post) => {
                            return <li className="list" key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                            </li>
                        })
                    }
                </ul>
            </div>

            <div>
                <h2>새 게시글 작성</h2>
                <input type="text"
                    placeholder="제목"
                    onChange={(e) => {
                        setNewPost({ ...newPost, title: e.target.value });
                    }}
                ></input><p></p>
                <textarea placeholder="내용"
                    onChange={(e) => {
                        setNewPost({ ...newPost, content: e.target.value });
                    }}
                >

                </textarea><p></p>

                <button onClick={() => {
                    if (newPost.title && newPost.content) {
                        const updatePosts = [...posts, { ...newPost, id: Date.now() }];
                        setPosts(updatePosts);
                        setNewPost({ title: '', content: '' });
                    }
                }}>게시</button>
            </div>
        </>
    )
}


export default MyBoard;