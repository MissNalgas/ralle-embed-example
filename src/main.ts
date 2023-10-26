const BUSINESS_ID = false ? '71804' : '9092882' ;
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