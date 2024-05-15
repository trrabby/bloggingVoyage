import React from 'react'

export const CommentCard = ({comment}) => {

    const {commentData, postId, commenter_email, commenter_name, commenter_pic, creation_time} = comment
    return (
        <div data-aos="fade-up" data-aos-duration="1000">
            <div className='shadow-accent shadow-sm hover:shadow-accent hover:shadow-lg rounded-lg bg-[#7dbdbdbb] text-white'>
                <a
                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                >
                    {/* <span
                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span> */}

                    <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                            <h3 className="text-lg font-bold sm:text-xl">
                                {commenter_name || "No Name Found"}
                                
                            </h3>
                            <h1>{commenter_email}</h1>
                        </div>

                        <div className="hidden sm:block sm:shrink-0">
                            <img
                                alt="no img"
                                src={commenter_pic}
                                className="size-16 rounded-lg object-cover shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="mt-2">
                        <p className="text-pretty text-sm font-bold">
                           Comment: {commentData}
                        </p>
                    </div>

                    <dl className="mt-2 flex justify-end gap-4 sm:gap-6">
                        <div className="flex flex-col">
                            <dt className="text-sm font-medium">{creation_time}</dt>
                            <dd className="text-sm font-medium">Commented on</dd>
                        </div>

                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium">Reading time</dt>
                            <dd className="text-xs">3 minute</dd>
                        </div>
                    </dl>
                </a>
            </div>
        </div>
    )
}
