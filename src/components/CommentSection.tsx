import { useState, useEffect } from 'react';
import { MessageCircle, Send, Heart, User, Calendar } from 'lucide-react';

interface Comment {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: number;
  likes: number;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
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
  const saveComments = (updatedComments: Comment[]) => {
    localStorage.setItem('website-comments', JSON.stringify(updatedComments));
  };

  // 提交新留言
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.message.trim()) return;

    setIsSubmitting(true);
    
    const comment: Comment = {
      id: Date.now().toString(),
      name: newComment.name.trim(),
      email: newComment.email.trim(),
      message: newComment.message.trim(),
      timestamp: Date.now(),
      likes: 0
    };

    const updatedComments = [comment, ...comments];
    setComments(updatedComments);
    saveComments(updatedComments);
    
    setNewComment({ name: '', email: '', message: '' });
    setShowForm(false);
    setIsSubmitting(false);
  };

  // 點讚功能
  const handleLike = (commentId: string) => {
    const updatedComments = comments.map(comment =>
      comment.id === commentId
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    );
    setComments(updatedComments);
    saveComments(updatedComments);
  };

  // 格式化時間
  const formatTime = (timestamp: number) => {
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
    <section id="comments" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 animate-bounce-in">
            分享您的想法
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-slide-in-left">
            看完這個專題後，您有什麼想法或感受嗎？歡迎在下方留言與我們分享！
          </p>
        </div>

        {/* 留言表單 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-slate-200 animate-scale-in">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-6 h-6 text-blue-600 animate-float" />
            <h3 className="text-xl font-semibold text-slate-800">留下您的想法</h3>
          </div>

          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              開始留言
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    value={newComment.name}
                    onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="請輸入您的姓名"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    電子郵件
                  </label>
                  <input
                    type="email"
                    value={newComment.email}
                    onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="請輸入您的電子郵件"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  留言內容 *
                </label>
                <textarea
                  value={newComment.message}
                  onChange={(e) => setNewComment({ ...newComment, message: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  rows={4}
                  placeholder="請分享您看完這個專題的想法..."
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
                      提交中...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      發布留言
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-all"
                >
                  取消
                </button>
              </div>
            </form>
          )}
        </div>

        {/* 留言列表 */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-5 h-5 text-slate-600" />
            <h3 className="text-lg font-semibold text-slate-800">
              所有留言 ({comments.length})
            </h3>
          </div>

          {comments.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 text-lg">還沒有留言，成為第一個分享想法的人吧！</p>
            </div>
          ) : (
            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div
                  key={comment.id}
                  className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-slate-800">{comment.name}</h4>
                        <div className="flex items-center gap-1 text-slate-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{formatTime(comment.timestamp)}</span>
                        </div>
                      </div>
                      <p className="text-slate-700 leading-relaxed mb-3">{comment.message}</p>
                      <button
                        onClick={() => handleLike(comment.id)}
                        className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors"
                      >
                        <Heart className="w-4 h-4" />
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