'use client'
import type { FC } from 'react'
import React from 'react'
import { EnvelopeIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

type ActionButtonsProps = {
  className?: string
}

const ActionButtons: FC<ActionButtonsProps> = ({ className = '' }) => {
  // Email address for moderator support - replace with your actual support email
  const supportEmail = "simon@lownonline.com"
  
  // Google Form URL - replace with your actual Google Form URL
  const feedbackFormUrl = "https://forms.gle/MyeZMPPKJt5jeUKZA"
  
  const handleModeratorClick = () => {
    window.location.href = `mailto:${supportEmail}?subject=Health%20Chatbot%20Support%20Request&body=Hello,%20I%20need%20assistance%20with%20the%20health%20chatbot.`
  }
  
  const handleFeedbackClick = () => {
    // Open Google Form in a new tab
    window.open(feedbackFormUrl, '_blank')
  }
  
  return (
    <div className={`action-buttons flex gap-2 ${className}`}>
      <button
        onClick={handleModeratorClick}
        className="moderator-btn flex items-center gap-1 px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700"
        style={{ boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)' }}
      >
        <EnvelopeIcon className="w-4 h-4" />
        Moderator
      </button>
      
      <button
        onClick={handleFeedbackClick}
        className="feedback-btn flex items-center gap-1 px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700"
        style={{ boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)' }}
      >
        <DocumentTextIcon className="w-4 h-4" />
        Feedback
      </button>
    </div>
  )
}

export default ActionButtons
