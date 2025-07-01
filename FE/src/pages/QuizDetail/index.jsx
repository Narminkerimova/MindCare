import { useEffect, useState } from "react";
import QuizDetailIntro from "./QuizDetailIntro";
import QuizDetailResult from "./QuizDetailResult";
import QuizDetailProgress from "./QuizDetailProgress";
import "./style.css";

function QuizDetail() {
  const quizzes = {
    "beck-depression": {
      title: "Beck Depresiya İnventarı (BDI-II)",
      category: "depression",
      description: "Depresiya əlamətlərinin intensivliyini ölçən standart test",
      questions: [
        {
          id: 1,
          text: "Kədər hissi:",
          options: [
            { value: 0, text: "Kədərli deyiləm" },
            { value: 1, text: "Çox vaxt kədərli hiss edirəm" },
            { value: 2, text: "Həmişə kədərliyəm" },
            {
              value: 3,
              text: "O qədər kədərli və bədbəxtəm ki, dözə bilmirəm",
            },
          ],
        },
        {
          id: 2,
          text: "Pessimizm:",
          options: [
            { value: 0, text: "Gələcəklə bağlı ruhdan düşmüş deyiləm" },
            {
              value: 1,
              text: "Gələcəklə bağlı əvvəlkindən çox ruhdan düşmüşəm",
            },
            { value: 2, text: "Mənim üçün gözləyəcək heç nə yoxdur" },
            { value: 3, text: "Gələcək ümidsizdir və yaxşılaşmayacaq" },
          ],
        },
        {
          id: 3,
          text: "Keçmiş uğursuzluq hissi:",
          options: [
            { value: 0, text: "Özümü uğursuz hiss etmirəm" },
            {
              value: 1,
              text: "Orta insanlardan daha çox uğursuzluq yaşamışam",
            },
            { value: 2, text: "Keçmişimə baxanda çoxlu uğursuzluq görürəm" },
            { value: 3, text: "Özümü tam uğursuz bir insan kimi hiss edirəm" },
          ],
        },
        {
          id: 4,
          text: "Zövq itkisi:",
          options: [
            {
              value: 0,
              text: "Əvvəl zövq aldığım şeylərdən hələ də zövq alıram",
            },
            { value: 1, text: "Əvvəlki kimi zövq almıram" },
            { value: 2, text: "Artıq çox az şeydən zövq alıram" },
            { value: 3, text: "Heç nədən zövq ala bilmirəm" },
          ],
        },
        {
          id: 5,
          text: "Günahkarlıq hissləri:",
          options: [
            { value: 0, text: "Xüsusi günahkarlıq hiss etmirəm" },
            {
              value: 1,
              text: "Etdiyim və ya etmədiyim şeylər üçün vaxtaşırı günahkar hiss edirəm",
            },
            { value: 2, text: "Çox vaxt günahkarlıq hiss edirəm" },
            { value: 3, text: "Həmişə günahkar hiss edirəm" },
          ],
        },
        {
          id: 6,
          text: "Cəzalandırılma hissləri:",
          options: [
            { value: 0, text: "Cəzalandırıldığımı hiss etmirəm" },
            { value: 1, text: "Cəzalandırıla biləcəyimi hiss edirəm" },
            { value: 2, text: "Cəzalandırılacağımı gözləyirəm" },
            { value: 3, text: "Cəzalandırıldığımı hiss edirəm" },
          ],
        },
        {
          id: 7,
          text: "Özünə nifrət:",
          options: [
            { value: 0, text: "Özüm haqqında əvvəlki kimi düşünürəm" },
            { value: 1, text: "Özümə güvənim azalıb" },
            { value: 2, text: "Özümdən məyus olmuşam" },
            { value: 3, text: "Özümü nifrət edirəm" },
          ],
        },
        {
          id: 8,
          text: "Özünü günahlandırma:",
          options: [
            { value: 0, text: "Özümü digərlərindən daha çox tənqid etmirəm" },
            {
              value: 1,
              text: "Zəifliklərimi və ya səhvlərimi əvvəlkindən çox tənqid edirəm",
            },
            { value: 2, text: "Hər səhvim üçün özümü günahlandırıram" },
            {
              value: 3,
              text: "Baş verən hər pis şey üçün özümü günahlandırıram",
            },
          ],
        },
        {
          id: 9,
          text: "İntihar düşüncələri:",
          options: [
            { value: 0, text: "Özümü öldürmək düşüncəm yoxdur" },
            {
              value: 1,
              text: "İntihar düşüncələrim var, amma həyata keçirməyəcəyəm",
            },
            { value: 2, text: "İntihar etmək istərdim" },
            { value: 3, text: "Fürsət olsa özümü öldürərdim" },
          ],
        },
        {
          id: 10,
          text: "Ağlama:",
          options: [
            { value: 0, text: "Əvvəlkindən çox ağlamıram" },
            { value: 1, text: "Əvvəlkindən daha çox ağlayıram" },
            { value: 2, text: "Hər kiçik şeyə ağlayıram" },
            { value: 3, text: "Ağlamaq istəyirəm, amma bacarmıram" },
          ],
        },
      ],
      scoring: {
        ranges: [
          {
            min: 0,
            max: 13,
            level: "minimal",
            label: "Minimal Depresiya",
            color: "success",
          },
          {
            min: 14,
            max: 19,
            level: "mild",
            label: "Yüngül Depresiya",
            color: "warning",
          },
          {
            min: 20,
            max: 28,
            level: "moderate",
            label: "Orta Depresiya",
            color: "orange",
          },
          {
            min: 29,
            max: 63,
            level: "severe",
            label: "Şiddətli Depresiya",
            color: "error",
          },
        ],
      },
      recommendations: {
        minimal: {
          message:
            "Nəticələriniz minimal depresiya səviyyəsini göstərir. Bu, normal həyat stresinə uyğun bir nəticədir.",
          recommendations: [
            "Sağlam həyat tərzini davam etdirin",
            "Düzenli fiziki aktivitə ilə məşğul olun",
            "Sosial əlaqələrinizi qoruyun",
            "Özünüzə vaxt ayırın",
          ],
          doctorNeeded: false,
        },
        mild: {
          message:
            "Nəticələriniz yüngül depresiya əlamətlərini göstərir. Bu, məşğuliyyət və stres idarəetmə ilə yaxşılaşa bilər.",
          recommendations: [
            "Psixoloq ilə danışmağı düşünün",
            "Meditasiya və rahatlaşdırma texnikalarını öyrənin",
            "Düzenli yuxu rejimi yaradın",
            "Sevdiyiniz fəaliyyətlərə vaxt ayırın",
          ],
          doctorNeeded: true,
          doctorType: "Psixoloq",
        },
        moderate: {
          message:
            "Nəticələriniz orta səviyyəli depresiya əlamətlərini göstərir. Peşəkar yardım almağınız tövsiyə olunur.",
          recommendations: [
            "Psixiatr və ya psixoloq ilə görüşün",
            "Terapiya seanslarına başlayın",
            "Ailə və dostlarınızdan dəstək alın",
            "Həyat tərzinizdə müsbət dəyişikliklər edin",
          ],
          doctorNeeded: true,
          doctorType: "Psixiatr/Psixoloq",
        },
        severe: {
          message:
            "Nəticələriniz şiddətli depresiya əlamətlərini göstərir. Təcili peşəkar yardım almağınız vacibdir.",
          recommendations: [
            "Dərhal psixiatr ilə görüşün",
            "Ailənizi və yaxınlarınızı məlumatlandırın",
            "İntihar düşüncələriniz varsa, təcili yardım xəttinə zəng edin",
            "Tək qalmamağa çalışın",
          ],
          doctorNeeded: true,
          doctorType: "Psixiatr (Təcili)",
          urgent: true,
        },
      },
    },
  };

  const [currentQuiz] = useState("beck-depression");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const quiz = quizzes[currentQuiz];

  useEffect(() => {
    let interval;
    if (quizStarted && !quizCompleted) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizStarted, quizCompleted]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerSelect = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      completeQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const completeQuiz = () => {
    const totalScore = Object.values(answers).reduce(
      (sum, value) => sum + value,
      0
    );
    setScore(totalScore);

    const resultRange = quiz.scoring.ranges.find(
      (range) => totalScore >= range.min && totalScore <= range.max
    );
    setResult({
      ...resultRange,
      recommendation: quiz.recommendations[resultRange.level],
    });
    setQuizCompleted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setQuizStarted(false);
    setQuizCompleted(false);
    setScore(0);
    setResult(null);
    setTimeElapsed(0);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;
  const currentQ = quiz.questions[currentQuestion];
  const isAnswered = answers[currentQ?.id] !== undefined;

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <QuizDetailIntro quiz={quiz} startQuiz={startQuiz} />
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="quiz-container">
        <QuizDetailResult
          result={result}
          quiz={quiz}
          score={score}
          timeElapsed={timeElapsed}
          formatTime={formatTime}
          resetQuiz={resetQuiz}
        />
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <QuizDetailProgress
        progress={progress}
        currentQuestion={currentQuestion}
        totalQuestions={quiz.questions.length}
        timeElapsed={timeElapsed}
        formatTime={formatTime}
        currentQ={currentQ}
        answers={answers}
        handleAnswerSelect={handleAnswerSelect}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        isAnswered={isAnswered}
      />
    </div>
  );
}

export default QuizDetail;
