export function getStatus() {
    return sessionStorage.getItem('status');
}

export function setStatus(status) {
    sessionStorage.setItem('status', status);
}

export function cleanStatus() {
    
}

export function isPlaying() {
    return sessionStorage.getItem('status') === "Play";
}
