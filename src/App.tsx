import { lazy, Suspense, Component, type ReactNode, type ErrorInfo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { SubscriptionProvider } from './contexts/SubscriptionContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SubscriptionBanner from './components/SubscriptionBanner';
import PaidGuard from './components/PaidGuard';
import AdminGuard from './components/AdminGuard';

// 핵심 페이지 (즉시 로드)
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LoginPage from './pages/auth/LoginPage';

// 나머지 페이지 (코드 스플리팅)
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'));

const PilgiHome = lazy(() => import('./pages/pilgi/PilgiHome'));
const ExamSelect = lazy(() => import('./pages/pilgi/ExamSelect'));
const StudyMode = lazy(() => import('./pages/pilgi/StudyMode'));
const ExamMode = lazy(() => import('./pages/pilgi/ExamMode'));
const ExamResult = lazy(() => import('./pages/pilgi/ExamResult'));
const QuestionReview = lazy(() => import('./pages/pilgi/QuestionReview'));

const SilgiHome = lazy(() => import('./pages/silgi/SilgiHome'));
const PracticeMode = lazy(() => import('./pages/silgi/PracticeMode'));
const PracticeResult = lazy(() => import('./pages/silgi/PracticeResult'));
const KeyTerms = lazy(() => import('./pages/silgi/KeyTerms'));
const SilgiExamList = lazy(() => import('./pages/silgi/SilgiExamList'));
const SilgiExamDetail = lazy(() => import('./pages/silgi/SilgiExamDetail'));
const SilgiFrequent = lazy(() => import('./pages/silgi/SilgiFrequent'));

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const StudyHistory = lazy(() => import('./pages/dashboard/StudyHistory'));

const Bookmarks = lazy(() => import('./pages/study/Bookmarks'));
const WrongAnswers = lazy(() => import('./pages/study/WrongAnswers'));

const ExamInfo = lazy(() => import('./pages/info/ExamInfo'));

const LearnHome = lazy(() => import('./pages/learn/LearnHome'));
const SubjectStudy = lazy(() => import('./pages/learn/SubjectStudy'));
const StudySummary = lazy(() => import('./pages/learn/StudySummary'));

const PracticeHome = lazy(() => import('./pages/practice/PracticeHome'));

const ServiceIntro = lazy(() => import('./pages/about/ServiceIntro'));
const InstructorIntro = lazy(() => import('./pages/about/InstructorIntro'));
const UsageGuide = lazy(() => import('./pages/about/UsageGuide'));
const Pricing = lazy(() => import('./pages/about/Pricing'));
const Terms = lazy(() => import('./pages/about/Terms'));
const Privacy = lazy(() => import('./pages/about/Privacy'));

const Checkout = lazy(() => import('./pages/payment/Checkout'));
const Confirmation = lazy(() => import('./pages/payment/Confirmation'));
const OrderHistory = lazy(() => import('./pages/payment/OrderHistory'));
const CouponRedeem = lazy(() => import('./pages/payment/CouponRedeem'));

const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));

function PageLoader() {
  return <div className="loading-page"><div className="loading-spinner" /></div>;
}

/** Lazy 로딩 실패 시 자동 새로고침 (배포 후 chunk 해시 변경 대응) */
class ChunkErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, _info: ErrorInfo) {
    if (error.message?.includes('Failed to fetch dynamically imported module') ||
        error.message?.includes('Loading chunk') ||
        error.message?.includes('Loading CSS chunk')) {
      const key = 'chunk_reload_' + window.location.pathname;
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, '1');
        window.location.reload();
        return;
      }
    }
    console.error('ChunkErrorBoundary:', error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="paid-guard-block">
          <div className="paid-guard-card">
            <i className="fa-solid fa-circle-exclamation" />
            <h2>페이지 로딩 실패</h2>
            <p>페이지를 불러오지 못했습니다. 새로고침해 주세요.</p>
            <button className="btn btn-primary" onClick={() => window.location.reload()}>
              새로고침
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function AppLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <SubscriptionBanner />
      <main id="main-content">
        <ChunkErrorBoundary>
        <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* 무료: 시험안내 */}
          <Route path="/pilgi" element={<PilgiHome />} />
          <Route path="/silgi" element={<SilgiHome />} />
          <Route path="/info" element={<ExamInfo />} />

          {/* 무료: 서비스 */}
          <Route path="/about" element={<ServiceIntro />} />
          <Route path="/about/instructor" element={<InstructorIntro />} />
          <Route path="/about/guide" element={<UsageGuide />} />
          <Route path="/about/pricing" element={<Pricing />} />
          <Route path="/service" element={<Navigate to="/about/guide" replace />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* 무료: 학습 홈 */}
          <Route path="/learn" element={<LearnHome />} />
          <Route path="/practice" element={<PracticeHome />} />

          {/* 유료: 학습 콘텐츠 */}
          <Route path="/learn/:subjectCode" element={<PaidGuard><SubjectStudy /></PaidGuard>} />
          <Route path="/summary" element={<PaidGuard><StudySummary /></PaidGuard>} />

          {/* 유료(무료체험 1회): 필기 CBT */}
          <Route path="/pilgi/select" element={<ExamSelect />} />
          <Route path="/pilgi/study" element={<PaidGuard><StudyMode /></PaidGuard>} />
          <Route path="/pilgi/exam/:id" element={<PaidGuard allowFreeTrial><ExamMode /></PaidGuard>} />
          <Route path="/pilgi/result/:id" element={<ExamResult />} />
          <Route path="/pilgi/review/:id" element={<QuestionReview />} />

          {/* 유료: 실기 */}
          <Route path="/silgi/practice" element={<PaidGuard><PracticeMode /></PaidGuard>} />
          <Route path="/silgi/result" element={<PracticeResult />} />
          <Route path="/silgi/terms" element={<KeyTerms />} />
          <Route path="/silgi/past" element={<SilgiExamList />} />
          <Route path="/silgi/past/:examId" element={<SilgiExamDetail />} />
          <Route path="/silgi/frequent" element={<SilgiFrequent />} />

          {/* 유료: 대시보드 */}
          <Route path="/dashboard" element={<PaidGuard><Dashboard /></PaidGuard>} />
          <Route path="/dashboard/history" element={<PaidGuard><StudyHistory /></PaidGuard>} />

          {/* 유료: 학습 도구 */}
          <Route path="/bookmarks" element={<PaidGuard><Bookmarks /></PaidGuard>} />
          <Route path="/wrong-answers" element={<PaidGuard><WrongAnswers /></PaidGuard>} />

          {/* 결제 */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/coupon" element={<CouponRedeem />} />

          {/* 관리자 */}
          <Route path="/admin" element={<AdminGuard><AdminDashboard /></AdminGuard>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
        </ChunkErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <CartProvider>
            <SubscriptionProvider>
              <BrowserRouter>
                <AppLayout />
              </BrowserRouter>
            </SubscriptionProvider>
          </CartProvider>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
