import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';
import { useRouter } from './hooks/useRouter';
import { LandingPage } from './pages/LandingPage';
import { ChaptersPage } from './pages/ChaptersPage';
import { ChapterDetailPage } from './pages/ChapterDetailPage';
import { QuizPage } from './pages/QuizPage';
import { ProgressPage } from './pages/ProgressPage';
import { BookmarksPage } from './pages/BookmarksPage';
import { SearchPage } from './pages/SearchPage';
import { MentorPage } from './pages/MentorPage';
import { AskGitaPage } from './pages/AskGitaPage';
import { AboutPage } from './pages/AboutPage';

function App() {
  const { route } = useRouter();

  // Apply theme-transition class to body
  useEffect(() => {
    document.body.classList.add('theme-transition');
  }, []);

  const renderPage = () => {
    const path = route.path;

    if (path === '/' || path === '') return <LandingPage />;
    if (path === '/chapters') return <ChaptersPage />;
    if (path.startsWith('/chapter/')) {
      const num = parseInt(path.split('/')[2], 10);
      if (!isNaN(num)) return <ChapterDetailPage chapterNumber={num} />;
      return <ChaptersPage />;
    }
    if (path === '/quiz') return <QuizPage chapterNumber={0} />;
    if (path.startsWith('/quiz/')) {
      const num = parseInt(path.split('/')[2], 10);
      if (!isNaN(num)) return <QuizPage chapterNumber={num} />;
      return <QuizPage chapterNumber={0} />;
    }
    if (path === '/progress') return <ProgressPage />;
    if (path === '/bookmarks') return <BookmarksPage />;
    if (path === '/search') return <SearchPage />;
    if (path === '/mentor') return <MentorPage />;
    if (path === '/ask-gita') return <AskGitaPage />;
    if (path === '/about') return <AboutPage />;

    // 404
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-bold text-ink-900 dark:text-ink-50 mb-3">Page not found</h1>
        <p className="text-ink-500 dark:text-ink-400 mb-6">The page you are looking for does not exist.</p>
        <a
          href="#/"
          className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-marigold-400 to-saffron-600 text-white font-medium"
        >
          Back to home
        </a>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-ink-50 dark:bg-ink-950 text-ink-900 dark:text-ink-50 flex flex-col">
      <Navbar />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}

export default App;
