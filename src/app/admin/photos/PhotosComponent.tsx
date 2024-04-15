'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ImageModel from '@/data/models/Images';
import Image from 'next/image';

const AdminPhotosComponent = () => {
  const [photos, setPhotos] = useState<ImageModel[]>([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('/api/admin/photos');
      const data = await response.json();
      setPhotos(data.photos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const handleDelete = async (photoId: number) => {
    try {
      await fetch(`/api/admin/photos/${photoId}/delete`, {
        method: 'DELETE',
      });
      setPhotos(photos.filter((photo) => photo.id !== photoId));
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Admin Photos</h1>

      <div className="mb-4">
        <Link href="/admin/photos/upload">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Upload Photos
          </button>
        </Link>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Preview</th>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Filename</th>
            <th className="border px-4 py-2">Collection</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {photos.map((photo) => (
            <tr key={photo.id}>
              <td className="border px-4 py-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_PHOTO_URL}/${photo.collection}/${photo.filename}`}
                  alt={photo.filename}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </td>
              <td className="border px-4 py-2">{photo.id}</td>
              <td className="border px-4 py-2">{photo.filename}</td>
              <td className="border px-4 py-2">{photo.collection}</td>
              <td className="border px-4 py-2">{photo.description}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleDelete(photo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPhotosComponent;