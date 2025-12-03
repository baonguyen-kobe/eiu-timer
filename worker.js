// worker.js - Web Worker for precise timer calculations
let timers = new Map();
let tickInterval = null;
const TICK_RATE = 100; // Update every 100ms for smooth progress

self.onmessage = function(e) {
    const { type, payload } = e.data;
    
    switch(type) {
        case 'init':
            initTimers(payload.timers);
            break;
        case 'add':
            addTimer(payload.timer);
            break;
        case 'update':
            updateTimer(payload.timer);
            break;
        case 'remove':
            removeTimer(payload.id);
            break;
        case 'start':
            startTimer(payload.id);
            break;
        case 'pause':
            pauseTimer(payload.id);
            break;
        case 'reset':
            resetTimer(payload.id);
            break;
        case 'adjust':
            adjustTimer(payload.id, payload.delta);
            break;
        default:
            console.warn('Unknown message type:', type);
    }
};

function initTimers(timersList) {
    timers.clear();
    timersList.forEach(timer => {
        timers.set(timer.id, {...timer});
    });
    startTicker();
}

function addTimer(timer) {
    timers.set(timer.id, {...timer});
    startTicker();
}

function updateTimer(timer) {
    // Always update/add timer to ensure sync
    timers.set(timer.id, {...timer});
    startTicker();
}

function removeTimer(id) {
    timers.delete(id);
    if (timers.size === 0) {
        stopTicker();
    }
}

function startTimer(id) {
    const timer = timers.get(id);
    if (!timer) return;
    
    const now = Date.now();
    
    if (timer.mode === 'countdown') {
        const remaining = timer.lastRemaining ?? timer.initialDuration ?? 0;
        timer.targetTime = now + remaining;
        timer.startTime = now;
    } else if (timer.mode === 'countup') {
        timer.startTime = now - (timer.lastElapsed ?? 0);
    }
    
    timer.isRunning = true;
    timers.set(id, timer);
}

function pauseTimer(id) {
    const timer = timers.get(id);
    if (!timer) return;
    
    const now = Date.now();
    
    if (timer.mode === 'countdown') {
        timer.lastRemaining = Math.max(0, (timer.targetTime ?? now) - now);
    } else if (timer.mode === 'countup') {
        timer.lastElapsed = now - (timer.startTime ?? now);
    }
    
    timer.isRunning = false;
    timers.set(id, timer);
}

function resetTimer(id) {
    const timer = timers.get(id);
    if (!timer) return;
    
    timer.isRunning = false;
    
    if (timer.mode === 'countdown') {
        timer.lastRemaining = timer.initialDuration ?? 0;
        timer.targetTime = null;
        timer.startTime = null;
    } else if (timer.mode === 'countup') {
        timer.lastElapsed = 0;
        timer.startTime = null;
    }
    
    timers.set(id, timer);
}

function adjustTimer(id, deltaMs) {
    const timer = timers.get(id);
    if (!timer) return;
    
    if (timer.mode === 'countdown') {
        if (timer.isRunning) {
            timer.targetTime = (timer.targetTime ?? Date.now()) + deltaMs;
        } else {
            timer.lastRemaining = Math.max(0, (timer.lastRemaining ?? timer.initialDuration ?? 0) + deltaMs);
        }
    } else if (timer.mode === 'countup') {
        if (timer.isRunning) {
            timer.startTime = (timer.startTime ?? Date.now()) - deltaMs;
        } else {
            timer.lastElapsed = Math.max(0, (timer.lastElapsed ?? 0) + deltaMs);
        }
    }
    
    timers.set(id, timer);
}

function startTicker() {
    if (tickInterval) return;
    
    tickInterval = setInterval(() => {
        const now = Date.now();
        const updates = [];
        
        timers.forEach((timer, id) => {
            let remaining = null;
            let elapsed = null;
            let completed = false;
            
            if (timer.mode === 'countdown') {
                if (timer.isRunning) {
                    remaining = Math.max(0, (timer.targetTime ?? now) - now);
                    if (remaining === 0 && timer.targetTime) {
                        completed = true;
                        timer.isRunning = false;
                        timer.lastRemaining = 0;
                    }
                } else {
                    remaining = timer.lastRemaining ?? timer.initialDuration ?? 0;
                }
            } else if (timer.mode === 'countup') {
                if (timer.isRunning) {
                    elapsed = now - (timer.startTime ?? now);
                    // Check if target is reached (if set)
                    if (timer.targetDuration && elapsed >= timer.targetDuration) {
                        completed = true;
                        timer.isRunning = false;
                        timer.lastElapsed = timer.targetDuration;
                    }
                } else {
                    elapsed = timer.lastElapsed ?? 0;
                }
            }
            
            updates.push({
                id,
                remaining,
                elapsed,
                isRunning: timer.isRunning,
                mode: timer.mode,
                initialDuration: timer.initialDuration,
                targetDuration: timer.targetDuration,
                completed
            });
        });
        
        if (updates.length > 0) {
            self.postMessage({
                type: 'tick',
                payload: { now, updates }
            });
        }
    }, TICK_RATE);
}

function stopTicker() {
    if (tickInterval) {
        clearInterval(tickInterval);
        tickInterval = null;
    }
}
