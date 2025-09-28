// src/components/chat/chat-bottombar.tsx
'use client';

import { ChatRequestOptions } from 'ai';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUp } from 'lucide-react';
import React, { useEffect } from 'react';

interface ChatBottombarProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  isLoading: boolean;
  stop: () => void;
  input: string;
  isToolInProgress: boolean;
}

export default function ChatBottombar({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  stop,
  isToolInProgress,
}: ChatBottombarProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' &&
      !e.nativeEvent.isComposing &&
      !isToolInProgress &&
      input.trim()
    ) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full pb-2 md:pb-8"
    >
      <form onSubmit={handleSubmit} className="relative w-full md:px-4">
        <div className="mx-auto flex items-center rounded-2xl border border-purple-200/20 bg-gradient-to-r from-white/20 via-purple-50/30 to-pink-50/20 backdrop-blur-xl py-3 pr-2 pl-6 shadow-2xl hover:shadow-purple-200/20 transition-all duration-300">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-[1px]">
            <div className="h-full w-full rounded-2xl bg-gradient-to-r from-white/90 via-purple-50/50 to-pink-50/50 backdrop-blur-xl" />
          </div>
          
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder={
              isToolInProgress ? 'Processing your request...' : 'Ask me anything about Aru ✨'
            }
            className="relative z-10 text-md w-full border-none bg-transparent text-gray-700 placeholder:text-gray-500 focus:outline-none dark:text-gray-200 dark:placeholder:text-gray-400"
            disabled={isToolInProgress || isLoading}
          />

          <motion.button
            type="submit"
            disabled={isLoading || !input.trim() || isToolInProgress}
            className="relative z-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-3 text-white disabled:opacity-50 hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-300/30"
            onClick={(e) => {
              if (isLoading) {
                e.preventDefault();
                stop();
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full"
              />
            ) : (
              <ArrowUp className="h-5 w-5" />
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
