import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Loader2, MessageCircle } from 'lucide-react';
import { chatService } from '../services/chatService';
import type { ChatMessage } from '../types';


const ChatWindow: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(isOpen && messages.length === 0) {
        setMessages([{
            id: 'initial',
            text: '¡Hola! Soy el asistente de 4ailabs. Te puedo ayudar con:\n\n• Agendar una consulta GRATUITA de 15 min\n• Calcular tu ROI con IA\n• Información sobre nuestros agentes\n• Solicitar una cotización\n\n¿Qué te interesa más?',
            isUser: false,
            timestamp: new Date()
        }])
    }
  }, [isOpen, messages.length]);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await chatService.sendMessage(inputMessage);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Lo siento, ocurrió un error. Por favor, inténtalo de nuevo más tarde.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-2 sm:p-4 sm:justify-end sm:items-end bg-black/50 backdrop-blur-sm">
      <div className="bg-zinc-900 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-md h-[80vh] sm:h-[600px] flex flex-col border border-zinc-700 animate-fade-in-scale">
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-zinc-700 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-slate-500/20 rounded-lg">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm sm:text-base">Asistente Virtual</h3>
              <p className="text-xs text-slate-400">4ailabs</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-zinc-800 rounded-lg transition-all-smooth"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2.5 ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!message.isUser && <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 flex-shrink-0 mt-1" />}
              <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-xl sm:rounded-2xl p-2.5 sm:p-3 ${
                  message.isUser
                    ? 'bg-slate-500 text-white rounded-br-none'
                    : 'bg-zinc-800 text-slate-200 rounded-bl-none'
                }`}
              >
                <p className="text-xs sm:text-sm leading-relaxed">{message.text}</p>
              </div>
               {message.isUser && <User className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 flex-shrink-0 mt-1" />}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 text-slate-200 rounded-xl sm:rounded-2xl p-2.5 sm:p-3">
                <div className="flex items-center gap-2">
                  <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin text-cyan-400" />
                  <span className="text-xs sm:text-sm">Escribiendo...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 sm:p-4 border-t border-zinc-700 flex-shrink-0">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escribe tu pregunta..."
              className="flex-1 bg-zinc-800 border border-zinc-600 rounded-lg px-3 sm:px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition text-sm"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="p-2.5 sm:p-3 bg-slate-500 hover:bg-slate-400 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              ) : (
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2">
        {/* Tooltip/Preview */}
        <div className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white px-4 py-2 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 text-sm max-w-xs opacity-0 animate-pulse transition-opacity duration-500 hover:opacity-100">
          ¿Necesitas ayuda? ¡Pregúntame sobre consultas GRATUITAS!
        </div>
        
        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 sm:p-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-full shadow-xl transition-all-smooth transform hover:scale-110 active:scale-95 group pulse-cta"
          aria-label="Open chat"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20"></div>
          
          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">!</span>
          </div>
        </button>
      </div>

      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Chat;