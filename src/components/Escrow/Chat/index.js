import dayjs from 'dayjs';
import {
  addIcon,
  checkIcon,
  detailIcon,
  notificationImage,
  sendIcon,
} from '../../../assets/icons';
import Icon from '../../Utils/Icon';
import Message from './Message';
import { useState, useRef, useEffect } from 'react';

const messagesInitial = [
  {
    text: 'Hi buyer! ',
    self: true,
    time: dayjs().toDate(),
    delivered: true,
  },
  {
    text: 'Hey Seller! I’m a huge fan of you artwork',
    self: false,
    time: dayjs().toDate(),
    delivered: true,
  },
  {
    text: 'I’ll ship your dunks soon',
    self: true,
    time: dayjs().toDate(),
    delivered: true,
  },
  {
    text: 'Hope you like it',
    self: true,
    time: dayjs().toDate(),
    delivered: true,
  },
  {
    text: 'Awesome!',
    self: false,
    time: dayjs().toDate(),
    delivered: true,
  },
  {
    text: 'Really looking forward to it',
    self: false,
    time: dayjs().toDate(),
    delivered: true,
  },
  {
    text: 'Alrightyyy!',
    self: true,
    time: dayjs().toDate(),
    delivered: false,
  },
  {
    text: 'Hey idiots! what can I help you with today?',
    moderator: true,
    time: dayjs().toDate(),
    delivered: false,
  },
];

const Chat = () => {
  const [messages, setMessages] = useState(messagesInitial);
  const [message, setMessage] = useState('');

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="w-2/5 overflow-hidden rounded-md border-[0.5px] fixed bottom-0 ">
      {/* head */}
      <div className="flex items-center gap-3 px-8 pt-3 pb-5 bg-gray-500">
        <div className="w-12 h-12 overflow-hidden rounded-full ">
          <img
            src={notificationImage}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h3 className="font-medium leading-5 text-white ">Buyer</h3>
          <h4 className="leading-4 text-[13px] font-bold text-green">Online</h4>
        </div>
      </div>

      {/* chat */}
      <div className="flex-1 w-full pt-8 ">
        <div className="flex flex-col w-full h-full  px-5 scrollbar-thin overflow-auto max-h-[55vh]">
          {/* info */}
          <div className="flex items-center gap-4 border-[0.5px] border-gray-200 bg-gray-50 rounded-t-lg py-4 px-5">
            <div className="w-[42px] h-[42px] relative  ">
              <img
                src={notificationImage}
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
              <span className="absolute bottom-0 right-0 flex justify-center w-3 h-3 rounded-full item-center bg-blue-light fill-white">
                <Icon icon={checkIcon} className="w-2.5 h-2.5 " />
              </span>
            </div>
            <div>
              <h4 className="text-xs leading-5 text-gray-600 ">Owner</h4>

              <p className="text-sm font-medium text-gray-800">
                Nike Air Max by{' '}
                <button className="text-blue-link">Collection Name</button>
              </p>
            </div>
          </div>

          <div className="flex mt-1 items-start gap-4 border-[0.5px] border-gray-200 bg-gray-50 rounded-b-lg py-4 px-5">
            <div className="w-[42px] h-[42px] relative rounded-full overflow-hidden flex-shrink-0">
              <img
                src={detailIcon}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h4 className="text-xs leading-5 text-gray-600 ">
                OwItem detailner
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-800">
                50% of the primary market sale earnings will be awarded to UI8.
                4,921 curated design resources to energize your creative
                workflow. 🔥
              </p>
            </div>
          </div>

          {/* messages */}
          <div className="flex flex-col w-full gap-1 mt-7 ">
            {messages.map((message, index) => (
              <Message
                key={index}
                self={message.self}
                delivered={message.delivered}
                text={message.text}
                time={message.time}
                moderator={message.moderator}
                // last message have ref
                ref={index === messages.length - 1 ? messagesEndRef : null}
              />
            ))}
          </div>

          {/* message input */}
        </div>
        <div className="relative mx-5 border-t">
          <div className="absolute left-0 -translate-y-1/2 top-1/2 ">
            <button className="relative overflow-hidden rounded-full shadow-md ">
              <Icon icon={addIcon} />

              <input
                className="absolute inset-0 opacity-0 cursor-pointer file:cursor-pointer "
                type="file"
                multiple
                // accept="image/*"
                onChange={(e) => {
                  console.log(e.target.files);
                }}
              />
            </button>
          </div>
          <input
            type="text"
            className="w-full h-full text-sm font-medium placeholder:text-gray-500 text-gray-700 leading-5 border-0 focus:outline-none focus:ring-0 py-6.5 px-20"
            placeholder="Write a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                setMessages([
                  ...messages,
                  {
                    text: message,
                    self: true,
                    time: dayjs().toDate(),
                    delivered: false,
                  },
                ]);
                setMessage('');
              }
            }}
          />
          <button
            className="absolute right-0 -translate-y-1/2 rounded-full shadow-md top-1/2 "
            onClick={() => {
              setMessages([
                ...messages,
                {
                  text: message,
                  self: true,
                  time: new Date(),
                  delivered: false,
                },
              ]);
              setMessage('');
            }}
          >
            <Icon icon={sendIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
