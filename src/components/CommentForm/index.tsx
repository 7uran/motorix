import React, { useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const CommentForm = ({ blogId }: { blogId: string }) => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const commentRef = useRef<HTMLTextAreaElement>(null);


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const username = usernameRef.current?.value;
        const comment = commentRef.current?.value;

        if (!username || !comment) {
            toast.error('Please fill in all the fields');
            return;
        }



        try {
            const response = await axios.post(
                `http://localhost:3001/api/v1/blogs/${blogId}/comments`,
                {
                    username,
                    content: comment,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            toast.success('Comment submitted successfully');
            location.reload();
        } catch (error) {
            toast.error('Error submitting comment');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p className="text-4xl font-medium">Leave a comment</p>
            </div>
            <div className="flex flex-col gap-6">
                <div className="md:flex gap-8">
                    <input
                        ref={usernameRef}
                        className="outline-none focus:placeholder:text-black placeholder:transition placeholder:duration-300 w-full bg-transparent border-stone-300 py-3 border-b-2"
                        placeholder="Your Name *"
                        required
                    />
                    <input
                        className="outline-none focus:placeholder:text-black placeholder:transition placeholder:duration-300 w-full bg-transparent border-stone-300 py-3 border-b-2"
                        placeholder="Your E-mail *"
                        type="email"
                        required
                    />
                </div>
                <textarea
                    ref={commentRef}
                    rows={3}
                    placeholder="Your comment *"
                    className="resize-none outline-none focus:placeholder:text-black placeholder:transition placeholder:duration-300 w-full bg-transparent border-stone-300 py-3 border-b-2"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="bg-main text-white font-medium px-10 py-4 hover:bg-orange-600 transition duration-300"
                >
                    Leave a comment
                </button>
            </div>
        </form>
    );
};

export default CommentForm;
