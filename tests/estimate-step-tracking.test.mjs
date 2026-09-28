import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

function mount(filename, step, initialConsent, withGtag = true) {
  const source = readFileSync(`components/shared/${filename}`, "utf8");
  const start = source.indexOf("  useEffect(() => {\n    let lastTrackedStep:");
  assert.notEqual(start, -1, "effetto di tracking non trovato");
  const end = source.indexOf("  }, [step]);", start);
  assert.notEqual(end, -1, "fine effetto non trovata");
  const effect = source.slice(start, end + "  }, [step]);".length)
    .replace("let lastTrackedStep: Step | null = null;", "let lastTrackedStep = null;")
    .replace(" as { analytics?: boolean } | null", "");

  const events = [];
  const listeners = new Map();
  let consent = initialConsent;
  let cleanup;
  const window = {
    addEventListener(name, callback) { listeners.set(name, callback); },
    removeEventListener(name, callback) {
      if (listeners.get(name) === callback) listeners.delete(name);
    },
  };
  if (withGtag) window.gtag = (...args) => events.push(args);
  vm.runInNewContext(effect, {
    step, window,
    localStorage: { getItem() { return consent; } },
    useEffect(callback) { cleanup = callback(); },
  });
  return {
    events, listeners,
    notify() { listeners.get("cookie-consent-changed")?.(); },
    setConsent(value) { consent = value; },
    setGtag(callback) { window.gtag = callback; },
    cleanup() { cleanup(); },
  };
}

for (const [filename, kind] of [
  ["CalcolatoreAppartamento.tsx", "appartamento"],
  ["CalcolatoreBagno.tsx", "bagno"],
]) {
  test(`${kind}: consenso, duplicati e pulizia listener`, () => {
    const form = mount(filename, 1, '{"analytics":false}');
    assert.equal(form.events.length, 0);
    form.notify();
    assert.equal(form.events.length, 0);

    form.setConsent('{"analytics":true}');
    form.notify();
    assert.equal(form.events.length, 1);
    assert.equal(form.events[0][0], "event");
    assert.equal(form.events[0][1], "estimate_step_view");
    assert.equal(form.events[0][2].estimate_type, kind);
    assert.equal(form.events[0][2].estimate_step, 1);
    form.notify();
    assert.equal(form.events.length, 1);

    form.setConsent('{"analytics":false}');
    form.notify();
    form.setConsent('{"analytics":true}');
    form.notify();
    assert.equal(form.events.length, 1);
    form.cleanup();
    assert.equal(form.listeners.size, 0);

    const next = mount(filename, 2, '{"analytics":true}');
    assert.equal(next.events.length, 1);
    assert.equal(next.events[0][2].estimate_step, 2);
    next.cleanup();

    const invalid = mount(filename, 1, "{invalid");
    assert.equal(invalid.events.length, 0);
    invalid.cleanup();

    const late = mount(filename, 1, '{"analytics":true}', false);
    assert.equal(late.events.length, 0);
    late.setGtag((...args) => late.events.push(args));
    late.notify();
    assert.equal(late.events.length, 1);
    late.cleanup();
  });
}

test("il banner notifica dopo aver salvato il consenso", () => {
  const source = readFileSync("components/shared/CookieBanner.tsx", "utf8");
  const saved = source.indexOf(
    'localStorage.setItem("cookieConsent", JSON.stringify(prefs));'
  );
  const notified = source.indexOf(
    'window.dispatchEvent(new Event("cookie-consent-changed"));'
  );
  assert.ok(saved >= 0 && notified > saved);
});
