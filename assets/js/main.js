/* Inject Botpress Webchat loader (v2.4) */
const loader = document.createElement("script");
loader.src = "https://cdn.botpress.cloud/webchat/v2.4/inject.js";
loader.async = true;
document.head.appendChild(loader);

/* Inject your bot-specific init script  */
const initScript = document.createElement("script");
initScript.src = "https://files.bpcontent.cloud/2025/05/30/13/20250530135415-C4O5VVZF.js";
initScript.defer = true;
document.head.appendChild(initScript);

/* Utility: update footer year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Smooth-scroll to chat after CTA click */
document.querySelector(".hero__cta")?.addEventListener("click", e => {
  e.preventDefault();
  const chatContainer = document.getElementById("bp-web-widget-container");
  if (chatContainer) chatContainer.scrollIntoView({ behavior:"smooth" });
});
