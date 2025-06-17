import { useState } from "react"
import { Copy, Check, X, User, Mail, Lock, Sparkles } from "lucide-react"

const guestCredentials = [
  {
    name: "Guest User",
    email: "guest@chatsphere.com",
    password: "guest123",
    role: "Explorer",
    avatar: "🎭",
  },
  {
    name: "Demo User 1",
    email: "demo1@chatsphere.com",
    password: "demo123",
    role: "Tester",
    avatar: "🚀",
  },
  {
    name: "Demo User 2",
    email: "demo2@chatsphere.com",
    password: "demo123",
    role: "Reviewer",
    avatar: "⭐",
  },
]

const GuestLoginModal = ({ setshowDemoModal }) => {
  const [copiedField, setCopiedField] = useState("")
  const [toastMessage, setToastMessage] = useState("")

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setToastMessage("Copied to clipboard!")

      setTimeout(() => {
        setCopiedField("")
        setToastMessage("")
      }, 2000)
    } catch (err) {
      setToastMessage("Failed to copy")
      setTimeout(() => setToastMessage(""), 2000)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-2xl" />

        {/* Close button */}
        <button
          onClick={() => setshowDemoModal(false)}
          className="absolute cursor-pointer top-4 right-4 z-10 h-8 w-8 rounded-full bg-white/80 hover:bg-white/90 backdrop-blur-sm border border-gray-200/50 flex items-center justify-center transition-all duration-200 hover:scale-105"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-2">
              Guest Access Portal
            </h2>
            <p className="text-gray-800 text-lg">Choose any account below to explore ChatSphere instantly</p>
          </div>

          {/* Credentials Grid */}
          <div className="space-y-4 mb-8">
            {guestCredentials.map((user, index) => (
              <div
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white/80 rounded-xl border-white/20"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="hidden lg:flex flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {user.avatar}
                      </div>
                    </div>

                    {/* User Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                        <span className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full">
                          {user.role}
                        </span>
                      </div>

                      {/* Email */}
                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">Email</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="flex-1 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg text-sm font-mono text-gray-800 group-hover:bg-gray-100 transition-colors">
                            {user.email}
                          </code>
                          <button
                            onClick={() => copyToClipboard(user.email, `email-${index}`)}
                            className="h-9 w-9 p-0 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 rounded-lg flex items-center justify-center bg-white"
                          >
                            {copiedField === `email-${index}` ? (
                              <Check className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4 text-gray-600" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Password */}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Lock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">Password</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="flex-1 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg text-sm font-mono text-gray-800 group-hover:bg-gray-100 transition-colors">
                            {user.password}
                          </code>
                          <button
                            onClick={() => copyToClipboard(user.password, `password-${index}`)}
                            className="h-9 w-9 p-0 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 rounded-lg flex items-center justify-center bg-white"
                          >
                            {copiedField === `password-${index}` ? (
                              <Check className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4 text-gray-600" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How to use Guest Mode:</h4>
                <ol className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-semibold">
                      1
                    </span>
                    Copy any email and password combination above
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-semibold">
                      2
                    </span>
                    Navigate to the login page
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-semibold">
                      3
                    </span>
                    Paste the credentials and sign in to explore!
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <button
              onClick={() => setshowDemoModal(false)}
              className="bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Got it, let's explore!
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-in slide-in-from-bottom-2 fade-in-0 duration-300">
            <div className="bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium">{toastMessage}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GuestLoginModal
