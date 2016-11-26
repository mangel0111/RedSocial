export function getStatus() {
    return sessionStorage.getItem('status');
}

export function setStatus(status) {
    sessionStorage.setItem('status', status);
}

export function cleanStatus() {
    
}

export function isPlaying() {
    return sessionStorage.getItem('status') === "Play" 
    || sessionStorage.getItem('status') === "Paused" 
    || sessionStorage.getItem('status') === "GameOver" ;
}

export function isPaused() {
    return sessionStorage.getItem('status') === "Paused";
}

export function isGameOver() {
    return sessionStorage.getItem('status') === "GameOver";
}


