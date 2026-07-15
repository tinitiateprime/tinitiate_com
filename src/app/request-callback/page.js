import { Suspense } from 'react'
import RequestCallbackClient from './RequestCallbackClient'

export default function RequestCallbackPage() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading form...</div>}>
      <RequestCallbackClient />
    </Suspense>
  )
}
