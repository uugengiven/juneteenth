'use client'

import { useState } from 'react';
import * as Label from '@radix-ui/react-label';
import * as Select from '@radix-ui/react-select';

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [collection, setCollection] = useState('juneteenth');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [filename, setFilename] = useState('');

  const clearValues = () => {
    setFile(null);
    //setCollection('juneteenth');
    setDescription('');
    setFilePreview(null);
    setFilename('');
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      setFilePreview(URL.createObjectURL(files[0]));
      setFilename(files[0].name.split('.').slice(0, -1).join('.'));
    }
  };

  const isitworking = (v:string) => {
    console.log(v);
    setCollection(v);

  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    setUploading(true);

    const response = await fetch('/api/admin/photos/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filename: filename,
        originalName: file.name,
        contentType: file.type,
        collection,
        description,
      }),
    });

    if (response.ok) {
      const { url, fields } = await response.json();

      const formData = new FormData();
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      formData.append('file', file);

      const uploadResponse = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (uploadResponse.ok) {
        alert('Upload successful!');
        clearValues();
      } else {
        console.error('S3 Upload Error:', uploadResponse);
        alert('Upload failed.');
      }
    } else {
      alert('Failed to get pre-signed URL.');
    }

    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Upload a Picture</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label.Root className="block text-lg font-medium text-gray-700" htmlFor="file">
              Select File
              <span className="text-red-700 px-1">*</span>
            </Label.Root>
            <div className="mt-1 flex items-center">
              <label
                htmlFor="file"
                className="inline-block py-2 px-4 shadow-md text-lg font-medium rounded-md text-white bg-gradient-to-r from-red-700 to-yellow-500 hover:from-red-800 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"
              >
                Choose File
              </label>
              <input
                id="file"
                type="file"
                onChange={handleFileChange}
                accept="image/png, image/jpeg"
                className="sr-only"
                required
              />
              {filePreview && (
                <img
                  src={filePreview}
                  alt="File Preview"
                  className="ml-4 h-16 w-16 object-cover rounded-md"
                />
              )}
            </div>
          </div>
          <div>
            <Label.Root className="block text-lg font-medium text-gray-700" htmlFor="filename">
              Filename
            </Label.Root>
            <input
              id="filename"
              type="text"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:outline-none"
              required
            />
          </div>
          <div>
            <Label.Root className="block text-lg font-medium text-gray-700" htmlFor="collection">
              Collection
              <span className="text-red-700 px-1">*</span>
            </Label.Root>
            <Select.Root 
                value={collection}
                onValueChange={isitworking}
            >
              <Select.Trigger
                id="collection"
                className="mt-1 inline-flex items-center justify-between w-full px-3 py-2 text-lg border-b border-gray-300 focus:border-green-700 focus:outline-none"
              >
                <Select.Value placeholder="Select a collection..."/>
                <Select.Icon className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </Select.Icon>
              </Select.Trigger>
              <Select.Content className="bg-white shadow-lg rounded-md">
                <Select.Item value="juneteenth" className="px-3 py-2 text-lg hover:bg-gray-100">
                    <Select.ItemText>Juneteenth</Select.ItemText>
                </Select.Item>
                <Select.Item value="blackmusic" className="px-3 py-2 text-lg hover:bg-gray-100">
                  <Select.ItemText>Black Music Festival</Select.ItemText>
                </Select.Item>
              </Select.Content>
            </Select.Root>
          </div>
          <div>
            <Label.Root className="block text-lg font-medium text-gray-700" htmlFor="description">
              Description
            </Label.Root>
            <input
              id="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:outline-none"
              placeholder="Optional"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={uploading}
              className="w-full py-3 px-4 shadow-md text-lg font-medium rounded-md text-white bg-gradient-to-r from-red-700 to-yellow-500 hover:from-red-800 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
