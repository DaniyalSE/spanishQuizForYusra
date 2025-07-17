import React, { useState, useEffect } from 'react';
import { Shuffle, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import './App.css';

type QuizQuestion = {
  question: string;
  answers: string[];
  correct: string;
  type: 'spanish-to-english' | 'english-to-spanish';
};

const SpanishVocabQuiz = () => {
  const vocabulary = [
    { spanish: "El hombre", english: "The man" },
    { spanish: "La niña", english: "The girl" },
    { spanish: "El niño", english: "The boy" },
    { spanish: "Mujer", english: "Woman" },
    { spanish: "Manzana", english: "Apple" },
    { spanish: "Ella", english: "She" },
    { spanish: "El (come) manzana", english: "He eats apple" },
    { spanish: "La leche", english: "The milk" },
    { spanish: "Agua", english: "Water" },
    { spanish: "Yo", english: "I" },
    { spanish: "Como", english: "Eat" },
    { spanish: "Bebo/Bebe", english: "Drink/Drinks" },
    { spanish: "El pan", english: "The bread" },
    { spanish: "Hola", english: "Hello" },
    { spanish: "Adiós", english: "Goodbye" },
    { spanish: "Gracias", english: "Thank you" },
    { spanish: "Mucho gusto", english: "Nice to meet you" },
    { spanish: "Buenos días", english: "Good morning" },
    { spanish: "Buenas noches", english: "Good night" },
    { spanish: "Perdón/Disculpe", english: "Excuse me" },
    { spanish: "De nada", english: "You are welcome" },
    { spanish: "Lo siento", english: "Sorry" },
    { spanish: "Sí", english: "Yes" },
    { spanish: "Baño", english: "Bathroom" },
    { spanish: "Calle", english: "Street" },
    { spanish: "Supermercado", english: "Supermarket" },
    { spanish: "Llegado", english: "Closed" },
    { spanish: "Restaurante", english: "Restaurant" },
    { spanish: "Uno", english: "One" },
    { spanish: "Dos", english: "Two" },
    { spanish: "Tres", english: "Three" },
    { spanish: "La mesa", english: "Table" },
    { spanish: "Las personas", english: "The people" },
    { spanish: "Para", english: "For" },
    { spanish: "El queso", english: "The cheese" },
    { spanish: "Sandwich", english: "Sandwich" },
    { spanish: "Con/De", english: "With" },
    { spanish: "La carne", english: "The meat" },
    { spanish: "El pescado", english: "The fish" },
    { spanish: "Hamburguesa", english: "Burger" },
    { spanish: "El azúcar", english: "The sugar" },
    { spanish: "El café", english: "The coffee" },
    { spanish: "Vaso", english: "Glass" },
    { spanish: "Taza", english: "Cup" },
    { spanish: "Jugo", english: "Juice" },
    { spanish: "Naranja", english: "Orange" },
    { spanish: "Sin", english: "Without" },
    { spanish: "El tomate", english: "Tomato" },
    { spanish: "La ensalada", english: "Salad" },
    { spanish: "Sal", english: "Salt" },
    { spanish: "Español", english: "Spanish" },
    { spanish: "Inglés", english: "English" },
    { spanish: "Habla", english: "Speak" },
    { spanish: "El taxi", english: "The taxi" },
    { spanish: "El pasaporte", english: "The passport" },
    { spanish: "Mi", english: "My" },
    { spanish: "El teléfono", english: "The phone" },
    { spanish: "La maleta", english: "The suitcase" },
    { spanish: "Necesito", english: "Necessary" },
    { spanish: "El hotel", english: "The hotel" },
    { spanish: "Reserva", english: "Reservation" },
    { spanish: "Donde", english: "Where" },
    { spanish: "En", english: "In" },
    { spanish: "Tengo", english: "Have" },
    { spanish: "Está", english: "Is" },
    { spanish: "Aquí", english: "Here" },
    { spanish: "El tren", english: "The train" },
    { spanish: "El aeropuerto", english: "The airport" },
    { spanish: "Autobús", english: "Bus" },
    { spanish: "Dinero", english: "Money" },
    { spanish: "Boleto", english: "Ticket" },
    { spanish: "Hospital", english: "Hospital" },
    { spanish: "Museo", english: "Museum" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [quizType, setQuizType] = useState('mixed');
  const [isAnswered, setIsAnswered] = useState(false);

  const generateQuestions = () => {
    const shuffled = [...vocabulary].sort(() => Math.random() - 0.5);
    const questionSet = shuffled.slice(0, 15).map(item => {
      const isSpanishToEnglish = Math.random() > 0.5;
      const correctAnswer = isSpanishToEnglish ? item.english : item.spanish;
      const question = isSpanishToEnglish ? item.spanish : item.english;
      
      // Generate wrong answers
      const wrongAnswers = vocabulary
        .filter(v => v !== item)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(v => isSpanishToEnglish ? v.english : v.spanish);
      
      const allAnswers = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
      
      return {
        question,
        answers: allAnswers,
        correct: correctAnswer,
        type: isSpanishToEnglish ? 'spanish-to-english' : 'english-to-spanish' as 'spanish-to-english' | 'english-to-spanish'
      };
    });
    
    setQuestions(questionSet);
  };

  useEffect(() => {
    generateQuestions();
  }, []);

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    const correct = answer === questions[currentQuestion].correct;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setIsCorrect(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer('');
    setIsCorrect(null);
    setIsAnswered(false);
    generateQuestions();
  };

  if (questions.length === 0) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  if (showResult) {
    return (
      <div className="quiz-glass max-w-xl mx-auto mt-16 p-8">
        <div className="result-trophy">🏆</div>
        <div className="quiz-title">Quiz Complete!</div>
        <div className="quiz-subtitle">
          <span style={{ fontWeight: 700, color: '#d72660', fontSize: '2.5rem' }}>{score}</span>
          <span style={{ fontWeight: 400, color: '#7b7b7b', fontSize: '2.5rem' }}>/</span>
          <span style={{ fontWeight: 700, color: '#008080', fontSize: '2.5rem' }}>{questions.length}</span>
        </div>
        <div className="quiz-subtitle" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          {Math.round((score / questions.length) * 100)}% Correct
        </div>
        <div className="quiz-subtitle" style={{ marginBottom: '2rem' }}>
          {score === questions.length ? (
            <span style={{ color: '#388e3c', fontWeight: 600 }}>¡Excelente! Perfect score! 💖</span>
          ) : score >= questions.length * 0.8 ? (
            <span style={{ color: '#008080', fontWeight: 600 }}>¡Muy bien! Great job!</span>
          ) : score >= questions.length * 0.6 ? (
            <span style={{ color: '#d72660', fontWeight: 600 }}>¡Bien! Good work!</span>
          ) : (
            <span style={{ color: '#d72660', fontWeight: 600 }}>Keep practicing! ¡Sigue practicando!</span>
          )}
        </div>
        <button
          onClick={resetQuiz}
          className="answer-btn"
          style={{ background: '#d72660', color: '#fff', width: '100%', fontSize: '1.2rem', marginTop: '1rem' }}
        >
          <span style={{ fontWeight: 700 }}>Try Again</span>
        </button>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="quiz-glass max-w-xl mx-auto mt-16 p-8">
      <div className="quiz-title" style={{ fontFamily: 'Quicksand, sans-serif' }}>
        <span style={{ color: '#d72660', fontWeight: 700 }}>Spanish Quiz</span>
        <span style={{ color: '#008080', fontWeight: 400, fontSize: '1.2rem', marginLeft: '0.5rem' }}>for my wife 💖</span>
      </div>
      <div className="quiz-subtitle">A fun way to practice Spanish vocabulary!</div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
      <div className="quiz-card">
        <div className="quiz-subtitle" style={{ marginBottom: '1rem', color: '#d72660', fontWeight: 600 }}>
          {currentQ.type === 'spanish-to-english' ? 'Translate to English:' : 'Translate to Spanish:'}
        </div>
        <div style={{ fontSize: '2rem', fontWeight: 700, color: '#008080', textAlign: 'center', marginBottom: '2rem' }}>
          {currentQ.question}
        </div>
        <div>
          {currentQ.answers.map((answer: string, index: number) => {
            let btnClass = 'answer-btn';
            if (isAnswered) {
              if (answer === currentQ.correct) {
                btnClass += ' correct';
              } else if (answer === selectedAnswer && answer !== currentQ.correct) {
                btnClass += ' incorrect';
              }
            } else if (answer === selectedAnswer) {
              btnClass += ' selected';
            }
            return (
              <button
                key={index}
                onClick={() => handleAnswer(answer)}
                className={btnClass}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}
                disabled={isAnswered}
              >
                <span>{answer}</span>
                {isAnswered && answer === currentQ.correct && (
                  <span style={{ fontSize: '1.5rem', marginLeft: '1rem' }}>💖</span>
                )}
                {isAnswered && answer === selectedAnswer && answer !== currentQ.correct && (
                  <span style={{ fontSize: '1.5rem', marginLeft: '1rem' }}>✖️</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="quiz-subtitle" style={{ color: '#008080', fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
          Score: {score}/{questions.length}
        </div>
        {isAnswered && (
          <button
            onClick={nextQuestion}
            className="answer-btn"
            style={{ background: '#008080', color: '#fff', fontWeight: 700, fontSize: '1.1rem', minWidth: '120px' }}
          >
            {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
          </button>
        )}
      </div>
    </div>
  );
};

export default SpanishVocabQuiz;