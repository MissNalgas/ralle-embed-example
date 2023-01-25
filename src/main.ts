const BUSINESS_ID = 911194;

const frame = document.getElementById('frame');

frame?.addEventListener('load', () => {
  const window = frame.contentWindow;
  window.postMessage({
    type: 'businessId',
    businessId: BUSINESS_ID
  }, 'http://localhost:8080')
});

export default {}