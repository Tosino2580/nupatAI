/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 22/11/2025 - 13:53:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import React, { useState, useEffect } from 'react';
import { Wand2, Sparkles, Code, Eye, Plus, MessageSquare, Search, Settings, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

const MainPage = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [generatedSite, setGeneratedSite] = useState('');
  
  const [previewWidth, setPreviewWidth] = useState(window.innerWidth / 2);
  const [isResizing, setIsResizing] = useState(false);
  const [previewMode, setPreviewMode] = useState('preview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    window.location.reload();
  };

  const handleNewChat = () => {
    setPrompt('');
    setGeneratedSite('');
    setShowPreview(false);
  };

  const handleEnhancePrompt = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setTimeout(() => {
      const enhanced = `Create a modern, responsive ${prompt} with clean design, intuitive navigation, mobile-first approach, SEO optimization, and engaging user experience. Include relevant sections, call-to-action buttons, and professional styling.`;
      setPrompt(enhanced);
      setIsGenerating(false);
    }, 1500);
  };

  const handleGenerateSite = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setShowPreview(true);
    
    setTimeout(() => {
      const sampleSite = `
      <html><body><h1>Generated Site</h1></body></html>`;
      setGeneratedSite(sampleSite);
      setIsGenerating(false);
    }, 2000);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newWidth = window.innerWidth - e.clientX;
      if (newWidth > 400 && newWidth < window.innerWidth - 400) {
        setPreviewWidth(newWidth);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className="main-page-bg font-montserrat relative flex min-h-screen overflow-hidden bg-black">
        
        <div className="absolute inset-0 z-0">
            <div className="bg-grid-pattern absolute inset-0 opacity-30"></div>

            <div className="animate-blob absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-700/40 blur-3xl"></div>
            <div className="animate-blob animation-delay-2000 absolute right-0 top-1/2 h-96 w-96 rounded-full bg-blue-500/40 blur-3xl"></div>
            <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-blue-400/40 blur-3xl"></div>
        </div>

            <div className="relative z-10 flex h-screen w-full">
                {/* Main Content Area */}
                <div 
                className="transition-all duration-500 ease-in-out p-8 flex flex-col"
                style={{ width: showPreview ? `calc(100% - ${previewWidth}px)` : '100%' }}
                >
                <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">
                    {/* Header */}
                    <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-600/10 px-4 py-2 rounded-full border border-blue-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-300 text-sm font-medium">AI-Powered Website </span>
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                       Intelligent. Fast.
                        
                        <span className="bg-gradient-to-r ml-2 from-blue-900 via-blue-400 to-blue-800 bg-clip-text text-transparent">
                        Helpful.
                        </span>
                    </h1>
                    
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
                        Your AI assistant is here to provide insights, suggestions, and solutions instantly  making every task smarter and easier.
                    </p>
                    </div>

                    {/* Prompt Input Area */}
                    <div className="space-y-6">
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-300 mb-3 text-center">
                        Where should we begin?
                        </label>
                        <textarea
        <div className="relative z-10 flex h-screen w-full">

            <div 
              className="flex flex-col p-8 transition-all duration-500 ease-in-out"
              style={{ width: showPreview ? `calc(100% - ${previewWidth}px)` : '100%' }}
            >
              <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center">

                <div className="mb-12 text-center">

                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/10 px-4 py-2">
                      <Sparkles className="h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium text-blue-300">AI Website Builder</span>
                  </div>

                  <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
                      Your Personal
                      <br />
                      <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                      AI Website Builder
                      </span>
                  </h1>

                  <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
                      Turn ideas into fully generated websites in seconds.
                  </p>
                </div>

                <div className="space-y-6">

                  <div className="relative">
                      <label className="mb-3 block text-sm font-medium text-gray-300">
                        Describe your website
                      </label>

                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="E.g., Create a dark landing page for a crypto AI tool..."
                        className="h-32 w-full resize-none rounded-xl border border-gray-700/60 bg-gray-900/60 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        disabled={isGenerating}
                      />

                      <div className="absolute bottom-3 right-3">
                        <Code className="h-5 w-5 text-gray-500" />
                      </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                      <button
                        onClick={handleEnhancePrompt}
                        disabled={!prompt.trim() || isGenerating}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-700/60 bg-gray-900/60 px-6 py-3 text-gray-300 transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isGenerating ? (
                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
                        ) : (
                            <Wand2 className="h-5 w-5" />
                        )}
                        Enhance Prompt
                      </button>
                      
                      <button
                        onClick={handleGenerateSite}
                        disabled={!prompt.trim() || isGenerating}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 font-medium text-white shadow-lg transition-all hover:from-blue-500 hover:to-blue-300 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isGenerating ? (
                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        ) : (
                            <Sparkles className="h-5 w-5" />
                        )}
                        Generate Site
                      </button>
                  </div>
                </div>

                {isGenerating && (
                  <div className="mt-6 rounded-xl border border-blue-600/20 bg-blue-600/10 p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-400 border-t-transparent" />
                        <span className="font-medium text-blue-300">
                          {showPreview ? 'Generating your website...' : 'Enhancing your prompt...'}
                        </span>
                      </div>
                  </div>
                )}

              </div>
            </div>

            {showPreview && (
                <div 
                    onMouseDown={handleMouseDown}
                    className="w-2 cursor-col-resize bg-gray-700 transition-colors hover:bg-blue-500"
                ></div>
            )}

            {showPreview && (
              <div 
                className="flex flex-col border-l border-gray-700/60 bg-gray-900/60 backdrop-blur-sm"
                style={{ width: `${previewWidth}px` }}
              >
                <div className="flex items-center justify-between border-b border-gray-700/60 p-4">

                  <div className="flex items-center gap-2 rounded-lg border border-gray-700/60 bg-gray-900/80 p-1">
                      <button 
                          onClick={() => setPreviewMode('preview')}
                          className={`px-3 py-1 text-sm rounded-md ${previewMode === 'preview' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800'}`}
                      >
                          <Eye className="mr-1 inline h-4 w-4" />
                          Preview
                      </button>

                      <button
                          onClick={() => setPreviewMode('code')}
                          className={`px-3 py-1 text-sm rounded-md ${previewMode === 'code' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800'}`}
                      >
                          <Code className="mr-1 inline h-4 w-4" />
                          Code
                      </button>
                  </div>

                  <button
                      onClick={() => setShowPreview(false)}
                      className="text-2xl text-gray-400 transition-colors hover:text-white"
                  >
                      &times;
                  </button>
                </div>
                
                <div className="flex-1 p-4">
                  {isGenerating ? (
                      <div className="flex h-full items-center justify-center">
                          <div className="text-center">
                              <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-2 border-blue-400 border-t-transparent" />
                              <p className="text-gray-300">Generating your website...</p>
                          </div>
                      </div>
                  ) : generatedSite ? (
                      previewMode === 'preview' ? (
                          <iframe
                              srcDoc={generatedSite}
                              className="h-full w-full rounded-lg border border-gray-700/60 bg-white"
                              title="Generated Website Preview"
                          />
                      ) : (
                          <pre className="h-full w-full overflow-auto rounded-lg border border-gray-700/60 bg-gray-900 p-4 text-sm text-white">
                              <code>{generatedSite.trim()}</code>
                          </pre>
                      )
                  ) : (
                      <div className="flex h-full items-center justify-center">
                          <div className="text-center text-gray-500">
                              <Code className="mx-auto mb-4 h-16 w-16 opacity-50" />
                              <p>Your generated website will appear here</p>
                          </div>
                      </div>
                  )}
                </div>
              </div>
            )}
        </div>
    </div>
  );
};

export default MainPage;
