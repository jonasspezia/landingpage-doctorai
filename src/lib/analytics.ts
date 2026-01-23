/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }
}

export function trackScrollDepth(percentage: number) {
  trackEvent("scroll_depth", { scroll_percentage: percentage });
}

export function trackSectionView(sectionName: string) {
  trackEvent("section_view", { section_name: sectionName });
}

export function trackTimeOnPage(seconds: number) {
  trackEvent("time_on_page", { time_seconds: seconds });
}

export function trackCTAClick(location: string, text: string) {
  trackEvent("cta_click", { cta_location: location, cta_text: text });
}
