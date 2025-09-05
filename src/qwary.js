// JS-only helpers (no TypeScript features)
export function waitForQwTracking(cb, { attempts = 50, delayMs = 100 } = {}) {
  let tries = 0;
  const check = () => {
    if (
      typeof window !== "undefined" &&
      window.qwTracking &&
      typeof window.qwTracking.refreshPageView === "function"
    ) {
      cb();
    } else if (tries < attempts) {
      tries += 1;
      setTimeout(check, delayMs);
    } else {
      console.warn("QwTracking not loaded after maximum attempts");
    }
  };
  check();
}
