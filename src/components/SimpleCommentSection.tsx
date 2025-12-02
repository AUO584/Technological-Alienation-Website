import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function SimpleCommentSection() {
  const { t } = useLanguage();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // 載入留言
  useEffect(() => {
    const savedComments = localStorage.getItem('website-comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // 儲存留言到本地存儲
  const saveComments = (updatedComments) => {
    localStorage.setItem('website-comments', JSON.stringify(updatedComments));
  };

  // 提交新留言
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.message.trim()) return;

    setIsSubmitting(true);
    
    const comment = {
      id: Date.now().toString(),
      name: newComment.name.trim(),
      message: newComment.message.trim(),
      timestamp: Date.now(),
      likes: 0
    };

    const updatedComments = [comment, ...comments];
    setComments(updatedComments);
    saveComments(updatedComments);
    
    setNewComment({ name: '', message: '' });
    setShowForm(false);
    setIsSubmitting(false);
  };

  // 點讚功能
  const handleLike = (commentId) => {
    const updatedComments = comments.map(comment =>
      comment.id === commentId
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    );
    setComments(updatedComments);
    saveComments(updatedComments);
  };

  // 格式化時間
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section id="comments" style={{ backgroundColor: 'var(--bg-primary)' }} className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t.comments.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {t.comments.subtitle}
          </p>
        </div>

        {/* 留言表單 */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }} className="rounded-2xl shadow-xl p-8 mb-8 border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6">💬</div>
            <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>{t.comments.formTitle}</h3>
          </div>

          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t.comments.startComment}
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  {t.comments.name} *
                </label>
                <input
                  type="text"
                  value={newComment.name}
                  onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                  placeholder={t.comments.namePlaceholder}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  {t.comments.message} *
                </label>
                <textarea
                  value={newComment.message}
                  onChange={(e) => setNewComment({ ...newComment, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                  rows={4}
                  placeholder={t.comments.messagePlaceholder}
                  required
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {t.comments.submitting}
                    </>
                  ) : (
                    <>
                      <span>📤</span>
                      {t.comments.submit}
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 rounded-lg hover:opacity-80 transition-all"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)', border: `1px solid var(--border-color)` }}
                >
                  {t.comments.cancel}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* 留言列表 */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-5">💬</div>
            <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              {t.comments.allComments} ({comments.length})
            </h3>
          </div>

          {comments.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto mb-4 text-6xl">💬</div>
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>{t.comments.noComments}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div
                  key={comment.id}
                  style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                  className="rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      👤
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{comment.name}</h4>
                        </div>
                        <div className="text-xs px-2 py-1 rounded-full" style={{ color: 'var(--text-secondary)', backgroundColor: 'var(--bg-primary)' }}>
                          {formatTime(comment.timestamp)}
                        </div>
                      </div>
                      <p className="leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{comment.message}</p>
                      <button
                        onClick={() => handleLike(comment.id)}
                        className="flex items-center gap-2 hover:text-red-500 transition-colors"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <span>❤️</span>
                        <span>{comment.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

