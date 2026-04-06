import { Banknote } from 'lucide-react'
import React from 'react'

function Logo() {
  return (
    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-linear-to-br from-blue-700 to-indigo-700 rounded-2xl flex items-center justify-center shadow-inner">
              <Banknote className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    </div>
  )
}

export default Logo
