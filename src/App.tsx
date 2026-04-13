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

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LoginPage from './pages/auth/LoginPage';

import PilgiHome from './pages/pilgi/PilgiHome';
import ExamSelect from './pages/pilgi/ExamSelect';
import StudyMode from './pages/pilgi/StudyMode';
import ExamMode from './pages/pilgi/ExamMode';
import ExamResult from './pages/pilgi/ExamResult';
import QuestionReview from './pages/pilgi/QuestionReview';

import SilgiHome from './pages/silgi/SilgiHome';
import PracticeMode from './pages/silgi/PracticeMode';
import PracticeResult from './pages/silgi/PracticeResult';
import KeyTerms from './pages/silgi/KeyTerms';
import SilgiExamList from './pages/silgi/SilgiExamList';
import SilgiExamDetail from './pages/silgi/SilgiExamDetail';
import SilgiFrequent from './pages/silgi/SilgiFrequent';

import Dashboard from './pages/dashboard/Dashboard';
import StudyHistory from './pages/dashboard/StudyHistory';

import Bookmarks from './pages/study/Bookmarks';
import WrongAnswers from './pages/study/WrongAnswers';

import ExamInfo from './pages/info/ExamInfo';

import LearnHome from './pages/learn/LearnHome';
import SubjectStudy from './pages/learn/SubjectStudy';
import StudySummary from './pages/learn/StudySummary';

import PracticeHome from './pages/practice/PracticeHome';

import ServiceIntro from './pages/about/ServiceIntro';
import InstructorIntro from './pages/about/InstructorIntro';
import UsageGuide from './pages/about/UsageGuide';
import Pricing from './pages/about/Pricing';
import Terms from './pages/about/Terms';
import Privacy from './pages/about/Privacy';

import Checkout from './pages/payment/Checkout';
import Confirmation from './pages/payment/Confirmation';
import OrderHistory from './pages/payment/OrderHistory';
import CouponRedeem from './pages/payment/CouponRedeem';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminGuard from './components/AdminGuard';

function AppLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <SubscriptionBanner />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />

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
