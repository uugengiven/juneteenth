'use client'

import * as Toast from '@radix-ui/react-toast';
import { useEffect, useState } from 'react';

const ToastNotification = () => {
  const [open, setOpen] = useState(false);
  const ticketUrl = 'https://fevo-enterprise.com/event/Imani0619';

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Toast.Provider>
      <Toast.Root
        className="bg-gradient-to-br from-red-700 via-orange-500 to-yellow-400 rounded-md shadow-lg p-4 mb-4 mx-auto max-w-md"
        open={open}
        onOpenChange={setOpen}
      >
        <div className="flex items-center justify-between">
          <div>
            <Toast.Action
              className="text-white text-2xl font-medium"
              asChild
              altText="Buy tickets"
            >
              <a href={ticketUrl} target="_blank" rel="noopener noreferrer">
              Join us at the Riverhound&apos;s game on Juneteenth
              </a>
            </Toast.Action>
          </div>
          <Toast.Close className="ml-4 text-gray-500 hover:text-gray-700">
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Toast.Close>
        </div>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 p-6" />
    </Toast.Provider>
  );
};

export default ToastNotification;