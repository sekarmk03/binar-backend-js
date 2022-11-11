const VAPID_PUBLIC_KEY = 'BN0fxhNA8gTRC82sFPFlSvdnIuwj4pDL2sWWB_94w4NBkz36uBitj3mJDGw7BNO-Jz6B6AKy_uP3672g6mVrOso';

// konfirmasi subscribe notif
async function notifPermission() {
    return new Promise(async (resolve) => {
        resolve(await Notification.requestPermission());
    });
}

// check apakah browser support untuk service workers
function isServiceWorkerSupported() {
    if ('serviceWorker' in navigator) return true;

    return false;
}

async function registerServiceWorker() {
    if (isServiceWorkerSupported) {
        let permission = Notification.permission; // default, granted, denied

        if (permission === 'default') {
            permission = await notifPermission();
        } else {
            return;
        }

        if (permission == 'denied') return console.log('notif denied');


        console.log('ok');
        // register service worker
        const register = await navigator.serviceWorker.register('./worker.js', {
            scope: '/'
        });

        const subscription = await register.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: VAPID_PUBLIC_KEY,
        });

        await fetch("/notification/subscribe", {
            method: "POST",
            body: JSON.stringify(subscription),
            headers: {
                "Content-Type": "application/json",
            }
        });
    } else {
        return alert('Push notification nor supported!');
    }
}
registerServiceWorker();