import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
 
dayjs.extend(relativeTime);
 
export default function Board({ board }) {

    return (
        <a href={`/board/${board.id}`}>
        <div className="p-6 flex space-x-2 hover:bg-sky-100">
            <img src='img/whiteboard.png' className='w-10 h-10 m-2 align-middle'/>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-800">{board.user.name}</span>
                        <small className="ml-2 text-sm text-gray-600">{dayjs(board.created_at).fromNow()}</small>
                    </div>
                </div>
                <p className="mt-4 text-lg text-gray-900">{board.title}</p>
            </div>
        </div>
        </a>
    );
}