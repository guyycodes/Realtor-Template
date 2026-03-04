'use client'

import { useEffect, useRef, useCallback } from 'react'

const TENANT_ID = 'SERENITY_TOUCH_WTBV0'
const CDN_URL = 'https://cdn.widgetfied.com/portal.js'
const MAX_RETRIES = 3
const RETRY_DELAY = 1000

let scriptLoaded = false
let scriptLoading = false
let scriptError = false
let loadAttempts = 0

const pendingCallbacks = []

function loadScript(callback) {
  if (typeof window === 'undefined') return

  if (scriptLoaded && window.Widgetfied) {
    callback?.()
    return
  }

  if (callback) pendingCallbacks.push(callback)

  if (scriptLoading) return

  if (scriptError && loadAttempts >= MAX_RETRIES) {
    scriptError = false
    loadAttempts = 0
  }

  scriptLoading = true
  loadAttempts++

  const existing = document.querySelector(`script[src="${CDN_URL}"]`)
  if (existing) existing.remove()

  const script = document.createElement('script')
  script.src = CDN_URL
  script.async = true

  script.onload = () => {
    scriptLoaded = true
    scriptLoading = false
    scriptError = false

    setTimeout(() => {
      window.Widgetfied?.init?.()
      while (pendingCallbacks.length) {
        pendingCallbacks.shift()()
      }
    }, 150)
  }

  script.onerror = () => {
    scriptLoading = false
    scriptError = true

    if (loadAttempts < MAX_RETRIES) {
      setTimeout(() => loadScript(), RETRY_DELAY * loadAttempts)
    } else {
      while (pendingCallbacks.length) {
        pendingCallbacks.shift()()
      }
    }
  }

  document.body.appendChild(script)
}

if (typeof window !== 'undefined') {
  loadScript()
}

function useWidgetInit(containerId) {
  const mountedRef = useRef(false)

  const initWidget = useCallback(() => {
    if (window.Widgetfied?.init) {
      window.Widgetfied.init()
    }
  }, [])

  useEffect(() => {
    mountedRef.current = true

    if (scriptLoaded && window.Widgetfied) {
      const timer = setTimeout(initWidget, 50)
      return () => {
        mountedRef.current = false
        clearTimeout(timer)
      }
    }

    loadScript(() => {
      if (mountedRef.current) {
        setTimeout(initWidget, 50)
      }
    })

    return () => {
      mountedRef.current = false
    }
  })
}

export function BookingWidget({ className = '', displayMode = 'button', id = 'booking-widget', ...rest }) {
  useWidgetInit(id)

  return (
    <div
      id={id}
      data-widget="booking"
      data-tenant={TENANT_ID}
      data-container={id}
      data-display-mode={displayMode}
      className={className}
      {...rest}
    />
  )
}

export function JobPortalWidget({ className = '', displayMode = 'button', id = 'portal-widget', ...rest }) {
  useWidgetInit(id)

  return (
    <div
      id={id}
      data-widget="jobportal"
      data-tenant={TENANT_ID}
      data-container={id}
      data-display-mode={displayMode}
      className={className}
      {...rest}
    />
  )
}

export function RouterWidget({ className = '', displayMode = 'button', id = 'router-widget', ...rest }) {
  useWidgetInit(id)

  return (
    <div
      id={id}
      data-widget="router"
      data-tenant={TENANT_ID}
      data-container={id}
      data-display-mode={displayMode}
      className={className}
      {...rest}
    />
  )
}
