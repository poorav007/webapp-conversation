// First part - imports (you already have this part)
'use client'
import type { FC } from 'react'
import React from 'react'
import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import LoadingAnim from '../loading-anim'
import ActionButtons from '../action-buttons' // This import looks correct
import type { FeedbackFunc } from '../type'
// ... rest of your imports

// Component definition
type IAnswerProps = {
  item: ChatItem
  feedbackDisabled: boolean
  onFeedback?: FeedbackFunc
  isResponding?: boolean
  allToolIcons?: Record<string, string | Emoji>
}

// The component itself
const Answer: FC<IAnswerProps> = ({
  item,
  feedbackDisabled = false,
  onFeedback,
  isResponding,
  allToolIcons,
}) => {
  const { id, content, feedback, agent_thoughts, workflowProcess } = item
  const isAgentMode = !!agent_thoughts && agent_thoughts.length > 0

  const { t } = useTranslation()

  // All your existing functions here (renderFeedbackRating, renderItemOperation, etc.)
  
  const getImgs = (list?: VisionFile[]) => {
    if (!list)
      return []
    return list.filter(file => file.type === 'image' && file.belongs_to === 'assistant')
  }

  const agentModeAnswer = (
    // Your existing agent mode answer implementation
  )

  return (
    <div key={id}>
      <div className='flex items-start'>
        <div className={`${s.answerIcon} w-10 h-10 shrink-0`}>
          {isResponding
            && <div className={s.typeingIcon}>
              <LoadingAnim type='avatar' />
            </div>
          }
        </div>
        <div className={`${s.answerWrap}`}>
          <div className={`${s.answer} relative text-sm text-gray-900`}>
            <div className={`ml-2 py-3 px-4 bg-gray-100 rounded-tr-2xl rounded-b-2xl ${workflowProcess && 'min-w-[480px]'}`}>
              {/* Existing content */}
            </div>
            <div className='absolute top-[-14px] right-[-14px] flex flex-row justify-end gap-1'>
              {!feedbackDisabled && !item.feedbackDisabled && renderItemOperation()}
              {/* User feedback must be displayed */}
              {!feedbackDisabled && renderFeedbackRating(feedback?.rating)}
            </div>
            
            {/* Add the ActionButtons component here */}
            <div className='absolute bottom-[-40px] right-0'>
              <ActionButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Answer)

