const BUSINESSES = {
  MARKET_DEV: '9030628'
}


const BUSINESS_ID = BUSINESSES.MARKET_DEV;
const RALLE_PWA_URL = 'http://localhost:8080/';

const frame = document.getElementById('frame') as HTMLIFrameElement;

window.addEventListener('message', (a) => {
  if (a.data.type === 'rallestart') {
    const frameWindow = frame.contentWindow;
    frameWindow?.postMessage({
      type: 'businessId',
      businessId: BUSINESS_ID
    }, RALLE_PWA_URL);
  }
});

export default {}
