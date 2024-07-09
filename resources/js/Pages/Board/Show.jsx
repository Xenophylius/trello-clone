import React from 'react';
import { usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const BoardShow = () => {
    const { auth, board } = usePage().props;

    if (!board) {
        return (
            <AuthenticatedLayout user={auth.user}>
                <div className="text-center text-gray-800 font-extrabold p-2 sm:p-2 lg:p-4">Loading...</div>
            </AuthenticatedLayout>
    );
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={board.title} />
            <h1 className="text-center text-gray-800 font-extrabold p-2 sm:p-2 lg:p-4">{board.title}</h1>
            {/* Add other board details as needed */}
        </AuthenticatedLayout>
    );
};

export default BoardShow;
