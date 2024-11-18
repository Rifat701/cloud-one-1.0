import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: 'You',
      time: '1:17 PM',
      text: 'What was the revenue generated during the Black Friday Sale 2022 campaign?',
    },
    {
      sender: 'Assistify',
      time: '1:17 PM',
      text: 'The revenue generated during the Black Friday Sale 2022 campaign was $20,000.',
    },
    {
      sender: 'You',
      time: '1:18 PM',
      text: 'What was the open rate for the Black Friday Sale 2022 campaign?',
    },
    {
      sender: 'Assistify',
      time: '1:18 PM',
      text: 'The open rate for the Black Friday Sale 2022 campaign was 25%.',
    },
  ]);
  
  const [userInput, setUserInput] = useState('');
  const chatListRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [messages]);

  const submitMessage = () => {
    if (userInput.trim()) {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });

      // Add user message
      setMessages(prev => [...prev, {
        sender: 'You',
        time: currentTime,
        text: userInput,
      }]);

      setUserInput(''); // Clear input

      // Simulate Assistify's response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          sender: 'Assistify',
          time: currentTime,
          text: 'Free quote limit reached. Please upgrade for unlimited access.',
        }]);
      }, 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      submitMessage();
    }
  };

  return (
    <div className="hero-chat mx-850">
      <div className="hero-chat-list" ref={chatListRef}>
        {messages.map((message, index) => (
          <div key={index} className="hero-chat-item fade-in">
            <Image
              src={`/img/${message.sender === 'You' ? 'user.svg' : 'user-assistify.svg'}`}
              alt={message.sender}
              width={32}
              height={32}
            />
            <div className="hero-chat-item-content">
              <h3>
                {message.sender} <span>{message.time}</span>
              </h3>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-chat-input">
        <input
          type="text"
          placeholder="Type your message"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={submitMessage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_83_965"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_83_965)">
              <path
                d="M3 20V14L11 12L3 10V4L22 12L3 20Z"
                fill="url(#paint0_linear_83_965)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_83_965"
                x1="3"
                y1="4"
                x2="24.0458"
                y2="7.42352"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A570FF" />
                <stop offset="0.500005" stopColor="#FF6EB2" />
                <stop offset="1" stopColor="#FFAD66" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}
