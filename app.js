// app.js - Main application logic for EIU Timer Pro
const STORAGE_KEY = 'eiu_timer_pro_v1';
const STATS_KEY = 'eiu_timer_stats_v1';
const PRESETS_KEY = 'eiu_timer_presets_v1';
const SETTINGS_KEY = 'eiu_timer_settings_v1';
const CUSTOM_SOUNDS_KEY = 'eiu_timer_custom_sounds_v1';

// Language translations
const translations = {
    vi: {
        appTitle: 'EIU Timer Pro',
        presets: 'Mẫu',
        settings: 'Cài đặt',
        import: 'Nhập',
        export: 'Xuất',
        createTimer: 'Tạo Mới',
        selected: 'đã chọn',
        clearSelection: 'Bỏ chọn tất cả',
        present: 'Trình chiếu',
        delete: 'Xóa',
        createNew: 'Tạo Bộ Đếm Mới',
        editTimer: 'Chỉnh Sửa Bộ Đếm',
        timerName: 'Tên Bộ Đếm',
        timerNamePlaceholder: 'Ví dụ: Kiểm tra, Thuyết trình',
        mode: 'Chế Độ',
        countdown: 'Đếm Ngược',
        countup: 'Đếm Lên',
        duration: 'Thời Lượng',
        startFrom: 'Đếm từ',
        targetTime: 'Mục Tiêu (Tùy chọn)',
        countdownHint: 'Thời gian đếm ngược',
        startFromHint: 'Thời gian bắt đầu đếm lên. Để trống nếu bắt đầu từ 00:00:00.',
        targetTimeHint: 'Thời gian mục tiêu để kết thúc. Để trống nếu đếm vô hạn.',
        hours: 'Giờ',
        minutes: 'Phút',
        seconds: 'Giây',
        sound: 'Âm thanh',
        enableSound: 'Bật âm thanh khi hoàn thành',
        customSound: 'Âm thanh tùy chỉnh (tùy chọn)',
        defaultBeep: 'Mặc định (Beep)',
        bell: 'Chuông',
        chime: 'Chime',
        ding: 'Ding',
        tick: 'Tick (3s cuối)',
        customFile: 'Tải âm thanh lên',
        testSound: 'Test',
        soundFileHint: 'Chọn âm thanh hoặc tải file âm thanh (.mp3, .wav, .ogg)',
        notification: 'Thông báo',
        enableNotification: 'Bật thông báo',
        save: 'Lưu',
        update: 'Cập Nhật',
        cancel: 'Hủy',
        close: 'Đóng',
        managePresets: 'Quản lý Mẫu',
        noPresets: 'Chưa có mẫu nào',
        addPresetDesc: 'Tạo mẫu để tái sử dụng cấu hình timer',
        addPreset: 'Thêm Mẫu',
        customPresets: 'Mẫu Tùy Chỉnh',
        manage: 'Quản Lý',
        edit: 'Sửa',
        exportSuccess: 'Đã xuất',
        importSuccess: 'Đã nhập thành công',
        timers: 'timer',
        start: 'Bắt đầu',
        pause: 'Tạm dừng',
        reset: 'Đặt lại',
        present: 'Trình chiếu',
        edit: 'Sửa',
        delete: 'Xóa',
        soundLabel: 'Âm thanh',
        modeCountdown: 'ĐẾ́M NGƯỢ̣C',
        modeCountup: 'ĐẾ́M LÊNN',
        validationName: 'Vui lòng nhập tên bộ đếm!',
        validationTime: 'Vui lòng nhập thời gian!',
        confirmDelete: 'Bạn có chắc muốn xóa bộ đếm thời gian này không?',
        confirmDeleteMultiple: 'Bạn có chắc muốn xóa',
        timersSelected: 'timer đã chọn?',
        yes: 'Có',
        no: 'Không',
        confirmDeletePreset: 'Bạn có chắc muốn xóa mẫu này không?',
        durationMustBePositive: 'Thời lượng phải lớn hơn 0!',
        importSuccess: 'Đã nhập thành công',
        timersFromExcel: 'timer từ Excel!',
        importError: 'Lỗi đọc file Excel:',
        createPreset: 'Tạo Mẫu Mới',
        editPreset: 'Chỉnh Sửa Mẫu',
        presetName: 'Tên Mẫu',
        presetNamePlaceholder: 'Ví dụ: Làm việc sâu, Nghỉ giải lao',
        createPresetBtn: 'Tạo Mẫu',
        defaultSoundTitle: '🔊 Âm Thanh Mặc Định',
        defaultSoundLabel: 'Âm thanh cho tất cả timer mới',
        themeTitle: '🎨 Giao Diện',
        themeLabel: 'Màu chủ đạo',
        themeTeal: '💚 Xanh Ngọc (Mặc định)',
        themeBlue: '💙 Xanh Dương',
        themePurple: '💜 Tím',
        themeGreen: '🌿 Xanh Lá',
        themeOrange: '🧡 Cam',
        themeRed: '❤️ Đỏ',
        themeDark: '🌙 Tối',
        notificationTitle: '🔔 Thông Báo',
        notificationDefault: 'Bật thông báo mặc định cho timer mới',
        statsTitle: '📊 Thống Kê',
        totalTimers: 'Tổng Bộ Đếm',
        activeTimers: 'Đang Chạy',
        completedToday: 'Hoàn Thành Hôm Nay',
        totalFocusTime: 'Tổng Thời Gian',
        presetCountdown1m: 'Đếm Ngược',
        presetCountdown3m: 'Đếm Ngược',
        presetCountup1m: 'Đếm Lên',
        presetCountup3m: 'Đếm Lên',
        quickTemplates: 'Mẫu Nhanh',
        emptyStateTitle: 'Chưa có bộ đếm nào',
        emptyStateDesc: 'Nhấn "Tạo Mới" hoặc chọn mẫu có sẵn để bắt đầu',
        emptyStateBtn: 'Tạo Bộ Đếm Đầu Tiên',
        fullscreen: 'Toàn màn hình',
        exitFullscreen: 'Thoát toàn màn hình',
    },
    en: {
        appTitle: 'EIU Timer Pro',
        presets: 'Templates',
        settings: 'Settings',
        import: 'Import',
        export: 'Export',
        createTimer: 'Create',
        selected: 'selected',
        clearSelection: 'Clear selection',
        present: 'Present',
        delete: 'Delete',
        createNew: 'Create New Timer',
        editTimer: 'Edit Timer',
        timerName: 'Timer Name',
        timerNamePlaceholder: 'E.g.: Test, Presentation',
        mode: 'Mode',
        countdown: 'Countdown',
        countup: 'Count Up',
        duration: 'Duration',
        startFrom: 'Start From',
        targetTime: 'Target Time (Optional)',
        countdownHint: 'Countdown duration',
        startFromHint: 'Starting time to count up from. Leave empty to start from 00:00:00.',
        targetTimeHint: 'Target time to end at. Leave empty for unlimited counting.',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        sound: 'Sound',
        enableSound: 'Enable sound when completed',
        customSound: 'Custom sound (optional)',
        defaultBeep: 'Default (Beep)',
        bell: 'Bell',
        chime: 'Chime',
        ding: 'Ding',
        tick: 'Tick (Last 3s)',
        customFile: 'Upload sound',
        testSound: 'Test',
        soundFileHint: 'Choose sound or upload audio file (.mp3, .wav, .ogg)',
        notification: 'Notification',
        enableNotification: 'Enable notification',
        save: 'Save',
        update: 'Update',
        cancel: 'Cancel',
        close: 'Close',
        managePresets: 'Manage Templates',
        noPresets: 'No templates yet',
        addPresetDesc: 'Create templates to reuse timer configurations',
        addPreset: 'Add Template',
        customPresets: 'Custom Templates',
        manage: 'Manage',
        edit: 'Edit',
        exportSuccess: 'Exported',
        importSuccess: 'Imported successfully',
        timers: 'timers',
        start: 'Start',
        pause: 'Pause',
        reset: 'Reset',
        present: 'Present',
        edit: 'Edit',
        delete: 'Delete',
        soundLabel: 'Sound',
        modeCountdown: 'COUNTDOWN',
        modeCountup: 'COUNT UP',
        validationName: 'Please enter timer name!',
        validationTime: 'Please enter time!',
        confirmDelete: 'Are you sure you want to delete this timer?',
        confirmDeleteMultiple: 'Are you sure you want to delete',
        timersSelected: 'selected timers?',
        yes: 'Yes',
        no: 'No',
        confirmDeletePreset: 'Are you sure you want to delete this template?',
        durationMustBePositive: 'Duration must be greater than 0!',
        importSuccess: 'Successfully imported',
        timersFromExcel: 'timers from Excel!',
        importError: 'Error reading Excel file:',
        createPreset: 'Create New Template',
        editPreset: 'Edit Template',
        presetName: 'Template Name',
        presetNamePlaceholder: 'E.g.: Deep work, Break time',
        createPresetBtn: 'Create Template',
        defaultSoundTitle: '🔊 Default Sound',
        defaultSoundLabel: 'Sound for all new timers',
        themeTitle: '🎨 Appearance',
        themeLabel: 'Theme color',
        themeTeal: '💚 Teal (Default)',
        themeBlue: '💙 Blue',
        themePurple: '💜 Purple',
        themeGreen: '🌿 Green',
        themeOrange: '🧡 Orange',
        themeRed: '❤️ Red',
        themeDark: '🌙 Dark',
        notificationTitle: '🔔 Notifications',
        notificationDefault: 'Enable notifications by default for new timers',
        statsTitle: '📊 Statistics',
        totalTimers: 'Total Timers',
        activeTimers: 'Active',
        completedToday: 'Completed Today',
        totalFocusTime: 'Total Time',
        presetCountdown1m: 'Countdown',
        presetCountdown3m: 'Countdown',
        presetCountup1m: 'Count Up',
        presetCountup3m: 'Count Up',
        quickTemplates: 'Quick Templates',
        emptyStateTitle: 'No timers yet',
        emptyStateDesc: 'Click "Create" or choose a template to get started',
        emptyStateBtn: 'Create Your First Timer',
        fullscreen: 'Fullscreen',
        exitFullscreen: 'Exit fullscreen',
    }
};

let currentLang = 'vi';

// Initialize Web Worker
let worker;
try {
    worker = new Worker('worker.js');
} catch (error) {
    console.error('Worker initialization failed:', error);
    // Fallback: worker will be null, app will work without background timing
}

// State Management
let timers = new Map();
let customPresets = [];
let editingId = null;
let editingPresetId = null;
let stats = loadStats();
let selectedTimers = new Set(); // Track selected timers
let isPresentationMode = false; // Track presentation mode
let settings = loadSettings(); // Load user settings

// Sound library
const soundLibrary = {
    bell: null, // Will use Web Audio API
    chime: null,
    ding: null
};

// Track if 3-second warning has been played
const warningPlayed = new Set();

// Custom uploaded sounds - store both data and filename
let customSounds = {};

// DOM Elements
const elements = {
    // Header
    addTimerBtn: document.getElementById('addTimerBtn'),
    presetsBtn: document.getElementById('presetsBtn'),
    settingsBtn: document.getElementById('settingsBtn'),
    statsBtn: document.getElementById('statsBtn'),
    importBtn: document.getElementById('importBtn'),
    exportBtn: document.getElementById('exportBtn'),
    
    // Selection Toolbar
    selectionToolbar: document.getElementById('selectionToolbar'),
    selectionCount: document.getElementById('selectionCount'),
    clearSelectionBtn: document.getElementById('clearSelectionBtn'),
    presentSelectedBtn: document.getElementById('presentSelectedBtn'),
    deleteSelectedBtn: document.getElementById('deleteSelectedBtn'),
    
    // Presets
    presetsBar: document.getElementById('presetsBar'),
    
    // Main Content
    emptyState: document.getElementById('emptyState'),
    timersGrid: document.getElementById('timersGrid'),
    
    // Presentation Mode
    presentationMode: document.getElementById('presentationMode'),
    exitPresentationBtn: document.getElementById('exitPresentationBtn'),
    fullscreenToggleBtn: document.getElementById('fullscreenToggleBtn'),
    presentationGrid: document.getElementById('presentationGrid'),
    
    // Shortcuts Modal
    shortcutsModal: document.getElementById('shortcutsModal'),
    shortcutsModalClose: document.getElementById('shortcutsModalClose'),
    shortcutsModalOverlay: document.getElementById('shortcutsModalOverlay'),
    
    // Modal
    timerModal: document.getElementById('timerModal'),
    modalOverlay: document.getElementById('modalOverlay'),
    modalClose: document.getElementById('modalClose'),
    modalTitle: document.getElementById('modalTitle'),
    timerForm: document.getElementById('timerForm'),
    
    // Form Inputs
    timerName: document.getElementById('timerName'),
    timerMode: document.getElementById('timerMode'),
    timerHours: document.getElementById('timerHours'),
    timerMinutes: document.getElementById('timerMinutes'),
    timerSeconds: document.getElementById('timerSeconds'),
    targetTimeGroup: document.getElementById('targetTimeGroup'),
    targetHours: document.getElementById('targetHours'),
    targetMinutes: document.getElementById('targetMinutes'),
    targetSeconds: document.getElementById('targetSeconds'),
    targetTimeHint: document.getElementById('targetTimeHint'),
    enableSound: document.getElementById('enableSound'),
    customSound: document.getElementById('customSound'),
    soundFileInput: document.getElementById('soundFileInput'),
    testSoundBtn: document.getElementById('testSoundBtn'),
    enableNotification: document.getElementById('enableNotification'),
    timeInputs: document.getElementById('timeInputs'),
    timeLabelText: document.getElementById('timeLabelText'),
    timeHint: document.getElementById('timeHint'),
    submitBtnText: document.getElementById('submitBtnText'),
    cancelBtn: document.getElementById('cancelBtn'),
    
    // Settings Modal
    settingsModal: document.getElementById('settingsModal'),
    settingsModalOverlay: document.getElementById('settingsModalOverlay'),
    settingsModalClose: document.getElementById('settingsModalClose'),
    defaultSound: document.getElementById('defaultSound'),
    defaultSoundFileInput: document.getElementById('defaultSoundFileInput'),
    testDefaultSoundBtn: document.getElementById('testDefaultSoundBtn'),
    themeSelect: document.getElementById('themeSelect'),
    enableNotificationsByDefault: document.getElementById('enableNotificationsByDefault'),
    
    // Stats Modal
    statsModal: document.getElementById('statsModal'),
    statsModalOverlay: document.getElementById('statsModalOverlay'),
    statsModalClose: document.getElementById('statsModalClose'),
    
    // Presets Management
    managePresetsBtn: document.getElementById('managePresetsBtn'),
    presetsModal: document.getElementById('presetsModal'),
    presetsModalOverlay: document.getElementById('presetsModalOverlay'),
    presetsModalClose: document.getElementById('presetsModalClose'),
    customPresetsList: document.getElementById('customPresetsList'),
    addPresetBtn: document.getElementById('addPresetBtn'),
    presetsGrid: document.getElementById('presetsGrid'),
    
    // Preset Form Modal
    presetFormModal: document.getElementById('presetFormModal'),
    presetFormModalOverlay: document.getElementById('presetFormModalOverlay'),
    presetFormModalClose: document.getElementById('presetFormModalClose'),
    presetForm: document.getElementById('presetForm'),
    presetFormTitle: document.getElementById('presetFormTitle'),
    presetName: document.getElementById('presetName'),
    presetMode: document.getElementById('presetMode'),
    presetHours: document.getElementById('presetHours'),
    presetMinutes: document.getElementById('presetMinutes'),
    presetSeconds: document.getElementById('presetSeconds'),
    presetSubmitBtnText: document.getElementById('presetSubmitBtnText'),
    cancelPresetBtn: document.getElementById('cancelPresetBtn'),
    
    // Language
    languageBtn: document.getElementById('languageBtn'),
    langText: document.getElementById('langText'),
};

// ===== Utility Functions =====
function uid() {
    return `timer_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function formatTime(ms) {
    if (ms == null) return '--:--:--';
    const isNegative = ms < 0;
    ms = Math.abs(ms);
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const formatted = [hours, minutes, seconds]
        .map(v => String(v).padStart(2, '0'))
        .join(':');
    return isNegative ? `-${formatted}` : formatted;
}



// ===== Storage Functions =====
function saveTimers() {
    const timersArray = Array.from(timers.values()).map(t => ({
        ...t,
        __el: undefined // Don't save DOM references
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timersArray));
}

function loadTimers() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            const timersArray = JSON.parse(data);
            timers = new Map(timersArray.map(t => {
                // Clean up any editing state that might have been saved
                delete t.__editing;
                delete t.__el;
                delete t.__el_presentation;
                return [t.id, t];
            }));
        }
    } catch (e) {
        console.error('Error loading timers:', e);
        timers = new Map();
    }
}

function savePresets() {
    localStorage.setItem(PRESETS_KEY, JSON.stringify(customPresets));
}

function loadPresets() {
    try {
        const data = localStorage.getItem(PRESETS_KEY);
        if (data) {
            customPresets = JSON.parse(data);
        }
    } catch (e) {
        console.error('Error loading presets:', e);
        customPresets = [];
    }
}

function saveCustomSounds() {
    localStorage.setItem(CUSTOM_SOUNDS_KEY, JSON.stringify(customSounds));
}

function loadCustomSounds() {
    try {
        const data = localStorage.getItem(CUSTOM_SOUNDS_KEY);
        if (data) {
            const loadedSounds = JSON.parse(data);
            
            // Clean up old format and only keep new format with filename
            customSounds = {};
            Object.keys(loadedSounds).forEach(soundId => {
                const soundInfo = loadedSounds[soundId];
                // Only keep sounds with the new format (object with data and name)
                if (typeof soundInfo === 'object' && soundInfo.data && soundInfo.name) {
                    customSounds[soundId] = soundInfo;
                }
                // Skip old format (just string data without filename)
            });
            
            // Save cleaned up version
            if (Object.keys(customSounds).length > 0) {
                saveCustomSounds();
            }
            
            // Restore custom sound options in dropdowns
            Object.keys(customSounds).forEach(soundId => {
                const soundInfo = customSounds[soundId];
                const soundName = soundInfo.name;
                const displayName = shortenFileName(soundName, 15);
                
                // Add to timer creation dropdown
                if (elements.customSound) {
                    const existingOption = elements.customSound.querySelector(`option[value="${soundId}"]`);
                    if (!existingOption) {
                        const option = document.createElement('option');
                        option.value = soundId;
                        option.textContent = `📁 ${displayName}`;
                        option.title = soundName;
                        option.setAttribute('data-custom', 'true');
                        elements.customSound.appendChild(option);
                    }
                }
                
                // Add to default sound dropdown
                if (elements.defaultSound) {
                    const existingOption = elements.defaultSound.querySelector(`option[value="${soundId}"]`);
                    if (!existingOption) {
                        const option = document.createElement('option');
                        option.value = soundId;
                        option.textContent = `📁 ${displayName}`;
                        option.title = soundName;
                        option.setAttribute('data-custom', 'true');
                        elements.defaultSound.appendChild(option);
                    }
                }
            });
        }
    } catch (e) {
        console.error('Error loading custom sounds:', e);
        customSounds = {};
    }
}

function saveStats() {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

function loadStats() {
    try {
        const data = localStorage.getItem(STATS_KEY);
        return data ? JSON.parse(data) : {
            totalCompleted: 0,
            completedToday: 0,
            lastCompletionDate: null,
            totalFocusTime: 0
        };
    } catch (e) {
        return {
            totalCompleted: 0,
            completedToday: 0,
            lastCompletionDate: null,
            totalFocusTime: 0
        };
    }
}

function loadSettings() {
    try {
        const data = localStorage.getItem(SETTINGS_KEY);
        return data ? JSON.parse(data) : {
            defaultSound: '',
            theme: 'blue',
            notificationsByDefault: true
        };
    } catch (e) {
        return {
            defaultSound: '',
            theme: 'blue',
            notificationsByDefault: true
        };
    }
}

function saveSettings() {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

// ===== Worker Communication =====
if (worker) {
    worker.onmessage = (e) => {
        const { type, payload } = e.data;
        
        if (type === 'tick') {
            handleTick(payload);
        }
    };
    
    worker.onerror = (error) => {
        console.error('Worker error:', error);
    };
}

function sendToWorker(type, payload) {
    if (worker) {
        worker.postMessage({ type, payload });
    }
}

function initWorker() {
    if (!worker) {
        console.warn('Worker not available, timers may not work in background');
        return;
    }
    const timersArray = Array.from(timers.values()).map(t => ({
        ...t,
        __el: undefined,
        __editing: undefined,
        __el_presentation: undefined
    }));
    sendToWorker('init', { timers: timersArray });
}

// ===== Audio Functions =====
let audioContext;
try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
} catch (e) {
    console.warn('AudioContext not supported:', e);
}

function playBeep() {
    if (!audioContext) return;
    
    // Resume audio context if suspended (browser autoplay policy)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 880;
        oscillator.type = 'sine';
        
        const now = audioContext.currentTime;
        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
        
        oscillator.start(now);
        oscillator.stop(now + 0.6);
    } catch (e) {
        console.error('Error playing beep:', e);
    }
}

function playBell() {
    if (!audioContext) return;
    
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        const now = audioContext.currentTime;
        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
        
        oscillator.start(now);
        oscillator.stop(now + 0.8);
    } catch (e) {
        console.error('Error playing bell:', e);
    }
}

function playChime() {
    if (!audioContext) return;
    
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    try {
        const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5
        frequencies.forEach((freq, i) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            
            const now = audioContext.currentTime + (i * 0.15);
            gainNode.gain.setValueAtTime(0.2, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
            
            oscillator.start(now);
            oscillator.stop(now + 0.5);
        });
    } catch (e) {
        console.error('Error playing chime:', e);
    }
}

function playDing() {
    if (!audioContext) return;
    
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 1200;
        oscillator.type = 'triangle';
        
        const now = audioContext.currentTime;
        gainNode.gain.setValueAtTime(0.4, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        
        oscillator.start(now);
        oscillator.stop(now + 0.4);
    } catch (e) {
        console.error('Error playing ding:', e);
    }
}

function playTickSound() {
    if (!audioContext) return;
    
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    try {
        // Create alarm sound - Reng Reng Reng (3 rings)
        const oscillator1 = audioContext.createOscillator();
        const oscillator2 = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Two frequencies for alarm effect
        oscillator1.frequency.value = 800;
        oscillator2.frequency.value = 1000;
        oscillator1.type = 'square';
        oscillator2.type = 'square';
        
        const now = audioContext.currentTime;
        
        // First ring (Reng)
        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.setValueAtTime(0.3, now + 0.1);
        gainNode.gain.setValueAtTime(0, now + 0.12);
        
        // Second ring (Reng)
        gainNode.gain.setValueAtTime(0.3, now + 0.15);
        gainNode.gain.setValueAtTime(0.3, now + 0.25);
        gainNode.gain.setValueAtTime(0, now + 0.27);
        
        // Third ring (Reng)
        gainNode.gain.setValueAtTime(0.3, now + 0.3);
        gainNode.gain.setValueAtTime(0.3, now + 0.4);
        gainNode.gain.setValueAtTime(0, now + 0.42);
        
        oscillator1.start(now);
        oscillator1.stop(now + 0.5);
        oscillator2.start(now);
        oscillator2.stop(now + 0.5);
    } catch (e) {
        console.error('Error playing tick:', e);
    }
}

function playSoundByType(soundType) {
    if (!audioContext) return;
    
    // Resume audio context if suspended (browser autoplay policy)
    if (audioContext.state === 'suspended') {
        audioContext.resume().catch(e => {
            console.error('Failed to resume audio context:', e);
        });
    }
    
    if (!soundType || soundType === '') {
        playBeep();
        return;
    }
    
    // Check if it's a built-in sound
    if (soundType === 'bell') {
        playBell();
    } else if (soundType === 'chime') {
        playChime();
    } else if (soundType === 'ding') {
        playDing();
    } else if (soundType === 'tick') {
        playTickSound();
    } else if (customSounds[soundType]) {
        // Custom uploaded sound
        const soundInfo = customSounds[soundType];
        const soundData = typeof soundInfo === 'object' ? soundInfo.data : soundInfo;
        const audio = new Audio(soundData);
        audio.play().catch(err => {
            console.error('Failed to play custom sound:', err);
            playBeep(); // Fallback to beep
        });
    } else {
        playBeep();
    }
}

function handleSoundFileUpload(file, isDefault = false) {
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const soundData = e.target.result;
        const soundId = `custom_${Date.now()}`;
        customSounds[soundId] = {
            data: soundData,
            name: file.name
        };
        
        if (isDefault) {
            settings.defaultSound = soundId;
            saveSettings();
            // Update default sound dropdown to show custom was selected
            if (elements.defaultSound) {
                // Remove old custom option if exists
                const oldCustom = elements.defaultSound.querySelector('option[data-custom="true"]');
                if (oldCustom) oldCustom.remove();
                
                // Add new custom option with the uploaded file name
                const option = document.createElement('option');
                option.value = soundId;
                option.textContent = `📁 ${shortenFileName(file.name, 15)}`;
                option.title = file.name;
                option.setAttribute('data-custom', 'true');
                elements.defaultSound.appendChild(option);
                elements.defaultSound.value = soundId;
            }
        } else {
            // Update timer creation dropdown
            if (elements.customSound) {
                // Remove old custom option if exists
                const oldCustom = elements.customSound.querySelector('option[data-custom="true"]');
                if (oldCustom) oldCustom.remove();
                
                // Add new custom option with the uploaded file name
                const option = document.createElement('option');
                option.value = soundId;
                option.textContent = `📁 ${shortenFileName(file.name, 15)}`;
                option.title = file.name;
                option.setAttribute('data-custom', 'true');
                elements.customSound.appendChild(option);
                elements.customSound.value = soundId;
            }
        }
        
        // Save custom sounds to localStorage
        saveCustomSounds();
        
        // Play preview
        playSoundByType(soundId);
    };
    reader.readAsDataURL(file);
}

// ===== Notification Functions =====
async function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        await Notification.requestPermission();
    }
}

function showNotification(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, {
            body,
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⏰</text></svg>',
            badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⏰</text></svg>'
        });
    }
}

// ===== UI Rendering =====
function renderAllTimers() {
    elements.timersGrid.innerHTML = '';
    
    if (timers.size === 0) {
        elements.emptyState.classList.remove('hidden');
        elements.timersGrid.classList.add('hidden');
        return;
    }
    
    elements.emptyState.classList.add('hidden');
    elements.timersGrid.classList.remove('hidden');
    
    const sortedTimers = Array.from(timers.values())
        .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    
    sortedTimers.forEach(timer => {
        const card = createTimerCard(timer);
        elements.timersGrid.appendChild(card);
    });
}

function createTimerCard(timer) {
    const card = document.createElement('article');
    card.className = 'timer-card';
    card.dataset.id = timer.id;
    if (timer.isRunning) card.classList.add('running');
    if (selectedTimers.has(timer.id)) card.classList.add('selected');
    
    // Check if card is in edit mode
    const isEditing = timer.__editing === true;
    
    // Calculate initial display time components
    let totalMs = 0;
    if (timer.mode === 'countdown') {
        totalMs = timer.lastRemaining ?? timer.initialDuration ?? 0;
    } else if (timer.mode === 'countup') {
        // For countup: show initialDuration + elapsed time
        totalMs = (timer.initialDuration ?? 0) + (timer.lastElapsed ?? 0);
    }
    
    const totalSeconds = Math.floor(totalMs / 1000);
    const displayHours = Math.floor(totalSeconds / 3600);
    const displayMinutes = Math.floor((totalSeconds % 3600) / 60);
    const displaySeconds = totalSeconds % 60;
    
    if (isEditing) {
        // Render edit mode
        card.classList.add('editing');
        const totalSeconds = timer.mode === 'countdown' 
            ? Math.floor((timer.initialDuration || 0) / 1000)
            : Math.floor((timer.initialDuration || 0) / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        // Build custom sound options
        let customSoundOptions = '';
        Object.keys(customSounds).forEach(soundId => {
            const selected = timer.customSound === soundId ? 'selected' : '';
            const soundInfo = customSounds[soundId];
            const soundName = typeof soundInfo === 'object' ? soundInfo.name : 'Custom Sound';
            const displayName = shortenFileName(soundName, 15);
            customSoundOptions += `<option value="${soundId}" ${selected} title="${soundName}">📁 ${displayName}</option>`;
        });
        
        card.innerHTML = `
            <div class="select-checkbox"></div>
            <div class="timer-edit-form">
                <input type="text" class="edit-name-input" value="${escapeHtml(timer.name)}" placeholder="${translations[currentLang].timerNamePlaceholder}">
                <select class="edit-mode-select">
                    <option value="countdown" ${timer.mode === 'countdown' ? 'selected' : ''}>⏱️ ${translations[currentLang].countdown}</option>
                    <option value="countup" ${timer.mode === 'countup' ? 'selected' : ''}>⏲️ ${translations[currentLang].countup}</option>
                </select>
                <div class="edit-time-inputs">
                    <input type="number" class="edit-time-input edit-hours" min="0" max="99" value="${hours}" placeholder="HH">
                    <input type="number" class="edit-time-input edit-minutes" min="0" max="59" value="${minutes}" placeholder="MM">
                    <input type="number" class="edit-time-input edit-seconds" min="0" max="59" value="${seconds}" placeholder="SS">
                </div>
                <div class="edit-sound-controls">
                    <div class="sound-row-top">
                        <select class="edit-sound-select" ${!timer.soundOn ? 'disabled' : ''}>
                            <option value="">Beep</option>
                            <option value="bell" ${timer.customSound === 'bell' ? 'selected' : ''}>🔔 ${translations[currentLang].bell || 'Chuông'}</option>
                            <option value="chime" ${timer.customSound === 'chime' ? 'selected' : ''}>🎵 Chime</option>
                            <option value="ding" ${timer.customSound === 'ding' ? 'selected' : ''}>🔊 Ding</option>
                            <option value="tick" ${timer.customSound === 'tick' ? 'selected' : ''}>⏱️ ${translations[currentLang].tick || 'Tick (3s cuối)'}</option>
                            ${customSoundOptions}
                            <option value="upload-new">📁 ${translations[currentLang].customFile || 'Tải âm thanh lên'}</option>
                        </select>
                        <button class="btn btn-tiny btn-secondary edit-test-sound-btn" ${!timer.soundOn ? 'disabled' : ''}>▶️</button>
                    </div>
                </div>
                <input type="file" class="edit-sound-file-input hidden" accept="audio/*">
                <div class="edit-actions">
                    <label class="checkbox-label">
                        <input type="checkbox" class="edit-sound-toggle" ${timer.soundOn ? 'checked' : ''}>
                        <span>🔊</span>
                    </label>
                    <div class="edit-buttons-group">
                        <button class="btn btn-secondary btn-tiny cancel-edit-btn">${translations[currentLang].cancel}</button>
                        <button class="btn btn-primary btn-tiny save-edit-btn">${translations[currentLang].save}</button>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Render normal mode
        card.innerHTML = `
            <div class="select-checkbox"></div>
            <div class="timer-header">
                <div class="timer-actions">
                    <button class="btn btn-tiny btn-secondary present-btn" title="${translations[currentLang].present}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                    </button>
                    <button class="btn btn-tiny btn-secondary edit-btn" title="${translations[currentLang].edit}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </button>
                    <button class="btn btn-tiny btn-secondary delete-btn" title="${translations[currentLang].delete}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div class="timer-info">
                <h3 class="timer-name">${escapeHtml(timer.name)}</h3>
            </div>
            
            <div class="timer-display">
                <div class="time-mode">${getModeLabel(timer.mode)}</div>
                <div class="time-units-grid">
                    <div class="time-unit">
                        <div class="time-unit-box">
                            <div class="time-unit-value" data-unit="hours">${String(displayHours).padStart(2, '0')}</div>
                        </div>
                        <div class="time-unit-label">
                            <span class="material-symbols-outlined">hourglass_top</span>
                            <span>${translations[currentLang].hours}</span>
                        </div>
                    </div>
                    <div class="time-unit">
                        <div class="time-unit-box">
                            <div class="time-unit-value" data-unit="minutes">${String(displayMinutes).padStart(2, '0')}</div>
                        </div>
                        <div class="time-unit-label">
                            <span class="material-symbols-outlined">hourglass_empty</span>
                            <span>${translations[currentLang].minutes}</span>
                        </div>
                    </div>
                    <div class="time-unit">
                        <div class="time-unit-box">
                            <div class="time-unit-value" data-unit="seconds">${String(displaySeconds).padStart(2, '0')}</div>
                        </div>
                        <div class="time-unit-label">
                            <span class="material-symbols-outlined">hourglass_bottom</span>
                            <span>${translations[currentLang].seconds}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="progress-container">
                <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div>
            </div>
            
            <div class="timer-controls">
                <button class="btn btn-primary start-btn" ${timer.isRunning ? 'disabled' : ''} title="${translations[currentLang].start}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </button>
                <button class="btn btn-secondary pause-btn" ${!timer.isRunning ? 'disabled' : ''} title="${translations[currentLang].pause}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                </button>
                <button class="btn btn-secondary reset-btn" title="${translations[currentLang].reset}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                    </svg>
                </button>
            </div>
            
            <div class="quick-adjust">
                <button class="btn btn-tiny btn-secondary adj-btn" data-delta="60000">+1m</button>
                <button class="btn btn-tiny btn-secondary adj-btn" data-delta="300000">+5m</button>
                <button class="btn btn-tiny btn-secondary adj-btn" data-delta="-60000">-1m</button>
            </div>
            
            <div class="timer-footer">
                <label class="checkbox-label">
                    <input type="checkbox" class="sound-toggle" ${timer.soundOn ? 'checked' : ''}>
                    <span>🔊 ${translations[currentLang].soundLabel}</span>
                </label>
            </div>
        `;
    }
    
    // Bind event listeners
    bindTimerCardEvents(card, timer, isEditing);
    
    // Store reference
    timer.__el = card;
    
    return card;
}

function bindTimerCardEvents(card, timer, isEditing) {
    const selectCheckbox = card.querySelector('.select-checkbox');
    
    // Selection checkbox
    if (selectCheckbox) {
        selectCheckbox.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleTimerSelection(timer.id);
        });
    }
    
    if (isEditing) {
        // Edit mode events
        const saveBtn = card.querySelector('.save-edit-btn');
        const cancelBtn = card.querySelector('.cancel-edit-btn');
        const nameInput = card.querySelector('.edit-name-input');
        const modeSelect = card.querySelector('.edit-mode-select');
        const hoursInput = card.querySelector('.edit-hours');
        const minutesInput = card.querySelector('.edit-minutes');
        const secondsInput = card.querySelector('.edit-seconds');
        const soundToggle = card.querySelector('.edit-sound-toggle');
        const soundSelect = card.querySelector('.edit-sound-select');
        const testSoundBtn = card.querySelector('.edit-test-sound-btn');
        const soundFileInput = card.querySelector('.edit-sound-file-input');
        
        // Sound select change handler - trigger file upload for "upload-new"
        soundSelect?.addEventListener('change', (e) => {
            if (e.target.value === 'upload-new') {
                soundFileInput?.click();
            }
        });
        
        // File upload handler
        soundFileInput?.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const soundData = event.target.result;
                    const soundId = `custom_${Date.now()}`;
                    customSounds[soundId] = {
                        data: soundData,
                        name: file.name
                    };
                    saveCustomSounds();
                    
                    // Add new option to dropdown
                    const option = document.createElement('option');
                    option.value = soundId;
                    option.textContent = `📁 ${shortenFileName(file.name, 15)}`;
                    option.title = file.name;
                    option.setAttribute('data-custom', 'true');
                    
                    // Insert before "upload-new" option
                    const uploadNewOption = soundSelect.querySelector('option[value="upload-new"]');
                    if (uploadNewOption) {
                        soundSelect.insertBefore(option, uploadNewOption);
                    } else {
                        soundSelect.appendChild(option);
                    }
                    
                    // Select the newly uploaded sound
                    soundSelect.value = soundId;
                    
                    // Play preview
                    playSoundByType(soundId);
                };
                reader.readAsDataURL(file);
            }
            // Reset file input
            e.target.value = '';
        });
        
        // Sound toggle handler
        soundToggle?.addEventListener('change', (e) => {
            const isEnabled = e.target.checked;
            if (soundSelect) soundSelect.disabled = !isEnabled;
            if (testSoundBtn) testSoundBtn.disabled = !isEnabled;
        });
        
        // Test sound button handler
        testSoundBtn?.addEventListener('click', () => {
            const soundType = soundSelect?.value || '';
            playSoundByType(soundType);
        });
        
        saveBtn?.addEventListener('click', () => {
            const name = nameInput.value.trim();
            const mode = modeSelect.value;
            const hours = parseInt(hoursInput.value) || 0;
            const minutes = parseInt(minutesInput.value) || 0;
            const seconds = parseInt(secondsInput.value) || 0;
            const soundOn = soundToggle?.checked ?? true;
            const customSound = soundSelect?.value || '';
            const totalMs = (hours * 3600 + minutes * 60 + seconds) * 1000;
            
            if (!name) {
                alert(translations[currentLang].validationName);
                return;
            }
            
            if (mode === 'countdown' && totalMs === 0) {
                alert(translations[currentLang].validationTime);
                return;
            }
            
            // Update timer
            timer.name = name;
            timer.mode = mode;
            timer.soundOn = soundOn;
            timer.customSound = customSound;
            
            if (mode === 'countdown') {
                timer.initialDuration = totalMs;
                timer.lastRemaining = totalMs;
            } else {
                timer.initialDuration = totalMs > 0 ? totalMs : null;
                timer.lastElapsed = 0;
            }
            
            timer.__editing = false;
            
            sendToWorker('update', { timer: { ...timer, __el: undefined, __editing: undefined } });
            saveTimers();
            renderAllTimers();
        });
        
        cancelBtn?.addEventListener('click', () => {
            timer.__editing = false;
            renderAllTimers();
        });
    } else {
        // Normal mode events
        const startBtn = card.querySelector('.start-btn');
        const pauseBtn = card.querySelector('.pause-btn');
        const resetBtn = card.querySelector('.reset-btn');
        const editBtn = card.querySelector('.edit-btn');
        const deleteBtn = card.querySelector('.delete-btn');
        const presentBtn = card.querySelector('.present-btn');
        const soundToggle = card.querySelector('.sound-toggle');
        const adjBtns = card.querySelectorAll('.adj-btn');
        
        startBtn?.addEventListener('click', () => handleStart(timer.id));
        pauseBtn?.addEventListener('click', () => handlePause(timer.id));
        resetBtn?.addEventListener('click', () => handleReset(timer.id));
        editBtn?.addEventListener('click', () => handleInlineEdit(timer.id));
        deleteBtn?.addEventListener('click', () => handleDelete(timer.id));
        presentBtn?.addEventListener('click', () => handlePresentSingle(timer.id));
        soundToggle?.addEventListener('change', (e) => {
            timer.soundOn = e.target.checked;
            saveTimers();
        });
        
        adjBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const delta = parseInt(btn.dataset.delta);
                handleAdjust(timer.id, delta);
            });
        });
    }
}

function updateTimerCard(id, snapshot) {
    const timer = timers.get(id);
    if (!timer) return;
    
    // Update both normal and presentation card if they exist
    const cards = [timer.__el, timer.__el_presentation].filter(el => el && el.querySelector);
    
    cards.forEach(card => {
        if (!card || typeof card.querySelector !== 'function') return;
        
        const hoursEl = card.querySelector('[data-unit="hours"]');
        const minutesEl = card.querySelector('[data-unit="minutes"]');
        const secondsEl = card.querySelector('[data-unit="seconds"]');
        const timeLarge = card.querySelector('.time-large');
        const progressBar = card.querySelector('.progress-bar');
        const startBtn = card.querySelector('.start-btn, .btn-icon-start');
        const pauseBtn = card.querySelector('.pause-btn, .btn-icon-pause');
        
        // Calculate time values
        let totalMs = 0;
        if (snapshot.mode === 'countup') {
            // For countup: show initialDuration + elapsed
            const initialDuration = snapshot.initialDuration || timer.initialDuration || 0;
            totalMs = initialDuration + (snapshot.elapsed || 0);
            
            // Calculate progress for countup
            if (progressBar && snapshot.targetDuration) {
                const progress = Math.min(100, (totalMs / snapshot.targetDuration) * 100);
                progressBar.style.width = `${progress}%`;
                progressBar.setAttribute('aria-valuenow', Math.round(progress));
            } else if (progressBar) {
                progressBar.style.width = '0%';
            }
        } else {
            totalMs = snapshot.remaining || 0;
            
            // Calculate progress for countdown
            if (progressBar) {
                const progress = snapshot.initialDuration 
                    ? (1 - (totalMs / snapshot.initialDuration)) * 100 
                    : 0;
                progressBar.style.width = `${progress}%`;
                progressBar.setAttribute('aria-valuenow', Math.round(progress));
            }
        }
        
        // Update individual time units if they exist
        if (hoursEl || minutesEl || secondsEl) {
            const totalSeconds = Math.floor(totalMs / 1000);
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            
            if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
            if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
            if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
            
            // Play alarm sound on last 2 seconds for countdown mode if tick sound is selected
            const selectedSound = timer.customSound || settings.defaultSound || '';
            if (snapshot.mode === 'countdown' && timer.soundOn && snapshot.isRunning && selectedSound === 'tick') {
                if (totalSeconds <= 2 && totalSeconds > 0) {
                    const warningKey = `${id}_${totalSeconds}`;
                    if (!warningPlayed.has(warningKey)) {
                        warningPlayed.add(warningKey);
                        playTickSound();
                    }
                } else if (totalSeconds > 2) {
                    // Clear warning flags when timer is reset or goes above 2 seconds
                    for (let i = 1; i <= 2; i++) {
                        warningPlayed.delete(`${id}_${i}`);
                    }
                }
            }
        }
        
        // Fallback to time-large for backward compatibility
        if (timeLarge) {
            timeLarge.textContent = formatTime(totalMs);
        }
        
        // Always update running state and button states
        card.classList.toggle('running', snapshot.isRunning);
        if (startBtn) startBtn.disabled = snapshot.isRunning;
        if (pauseBtn) pauseBtn.disabled = !snapshot.isRunning;
    });
    
    // Update timer state
    timer.isRunning = snapshot.isRunning;
    
    // Handle completion
    if (snapshot.completed) {
        handleCompletion(timer.id);
    }
}

function getModeLabel(mode) {
    const t = translations[currentLang];
    const labels = {
        countdown: t.countdown,
        countup: t.countup
    };
    return labels[mode] || mode;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function shortenFileName(fileName, maxLength = 12) {
    if (fileName.length <= maxLength) return fileName;
    
    const ext = fileName.substring(fileName.lastIndexOf('.'));
    const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
    const availableLength = maxLength - ext.length - 3; // 3 for "..."
    
    if (availableLength <= 0) return fileName.substring(0, maxLength - 3) + '...';
    
    return nameWithoutExt.substring(0, availableLength) + '...' + ext;
}

// ===== Timer Actions =====
function handleStart(id) {
    const timer = timers.get(id);
    if (!timer) return;
    
    timer.isRunning = true;
    
    // Send full timer data to worker to ensure it has all info
    sendToWorker('update', { timer: { ...timer, __el: undefined, __el_presentation: undefined } });
    sendToWorker('start', { id });
    
    saveTimers();
    
    // Update UI immediately for both normal and presentation cards
    const cards = [timer.__el, timer.__el_presentation].filter(Boolean);
    cards.forEach(card => {
        card.classList.add('running');
        const startBtn = card.querySelector('.start-btn, .btn-icon-start');
        const pauseBtn = card.querySelector('.pause-btn, .btn-icon-pause');
        if (startBtn) startBtn.disabled = true;
        if (pauseBtn) pauseBtn.disabled = false;
    });
}

function handlePause(id) {
    const timer = timers.get(id);
    if (!timer) return;
    
    timer.isRunning = false;
    sendToWorker('pause', { id });
    saveTimers();
    
    // Update UI immediately for both normal and presentation cards
    const cards = [timer.__el, timer.__el_presentation].filter(Boolean);
    cards.forEach(card => {
        card.classList.remove('running');
        const startBtn = card.querySelector('.start-btn, .btn-icon-start');
        const pauseBtn = card.querySelector('.pause-btn, .btn-icon-pause');
        if (startBtn) startBtn.disabled = false;
        if (pauseBtn) pauseBtn.disabled = true;
    });
}

function handleReset(id) {
    const timer = timers.get(id);
    if (!timer) return;
    
    timer.isRunning = false;
    
    // Clear warning sound flags for this timer
    for (let i = 1; i <= 2; i++) {
        warningPlayed.delete(`${id}_${i}`);
    }
    
    if (timer.mode === 'countdown') {
        timer.lastRemaining = timer.initialDuration;
    } else if (timer.mode === 'countup') {
        timer.lastElapsed = 0;
    }
    
    sendToWorker('reset', { id });
    
    // Remove finished class from both cards
    const cards = [timer.__el, timer.__el_presentation].filter(Boolean);
    cards.forEach(card => {
        card.classList.remove('finished');
    });
    
    saveTimers();
    updateTimerCard(id, { 
        ...timer, 
        isRunning: false,
        remaining: timer.lastRemaining,
        elapsed: timer.lastElapsed
    });
}

function handleDelete(id) {
    if (!confirm(translations[currentLang].confirmDelete)) return;
    
    const timer = timers.get(id);
    if (timer && timer.__el) {
        timer.__el.remove();
    }
    
    // Clear warning sound flags for this timer
    for (let i = 1; i <= 2; i++) {
        warningPlayed.delete(`${id}_${i}`);
    }
    
    timers.delete(id);
    sendToWorker('remove', { id });
    saveTimers();
    
    // Remove from selection if selected
    selectedTimers.delete(id);
    updateSelectionToolbar();
    
    renderAllTimers();
}

function handleInlineEdit(id) {
    const timer = timers.get(id);
    if (!timer) return;
    
    // Set editing flag
    timer.__editing = true;
    
    // Re-render to show edit form
    renderAllTimers();
}

function handleAdjust(id, deltaMs) {
    const timer = timers.get(id);
    if (!timer) return;
    
    if (timer.mode === 'countdown') {
        if (!timer.isRunning) {
            timer.lastRemaining = Math.max(0, (timer.lastRemaining || timer.initialDuration || 0) + deltaMs);
        }
    } else if (timer.mode === 'countup') {
        if (!timer.isRunning) {
            timer.lastElapsed = Math.max(0, (timer.lastElapsed || 0) + deltaMs);
        }
    }
    
    sendToWorker('adjust', { id, delta: deltaMs });
    saveTimers();
}

function handleCompletion(id) {
    const timer = timers.get(id);
    if (!timer) return;
    
    if (timer.__el) {
        timer.__el.classList.add('finished');
    }
    
    // Play sound (skip if tick sound - tick only plays during last 3 seconds)
    if (timer.soundOn) {
        const soundType = timer.customSound || settings.defaultSound || '';
        if (soundType !== 'tick') {
            playSoundByType(soundType);
        }
    }
    
    // Show notification
    if (timer.notificationOn) {
        showNotification('⏰ Đã hoàn thành!', `"${timer.name}" đã kết thúc.`);
    }
    
    // Update stats
    updateCompletionStats(timer);
}

function updateCompletionStats(timer) {
    const today = new Date().toDateString();
    
    if (stats.lastCompletionDate !== today) {
        stats.completedToday = 0;
        stats.lastCompletionDate = today;
    }
    
    stats.totalCompleted++;
    stats.completedToday++;
    
    stats.totalCompleted++;
    stats.lastCompleted = Date.now();
    
    if (timer.initialDuration) {
        stats.totalFocusTime += timer.initialDuration;
    }
    
    saveStats();
}

// ===== Selection Functions =====
function toggleTimerSelection(id) {
    if (selectedTimers.has(id)) {
        selectedTimers.delete(id);
    } else {
        selectedTimers.add(id);
    }
    
    updateSelectionToolbar();
    
    // Update card visual state
    const timer = timers.get(id);
    if (timer && timer.__el) {
        timer.__el.classList.toggle('selected', selectedTimers.has(id));
    }
}

function clearSelection() {
    selectedTimers.clear();
    updateSelectionToolbar();
    
    // Update all cards
    timers.forEach(timer => {
        if (timer.__el) {
            timer.__el.classList.remove('selected');
        }
    });
}

function updateSelectionToolbar() {
    const count = selectedTimers.size;
    
    if (count > 0) {
        elements.selectionToolbar.classList.remove('hidden');
        elements.selectionCount.textContent = `${count} đã chọn`;
    } else {
        elements.selectionToolbar.classList.add('hidden');
    }
}

function deleteSelected() {
    if (selectedTimers.size === 0) return;
    
    const t = translations[currentLang];
    if (!confirm(`${t.confirmDeleteMultiple} ${selectedTimers.size} ${t.timersSelected}`)) return;
    
    selectedTimers.forEach(id => {
        const timer = timers.get(id);
        if (timer && timer.__el) {
            timer.__el.remove();
        }
        timers.delete(id);
        sendToWorker('remove', { id });
    });
    
    selectedTimers.clear();
    updateSelectionToolbar();
    saveTimers();
    renderAllTimers();
}

// ===== Presentation Mode Functions =====
function handlePresentSelected() {
    if (selectedTimers.size === 0) return;
    
    const timersToPresent = Array.from(selectedTimers)
        .map(id => timers.get(id))
        .filter(t => t);
    
    enterPresentationMode(timersToPresent);
}

function handlePresentSingle(id) {
    const timer = timers.get(id);
    if (!timer) return;
    
    enterPresentationMode([timer]);
}

function enterPresentationMode(timersToPresent) {
    if (timersToPresent.length === 0) return;
    
    isPresentationMode = true;
    elements.presentationMode.classList.remove('hidden');
    elements.presentationGrid.innerHTML = '';
    
    // Set grid class based on count
    if (timersToPresent.length === 1) {
        elements.presentationGrid.classList.add('single');
        elements.presentationGrid.classList.remove('multiple');
    } else {
        elements.presentationGrid.classList.add('multiple');
        elements.presentationGrid.classList.remove('single');
    }
    
    // Render timer cards in presentation mode
    timersToPresent.forEach(timer => {
        const card = createPresentationTimerCard(timer);
        elements.presentationGrid.appendChild(card);
    });
    
    // Request fullscreen
    requestFullscreen();
}

function createPresentationTimerCard(timer) {
    const card = document.createElement('article');
    card.className = 'timer-card presentation-card';
    card.dataset.id = timer.id;
    if (timer.isRunning) card.classList.add('running');
    
    // Calculate initial display time components
    let totalMs = 0;
    if (timer.mode === 'countdown') {
        totalMs = timer.lastRemaining ?? timer.initialDuration ?? 0;
    } else if (timer.mode === 'countup') {
        // For countup: always show target duration for initial display (not elapsed)
        totalMs = timer.targetDuration ?? 0;
    }
    
    const totalSeconds = Math.floor(totalMs / 1000);
    const displayHours = Math.floor(totalSeconds / 3600);
    const displayMinutes = Math.floor((totalSeconds % 3600) / 60);
    const displaySeconds = totalSeconds % 60;
    
    card.innerHTML = `
        <div class="presentation-timer-display">
            <div class="time-units-grid">
                <div class="time-unit">
                    <div class="time-unit-box">
                        <div class="time-unit-value" data-unit="hours">${String(displayHours).padStart(2, '0')}</div>
                    </div>
                    <div class="time-unit-label">
                        <span class="material-symbols-outlined">hourglass_top</span>
                        <span>${translations[currentLang].hours}</span>
                    </div>
                </div>
                <div class="time-unit">
                    <div class="time-unit-box">
                        <div class="time-unit-value" data-unit="minutes">${String(displayMinutes).padStart(2, '0')}</div>
                    </div>
                    <div class="time-unit-label">
                        <span class="material-symbols-outlined">hourglass_empty</span>
                        <span>${translations[currentLang].minutes}</span>
                    </div>
                </div>
                <div class="time-unit">
                    <div class="time-unit-box">
                        <div class="time-unit-value" data-unit="seconds">${String(displaySeconds).padStart(2, '0')}</div>
                    </div>
                    <div class="time-unit-label">
                        <span class="material-symbols-outlined">hourglass_bottom</span>
                        <span>${translations[currentLang].seconds}</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="progress-container">
            <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div>
        </div>
        
        <div class="presentation-timer-controls">
            <button class="btn-icon btn-icon-start" title="${translations[currentLang].start}" ${timer.isRunning ? 'disabled' : ''}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
            </button>
            <button class="btn-icon btn-icon-pause" title="${translations[currentLang].pause}" ${!timer.isRunning ? 'disabled' : ''}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
            </button>
            <button class="btn-icon btn-icon-reset" title="${translations[currentLang].reset}">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                </svg>
            </button>
        </div>
    `;
    
    // Bind event listeners for presentation mode
    const startBtn = card.querySelector('.btn-icon-start');
    const pauseBtn = card.querySelector('.btn-icon-pause');
    const resetBtn = card.querySelector('.btn-icon-reset');
    
    startBtn?.addEventListener('click', () => handleStart(timer.id));
    pauseBtn?.addEventListener('click', () => handlePause(timer.id));
    resetBtn?.addEventListener('click', () => handleReset(timer.id));
    
    // Store reference
    timer.__el_presentation = card;
    
    return card;
}

function exitPresentationMode() {
    isPresentationMode = false;
    elements.presentationMode.classList.add('hidden');
    elements.presentationGrid.innerHTML = '';
    
    // Exit fullscreen if active
    if (document.fullscreenElement) {
        exitFullscreen();
    }
    
    // Re-render main grid to restore normal state
    renderAllTimers();
}

function requestFullscreen() {
    const elem = elements.presentationMode;
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => {
            console.log('Fullscreen request failed:', err);
        });
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function toggleFullscreen() {
    if (document.fullscreenElement) {
        exitFullscreen();
    } else {
        requestFullscreen();
    }
}

// ===== Tick Handler =====
function handleTick(payload) {
    const { updates } = payload;
    
    updates.forEach(update => {
        updateTimerCard(update.id, update);
    });
    
    // Periodically save state
    saveTimers();
}

// ===== Modal Functions =====
function openAddModal() {
    editingId = null;
    const t = translations[currentLang];
    elements.modalTitle.textContent = t.createNew;
    elements.submitBtnText.textContent = t.save;
    
    // Reset form
    elements.timerForm.reset();
    elements.timerMode.value = 'countdown';
    elements.timerHours.value = 0;
    elements.timerMinutes.value = 0;
    elements.timerSeconds.value = 0;
    elements.targetHours.value = 0;
    elements.targetMinutes.value = 0;
    elements.targetSeconds.value = 0;
    elements.enableSound.checked = true;
    elements.enableNotification.checked = true;
    
    // Update all labels
    const timerNameLabel = document.querySelector('label[for="timerName"]');
    if (timerNameLabel) timerNameLabel.textContent = t.timerName + ' *';
    
    const timerNameInput = document.querySelector('#timerName');
    if (timerNameInput) timerNameInput.placeholder = t.timerNamePlaceholder;
    
    const modeLabel = document.querySelector('label[for="timerMode"]');
    if (modeLabel) modeLabel.textContent = t.mode + ' *';
    
    const timeLabelText = document.querySelector('#timeLabelText');
    if (timeLabelText) timeLabelText.textContent = t.duration;
    
    const enableSoundLabel = document.querySelector('label[for="enableSound"] span');
    if (enableSoundLabel) enableSoundLabel.innerHTML = '🔊 ' + t.enableSound;
    
    const customSoundLabel = document.querySelector('label[for="customSound"]');
    if (customSoundLabel) customSoundLabel.textContent = t.customSound;
    
    // Update sound dropdown options
    const soundOptions = document.querySelectorAll('#customSound option');
    soundOptions.forEach(option => {
        if (option.value === '') option.textContent = t.defaultBeep;
        else if (option.value === 'bell') option.textContent = '🔔 ' + t.bell;
        else if (option.value === 'chime') option.textContent = '🎵 ' + t.chime;
        else if (option.value === 'ding') option.textContent = '🔊 ' + t.ding;
        else if (option.value === 'tick') option.textContent = '⏱️ ' + t.tick;
        else if (option.value === 'custom') option.textContent = '📁 ' + t.customFile;
    });
    
    const soundFileHint = document.querySelector('#soundSettings .form-hint');
    if (soundFileHint) soundFileHint.textContent = t.soundFileHint;
    
    const enableNotifLabel = document.querySelector('label[for="enableNotification"] span');
    if (enableNotifLabel) enableNotifLabel.innerHTML = '🔔 ' + t.enableNotification;
    
    // Update mode dropdown options
    const countdownOption = document.querySelector('#timerMode option[value="countdown"]');
    const countupOption = document.querySelector('#timerMode option[value="countup"]');
    if (countdownOption) countdownOption.textContent = t.countdown;
    if (countupOption) countupOption.textContent = t.countup;
    
    const cancelBtn = document.querySelector('#cancelBtn');
    if (cancelBtn) cancelBtn.textContent = t.cancel;
    
    updateTimeLabelAndHint();
    showModal(elements.timerModal);
}

function openEditModal(id) {
    const timer = timers.get(id);
    if (!timer) return;
    
    editingId = id;
    const t = translations[currentLang];
    elements.modalTitle.textContent = t.editTimer;
    elements.submitBtnText.textContent = t.update;
    
    // Fill form
    elements.timerName.value = timer.name;
    elements.timerMode.value = timer.mode;
    elements.enableSound.checked = timer.soundOn ?? true;
    elements.enableNotification.checked = timer.notificationOn ?? true;
    
    // Update all labels
    const timerNameLabel = document.querySelector('label[for="timerName"]');
    if (timerNameLabel) timerNameLabel.textContent = t.timerName + ' *';
    
    const timerNameInput = document.querySelector('#timerName');
    if (timerNameInput) timerNameInput.placeholder = t.timerNamePlaceholder;
    
    const modeLabel = document.querySelector('label[for="timerMode"]');
    if (modeLabel) modeLabel.textContent = t.mode + ' *';
    
    const timeLabelText = document.querySelector('#timeLabelText');
    if (timeLabelText) timeLabelText.textContent = t.duration;
    
    const enableSoundLabel = document.querySelector('label[for="enableSound"] span');
    if (enableSoundLabel) enableSoundLabel.innerHTML = '🔊 ' + t.enableSound;
    
    const customSoundLabel = document.querySelector('label[for="customSound"]');
    if (customSoundLabel) customSoundLabel.textContent = t.customSound;
    
    // Update sound dropdown options
    const soundOptions = document.querySelectorAll('#customSound option');
    soundOptions.forEach(option => {
        if (option.value === '') option.textContent = t.defaultBeep;
        else if (option.value === 'bell') option.textContent = '🔔 ' + t.bell;
        else if (option.value === 'chime') option.textContent = '🎵 ' + t.chime;
        else if (option.value === 'ding') option.textContent = '🔊 ' + t.ding;
        else if (option.value === 'tick') option.textContent = '⏱️ ' + t.tick;
        else if (option.value === 'custom') option.textContent = '📁 ' + t.customFile;
    });
    
    const soundFileHint = document.querySelector('#soundSettings .form-hint');
    if (soundFileHint) soundFileHint.textContent = t.soundFileHint;
    
    const enableNotifLabel = document.querySelector('label[for="enableNotification"] span');
    if (enableNotifLabel) enableNotifLabel.innerHTML = '🔔 ' + t.enableNotification;
    
    // Update mode dropdown options
    const countdownOption = document.querySelector('#timerMode option[value="countdown"]');
    const countupOption = document.querySelector('#timerMode option[value="countup"]');
    if (countdownOption) countdownOption.textContent = t.countdown;
    if (countupOption) countupOption.textContent = t.countup;
    
    const cancelBtn = document.querySelector('#cancelBtn');
    if (cancelBtn) cancelBtn.textContent = t.cancel;
    
    // Reset all time inputs first
    elements.timerHours.value = 0;
    elements.timerMinutes.value = 0;
    elements.timerSeconds.value = 0;
    elements.targetHours.value = 0;
    elements.targetMinutes.value = 0;
    elements.targetSeconds.value = 0;
    
    // Set time based on mode and current timer state
    if (timer.mode === 'countdown') {
        const totalSeconds = Math.floor((timer.initialDuration || 0) / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        elements.timerHours.value = hours;
        elements.timerMinutes.value = minutes;
        elements.timerSeconds.value = seconds;
    } else if (timer.mode === 'countup') {
        // For countup, show "Đếm từ" (initialDuration)
        if (timer.initialDuration) {
            const totalSeconds = Math.floor(timer.initialDuration / 1000);
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            
            elements.timerHours.value = hours;
            elements.timerMinutes.value = minutes;
            elements.timerSeconds.value = seconds;
        }
        
        // Show "Mục Tiêu" (targetDuration)
        if (timer.targetDuration) {
            const targetTotalSeconds = Math.floor(timer.targetDuration / 1000);
            const targetHours = Math.floor(targetTotalSeconds / 3600);
            const targetMinutes = Math.floor((targetTotalSeconds % 3600) / 60);
            const targetSeconds = targetTotalSeconds % 60;
            
            elements.targetHours.value = targetHours;
            elements.targetMinutes.value = targetMinutes;
            elements.targetSeconds.value = targetSeconds;
        }
    }
    
    updateTimeLabelAndHint();
    showModal(elements.timerModal);
}

function showModal(modal) {
    modal.classList.add('active');
    requestNotificationPermission();
}

function closeModal(modal) {
    modal.classList.remove('active');
    editingId = null;
}

function updateTimeLabelAndHint() {
    const mode = elements.timerMode.value;
    const t = translations[currentLang];
    if (mode === 'countdown') {
        elements.timeLabelText.textContent = t.duration;
        elements.timeHint.textContent = t.countdownHint;
        elements.targetTimeGroup.style.display = 'none';
    } else if (mode === 'countup') {
        elements.timeLabelText.textContent = t.startFrom;
        elements.timeHint.textContent = t.startFromHint;
        elements.targetTimeGroup.style.display = 'block';
        if (elements.targetTimeHint) {
            elements.targetTimeHint.textContent = t.targetTimeHint;
        }
    }
}

// ===== Form Submission =====
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = elements.timerName.value.trim();
    const mode = elements.timerMode.value;
    const soundOn = elements.enableSound.checked;
    const customSound = elements.customSound?.value || '';
    const notificationOn = elements.enableNotification.checked;
    
    // Validation
    if (!name) {
        alert(translations[currentLang].validationName);
        return;
    }
    
    // Get time values
    const hours = parseInt(elements.timerHours.value) || 0;
    const minutes = parseInt(elements.timerMinutes.value) || 0;
    const seconds = parseInt(elements.timerSeconds.value) || 0;
    const totalMs = (hours * 3600 + minutes * 60 + seconds) * 1000;
    
    // Get target time values for countup mode
    const targetHours = parseInt(elements.targetHours?.value) || 0;
    const targetMinutes = parseInt(elements.targetMinutes?.value) || 0;
    const targetSeconds = parseInt(elements.targetSeconds?.value) || 0;
    const targetMs = (targetHours * 3600 + targetMinutes * 60 + targetSeconds) * 1000;
    
    let timerData = {
        name,
        mode,
        soundOn,
        customSound,
        notificationOn,
        isRunning: false
    };
    
    if (mode === 'countdown') {
        if (totalMs === 0) {
            alert(translations[currentLang].validationTime);
            return;
        }
        
        timerData.initialDuration = totalMs;
        timerData.lastRemaining = totalMs;
    } else if (mode === 'countup') {
        // initialDuration = "Đếm từ" (start time)
        // targetDuration = "Mục Tiêu" (end time)
        timerData.initialDuration = totalMs; // Can be 0 to start from 00:00:00
        timerData.targetDuration = targetMs > 0 ? targetMs : null; // null = unlimited
        // Keep lastElapsed if editing, otherwise start fresh
        if (!editingId) {
            timerData.lastElapsed = 0;
        }
    }
    
    if (editingId) {
        // Update existing timer
        const timer = timers.get(editingId);
        if (!timer) {
            console.error('Timer not found:', editingId);
            elements.timerModal.classList.remove('active');
            editingId = null;
            return;
        }
        
        console.log('Updating timer:', editingId, 'with data:', timerData);
        
        try {
            const wasRunning = timer.isRunning;
            
            // Stop timer first if running
            if (wasRunning) {
                sendToWorker('pause', { id: editingId });
            }
            
            // Update timer data
            Object.assign(timer, timerData);
            
            // Create clean timer object for worker (without DOM reference)
            const cleanTimer = { ...timer, __el: undefined, __editing: undefined };
            
            // Update worker with new timer data
            sendToWorker('update', { timer: cleanTimer });
            
            // Restart if it was running
            if (wasRunning) {
                sendToWorker('start', { id: editingId });
            }
            
            saveTimers();
            renderAllTimers();
            initWorker();
            
            console.log('Timer updated successfully');
        } catch (err) {
            console.error('Error updating timer:', err);
        }
        
        // Always close modal
        elements.timerModal.classList.remove('active');
        editingId = null;
        console.log('Modal closed, editingId reset');
    } else {
        // Create new timer
        const id = uid();
        const newTimer = {
            id,
            ...timerData,
            createdAt: Date.now()
        };
        
        try {
            timers.set(id, newTimer);
            sendToWorker('add', { timer: { ...newTimer, __el: undefined, __editing: undefined } });
            
            saveTimers();
            renderAllTimers();
            
            // Re-initialize worker with all timers to ensure sync
            initWorker();
        } catch (err) {
            console.error('Error creating timer:', err);
        }
        
        // Always close modal
        elements.timerModal.classList.remove('active');
        editingId = null;
    }
}

// ===== Presets =====
function togglePresets() {
    elements.presetsBar.classList.toggle('hidden');
}

function renderPresets() {
    // Clear existing custom presets from grid
    const existingCustom = elements.presetsGrid.querySelectorAll('.preset-card.custom');
    existingCustom.forEach(el => el.remove());
    
    // Add custom presets to grid
    customPresets.forEach(preset => {
        const card = document.createElement('button');
        card.className = 'preset-card custom';
        card.dataset.presetId = preset.id;
        
        // preset.duration is in seconds
        const hours = Math.floor(preset.duration / 3600);
        const minutes = Math.floor((preset.duration % 3600) / 60);
        const seconds = preset.duration % 60;
        
        let timeStr = '';
        if (hours > 0) timeStr += `${hours}h `;
        if (minutes > 0) timeStr += `${minutes}m `;
        if (seconds > 0 || (hours === 0 && minutes === 0)) timeStr += `${seconds}s`;
        
        const iconSVG = preset.mode === 'countup' 
            ? '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 2"/><path d="M8 2v1"/></svg>'
            : '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/><path d="M8 5v3l2 2"/></svg>';
        
        card.innerHTML = `
            <span class="preset-icon">${iconSVG}</span>
            <span class="preset-name">${escapeHtml(preset.name)}</span>
            <span class="preset-time">${timeStr.trim()}</span>
            <div class="preset-actions">
                <button class="btn-icon-tiny" onclick="event.stopPropagation(); editPreset('${preset.id}')" title="Sửa">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                </button>
                <button class="btn-icon-tiny" onclick="event.stopPropagation(); deletePreset('${preset.id}')" title="Xóa">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
            </div>
        `;
        
        card.addEventListener('click', () => handleCustomPreset(preset.id));
        elements.presetsGrid.appendChild(card);
    });
}

function handleCustomPreset(presetId) {
    const preset = customPresets.find(p => p.id === presetId);
    if (!preset) return;
    
    console.log('Applying preset:', preset); // Debug log
    
    const t = translations[currentLang];
    const id = uid();
    const mode = preset.mode || 'countdown';
    const durationMs = preset.duration * 1000; // preset.duration is in seconds
    
    // Use translation if nameKey exists, otherwise use preset.name directly
    const timerName = preset.nameKey ? t[preset.nameKey] : preset.name;
    
    const timer = {
        id,
        name: timerName,
        mode: mode,
        soundOn: settings.notificationsByDefault !== false,
        notificationOn: settings.notificationsByDefault !== false,
        isRunning: false,
        createdAt: Date.now()
    };
    
    // Set duration based on mode
    if (mode === 'countdown') {
        timer.initialDuration = durationMs;
        timer.lastRemaining = durationMs;
    } else {
        // countup mode - start from preset duration
        timer.lastElapsed = durationMs;
    }
    
    console.log('Created timer from preset:', timer); // Debug log
    
    timers.set(id, timer);
    sendToWorker('add', { timer: { ...timer, __el: undefined, __el_presentation: undefined } });
    saveTimers();
    renderAllTimers();
}

// ===== Custom Presets Management =====
function showPresetsManager() {
    renderCustomPresetsList();
    showModal(elements.presetsModal);
}

function renderCustomPresetsList() {
    if (customPresets.length === 0) {
        elements.customPresetsList.innerHTML = `
            <div class="empty-state">
                <p>Chưa có mẫu tùy chỉnh nào</p>
            </div>
        `;
        return;
    }
    
    elements.customPresetsList.innerHTML = '';
    customPresets.forEach(preset => {
        const item = document.createElement('div');
        item.className = 'preset-item';
        
        const hours = Math.floor(preset.duration / 3600);
        const minutes = Math.floor((preset.duration % 3600) / 60);
        const seconds = preset.duration % 60;
        
        let timeStr = '';
        if (hours > 0) timeStr += `${hours}h `;
        if (minutes > 0) timeStr += `${minutes}m `;
        if (seconds > 0 || timeStr === '') timeStr += `${seconds}s`;
        
        const modeLabel = preset.mode === 'countdown' ? '⏱️ ' + translations[currentLang].countdown : '⏲️ ' + translations[currentLang].countup;
        
        item.innerHTML = `
            <div class="preset-item-info">
                <div class="preset-item-details">
                    <div class="preset-item-name">${escapeHtml(preset.name)}</div>
                    <div class="preset-item-meta">${modeLabel} • ${timeStr}</div>
                </div>
            </div>
            <div class="preset-item-actions">
                <button class="btn btn-tiny btn-secondary" onclick="editPreset('${preset.id}')">✏️</button>
                <button class="btn btn-tiny btn-secondary" onclick="deletePreset('${preset.id}')">🗑️</button>
            </div>
        `;
        
        elements.customPresetsList.appendChild(item);
    });
}

function openPresetFormModal() {
    editingPresetId = null;
    const t = translations[currentLang];
    elements.presetFormTitle.textContent = t.createPreset;
    elements.presetSubmitBtnText.textContent = t.createPresetBtn;
    
    elements.presetForm.reset();
    elements.presetMode.value = 'countdown';
    elements.presetHours.value = 0;
    elements.presetMinutes.value = 25;
    elements.presetSeconds.value = 0;
    
    // Update labels
    const presetNameLabel = document.querySelector('label[for="presetName"]');
    if (presetNameLabel) presetNameLabel.textContent = t.presetName + ' *';
    
    const presetNameInput = document.querySelector('#presetName');
    if (presetNameInput) presetNameInput.placeholder = t.presetNamePlaceholder;
    
    const presetModeLabel = document.querySelector('label[for="presetMode"]');
    if (presetModeLabel) presetModeLabel.textContent = t.mode + ' *';
    
    const cancelPresetBtn = document.querySelector('#cancelPresetBtn');
    if (cancelPresetBtn) cancelPresetBtn.textContent = t.cancel;
    
    showModal(elements.presetFormModal);
}

function editPreset(presetId) {
    const preset = customPresets.find(p => p.id === presetId);
    if (!preset) return;
    
    editingPresetId = presetId;
    const t = translations[currentLang];
    elements.presetFormTitle.textContent = t.editPreset;
    elements.presetSubmitBtnText.textContent = t.update;
    
    elements.presetName.value = preset.name;
    elements.presetMode.value = preset.mode || 'countdown';
    
    // Update labels
    const presetNameLabel = document.querySelector('label[for="presetName"]');
    if (presetNameLabel) presetNameLabel.textContent = t.presetName + ' *';
    
    const presetNameInput = document.querySelector('#presetName');
    if (presetNameInput) presetNameInput.placeholder = t.presetNamePlaceholder;
    
    const presetModeLabel = document.querySelector('label[for="presetMode"]');
    if (presetModeLabel) presetModeLabel.textContent = t.mode + ' *';
    
    const cancelPresetBtn = document.querySelector('#cancelPresetBtn');
    if (cancelPresetBtn) cancelPresetBtn.textContent = t.cancel;
    
    const hours = Math.floor(preset.duration / 3600);
    const minutes = Math.floor((preset.duration % 3600) / 60);
    const seconds = preset.duration % 60;
    
    elements.presetHours.value = hours;
    elements.presetMinutes.value = minutes;
    elements.presetSeconds.value = seconds;
    
    showModal(elements.presetFormModal);
}

function deletePreset(presetId) {
    if (!confirm(translations[currentLang].confirmDeletePreset)) return;
    
    customPresets = customPresets.filter(p => p.id !== presetId);
    savePresets();
    renderCustomPresetsList();
    renderPresets();
}

function handlePresetFormSubmit(e) {
    e.preventDefault();
    
    const name = elements.presetName.value.trim();
    const mode = elements.presetMode.value;
    const hours = parseInt(elements.presetHours.value) || 0;
    const minutes = parseInt(elements.presetMinutes.value) || 0;
    const seconds = parseInt(elements.presetSeconds.value) || 0;
    const duration = hours * 3600 + minutes * 60 + seconds;
    
    if (duration === 0) {
        alert(translations[currentLang].durationMustBePositive);
        return;
    }
    
    const presetData = {
        name,
        mode,
        duration
    };
    
    if (editingPresetId) {
        const preset = customPresets.find(p => p.id === editingPresetId);
        if (preset) {
            Object.assign(preset, presetData);
        }
    } else {
        customPresets.push({
            id: uid(),
            ...presetData
        });
    }
    
    savePresets();
    renderCustomPresetsList();
    renderPresets();
    closeModal(elements.presetFormModal);
}

// Make functions global for onclick handlers
window.editPreset = editPreset;
window.deletePreset = deletePreset;

// ===== Language Functions =====
function toggleLanguage() {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    elements.langText.textContent = currentLang.toUpperCase();
    updateLanguage();
    localStorage.setItem('eiu_timer_lang', currentLang);
}

function updateLanguage() {
    const t = translations[currentLang];
    
    // Update header buttons
    const presetsBtn = document.querySelector('#presetsBtn');
    const settingsBtn = document.querySelector('#settingsBtn');
    
    if (presetsBtn) {
        const text = presetsBtn.childNodes[presetsBtn.childNodes.length - 1];
        if (text.nodeType === 3) text.textContent = t.presets;
    }
    
    if (settingsBtn) {
        const text = settingsBtn.childNodes[settingsBtn.childNodes.length - 1];
        if (text.nodeType === 3) text.textContent = t.settings;
    }
    
    // Update Add button
    if (elements.addTimerBtn) {
        const btnText = elements.addTimerBtn.querySelector('.btn-text');
        if (btnText) btnText.textContent = t.createTimer;
    }
    
    // Update presets bar
    const customPresetsTitle = document.querySelector('#customPresetsTitle');
    if (customPresetsTitle) customPresetsTitle.textContent = t.customPresets;
    
    const manageBtnText = document.querySelector('#manageBtnText');
    if (manageBtnText) manageBtnText.textContent = t.manage;
    
    // Update selection toolbar
    const presentBtn = document.querySelector('#presentSelectedBtn');
    const deleteBtn = document.querySelector('#deleteSelectedBtn');
    if (presentBtn) {
        presentBtn.textContent = t.present;
    }
    if (deleteBtn) {
        deleteBtn.textContent = t.delete;
    }
    
    // Update time unit labels in all timer cards
    document.querySelectorAll('.time-unit-label span:not(.material-symbols-outlined)').forEach(label => {
        const text = label.textContent.trim();
        if (text === 'Hours' || text === 'Giờ') {
            label.textContent = t.hours;
        } else if (text === 'Minutes' || text === 'Phút') {
            label.textContent = t.minutes;
        } else if (text === 'Seconds' || text === 'Giây') {
            label.textContent = t.seconds;
        }
    });
    
    // Update modal titles and labels
    const timerNameLabel = document.querySelector('label[for="timerName"]');
    if (timerNameLabel) timerNameLabel.textContent = t.timerName + ' *';
    
    const timerNameInput = document.querySelector('#timerName');
    if (timerNameInput) timerNameInput.placeholder = t.timerNamePlaceholder;
    
    const modeLabel = document.querySelector('label[for="timerMode"]');
    if (modeLabel) modeLabel.textContent = t.mode + ' *';
    
    // Update mode dropdown options
    const countdownOption = document.querySelector('#timerMode option[value="countdown"]');
    const countupOption = document.querySelector('#timerMode option[value="countup"]');
    if (countdownOption) countdownOption.textContent = t.countdown;
    if (countupOption) countupOption.textContent = t.countup;
    
    // Update time duration label
    const timeLabelText = document.querySelector('#timeLabelText');
    if (timeLabelText) timeLabelText.textContent = t.duration;
    
    // Update time hint
    const timeHint = document.querySelector('#timeHint');
    if (timeHint) {
        const mode = document.querySelector('#timerMode')?.value || 'countdown';
        timeHint.textContent = mode === 'countdown' ? t.countdownHint : t.countupHint;
    }
    
    // Update time input labels
    const timeLabels = document.querySelectorAll('.time-label');
    if (timeLabels.length >= 3) {
        timeLabels[0].textContent = t.hours;
        timeLabels[1].textContent = t.minutes;
        timeLabels[2].textContent = t.seconds;
    }
    
    // Update sound checkbox label
    const enableSoundLabel = document.querySelector('label[for="enableSound"] span');
    if (enableSoundLabel) enableSoundLabel.innerHTML = '🔊 ' + t.enableSound;
    
    // Update custom sound label
    const customSoundLabel = document.querySelector('label[for="customSound"]');
    if (customSoundLabel) customSoundLabel.textContent = t.customSound;
    
    // Update sound dropdown options
    const soundOptions = document.querySelectorAll('#customSound option, #defaultSound option');
    soundOptions.forEach(option => {
        if (option.value === '') option.textContent = t.defaultBeep;
        else if (option.value === 'bell') option.textContent = '🔔 ' + t.bell;
        else if (option.value === 'chime') option.textContent = '🎵 ' + t.chime;
        else if (option.value === 'ding') option.textContent = '🔊 ' + t.ding;
        else if (option.value === 'tick') option.textContent = '⏱️ ' + t.tick;
        else if (option.value === 'custom') option.textContent = '📁 ' + t.customFile;
    });
    
    // Update test sound button
    const testSoundBtns = document.querySelectorAll('#testSoundBtn, #testDefaultSoundBtn');
    testSoundBtns.forEach(btn => {
        const text = btn.childNodes[btn.childNodes.length - 1];
        if (text.nodeType === 3) text.textContent = ' ' + t.testSound;
    });
    
    // Update notification checkbox label
    const enableNotifLabel = document.querySelector('label[for="enableNotification"] span');
    if (enableNotifLabel) enableNotifLabel.innerHTML = '🔔 ' + t.enableNotification;
    
    // Update form buttons
    const cancelBtn = document.querySelector('#cancelBtn');
    if (cancelBtn) cancelBtn.textContent = t.cancel;
    
    // Update sound file hint
    const soundFileHint = document.querySelector('#soundSettings .form-hint');
    if (soundFileHint) soundFileHint.textContent = t.soundFileHint;
    
    // Update Presets Modal
    const presetsModalTitle = document.querySelector('#presetsModal h2');
    if (presetsModalTitle) presetsModalTitle.textContent = '⚙️ ' + t.managePresets;
    
    const addPresetBtn = document.querySelector('#addPresetBtn');
    if (addPresetBtn) addPresetBtn.textContent = '➕ ' + t.createPreset;
    
    // Update empty state
    const emptyStateTitle = document.querySelector('#emptyStateTitle');
    const emptyStateDesc = document.querySelector('#emptyStateDesc');
    const emptyStateBtnText = document.querySelector('#emptyStateBtnText');
    if (emptyStateTitle) emptyStateTitle.textContent = t.emptyStateTitle;
    if (emptyStateDesc) emptyStateDesc.textContent = t.emptyStateDesc;
    if (emptyStateBtnText) emptyStateBtnText.textContent = '➕ ' + t.emptyStateBtn;
    
    // Update quick template names
    const quickTemplatesTitle = document.querySelector('#quickTemplatesTitle');
    if (quickTemplatesTitle) quickTemplatesTitle.textContent = '⚡ ' + t.quickTemplates;
    
    // Update default preset names using data-key attribute
    const presetNameEls = document.querySelectorAll('.preset-name[data-key]');
    presetNameEls.forEach(nameEl => {
        const key = nameEl.dataset.key;
        if (key && t[key]) {
            const presetCard = nameEl.closest('.preset-card');
            const presetType = presetCard?.dataset.preset;
            const timeMatch = presetType?.match(/\d+m$/);
            const time = timeMatch ? timeMatch[0] : '';
            nameEl.textContent = time ? `${t[key]} ${time}` : t[key];
        }
    });
    
    // Update Preset Form Modal
    const presetNameLabel = document.querySelector('label[for="presetName"]');
    if (presetNameLabel) presetNameLabel.textContent = t.presetName + ' *';
    
    const presetNameInput = document.querySelector('#presetName');
    if (presetNameInput) presetNameInput.placeholder = t.presetNamePlaceholder;
    
    const presetModeLabel = document.querySelector('label[for="presetMode"]');
    if (presetModeLabel) presetModeLabel.textContent = t.mode + ' *';
    
    const presetCountdownOption = document.querySelector('#presetMode option[value="countdown"]');
    const presetCountupOption = document.querySelector('#presetMode option[value="countup"]');
    if (presetCountdownOption) presetCountdownOption.textContent = t.countdown;
    if (presetCountupOption) presetCountupOption.textContent = t.countup;
    
    const cancelPresetBtn = document.querySelector('#cancelPresetBtn');
    if (cancelPresetBtn) cancelPresetBtn.textContent = t.cancel;
    
    // Update Settings Modal
    const settingsModalTitle = document.querySelector('#settingsModal h2');
    if (settingsModalTitle) settingsModalTitle.textContent = '⚙️ ' + t.settings;
    
    const defaultSoundTitle = document.querySelector('#settingsModal .settings-section:nth-child(1) h3');
    if (defaultSoundTitle) defaultSoundTitle.textContent = t.defaultSoundTitle;
    
    const defaultSoundLabel = document.querySelector('label[for="defaultSound"]');
    if (defaultSoundLabel) defaultSoundLabel.textContent = t.defaultSoundLabel;
    
    const themeTitle = document.querySelector('#settingsModal .settings-section:nth-child(2) h3');
    if (themeTitle) themeTitle.textContent = t.themeTitle;
    
    const themeLabel = document.querySelector('label[for="themeSelect"]');
    if (themeLabel) themeLabel.textContent = t.themeLabel;
    
    // Update theme options
    const themeOptions = document.querySelectorAll('#themeSelect option');
    themeOptions.forEach(option => {
        if (option.value === 'teal') option.textContent = t.themeTeal;
        else if (option.value === 'blue') option.textContent = t.themeBlue;
        else if (option.value === 'purple') option.textContent = t.themePurple;
        else if (option.value === 'green') option.textContent = t.themeGreen;
        else if (option.value === 'orange') option.textContent = t.themeOrange;
        else if (option.value === 'red') option.textContent = t.themeRed;
        else if (option.value === 'dark') option.textContent = t.themeDark;
    });
    
    const notificationTitle = document.querySelector('#settingsModal .settings-section:nth-child(3) h3');
    if (notificationTitle) notificationTitle.textContent = t.notificationTitle;
    
    const notificationDefaultLabel = document.querySelector('label[for="enableNotificationsByDefault"] span');
    if (notificationDefaultLabel) notificationDefaultLabel.textContent = t.notificationDefault;
    
    // Update Stats Modal
    const statsModalTitle = document.querySelector('#statsModal h2');
    if (statsModalTitle) statsModalTitle.textContent = t.statsTitle;
    
    const statLabels = document.querySelectorAll('#statsModal .stat-label');
    if (statLabels.length >= 4) {
        statLabels[0].textContent = t.totalTimers;
        statLabels[1].textContent = t.activeTimers;
        statLabels[2].textContent = t.completedToday;
        statLabels[3].textContent = t.totalFocusTime;
    }
    
    // Re-render everything with new language
    renderAllTimers();
    renderPresets();
}

// ===== Statistics =====
function showStats() {
    const activeCount = Array.from(timers.values()).filter(t => t.isRunning).length;
    const totalHours = Math.floor(stats.totalFocusTime / 3600000);
    
    document.getElementById('totalTimers').textContent = timers.size;
    document.getElementById('activeTimers').textContent = activeCount;
    document.getElementById('completedToday').textContent = stats.completedToday;
    document.getElementById('totalFocusTime').textContent = `${totalHours}h`;
    
    showModal(elements.statsModal);
}

function openShortcutsModal() {
    showModal(elements.shortcutsModal);
}

// ===== Settings Functions =====
function showSettings() {
    const t = translations[currentLang];
    
    // Load current settings
    elements.defaultSound.value = settings.defaultSound || '';
    elements.themeSelect.value = settings.theme || 'teal';
    elements.enableNotificationsByDefault.checked = settings.notificationsByDefault !== false;
    
    // Update all labels
    const settingsModalTitle = document.querySelector('#settingsModal h2');
    if (settingsModalTitle) settingsModalTitle.textContent = '⚙️ ' + t.settings;
    
    const defaultSoundTitle = document.querySelector('#settingsModal .settings-section:nth-child(1) h3');
    if (defaultSoundTitle) defaultSoundTitle.textContent = t.defaultSoundTitle;
    
    const defaultSoundLabel = document.querySelector('label[for="defaultSound"]');
    if (defaultSoundLabel) defaultSoundLabel.textContent = t.defaultSoundLabel;
    
    // Update sound dropdown options
    const soundOptions = document.querySelectorAll('#defaultSound option');
    soundOptions.forEach(option => {
        if (option.value === '') option.textContent = t.defaultBeep;
        else if (option.value === 'bell') option.textContent = '🔔 ' + t.bell;
        else if (option.value === 'chime') option.textContent = '🎵 ' + t.chime;
        else if (option.value === 'ding') option.textContent = '🔊 ' + t.ding;
        else if (option.value === 'tick') option.textContent = '⏱️ ' + t.tick;
        else if (option.value === 'custom') option.textContent = '📁 ' + t.customFile;
    });
    
    const themeTitle = document.querySelector('#settingsModal .settings-section:nth-child(2) h3');
    if (themeTitle) themeTitle.textContent = t.themeTitle;
    
    const themeLabel = document.querySelector('label[for="themeSelect"]');
    if (themeLabel) themeLabel.textContent = t.themeLabel;
    
    // Update theme options
    const themeOptions = document.querySelectorAll('#themeSelect option');
    themeOptions.forEach(option => {
        if (option.value === 'teal') option.textContent = t.themeTeal;
        else if (option.value === 'blue') option.textContent = t.themeBlue;
        else if (option.value === 'purple') option.textContent = t.themePurple;
        else if (option.value === 'green') option.textContent = t.themeGreen;
        else if (option.value === 'orange') option.textContent = t.themeOrange;
        else if (option.value === 'red') option.textContent = t.themeRed;
        else if (option.value === 'dark') option.textContent = t.themeDark;
    });
    
    const notificationTitle = document.querySelector('#settingsModal .settings-section:nth-child(3) h3');
    if (notificationTitle) notificationTitle.textContent = t.notificationTitle;
    
    const notificationDefaultLabel = document.querySelector('label[for="enableNotificationsByDefault"] span');
    if (notificationDefaultLabel) notificationDefaultLabel.textContent = t.notificationDefault;
    
    showModal(elements.settingsModal);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    settings.theme = theme;
    saveSettings();
}

// ===== Import/Export =====
function handleExport() {
    // Prepare data for Excel
    const t = translations[currentLang];
    const timersData = Array.from(timers.values()).map(timer => {
        const hours = Math.floor((timer.initialDuration || 0) / 3600000);
        const minutes = Math.floor(((timer.initialDuration || 0) % 3600000) / 60000);
        const seconds = Math.floor(((timer.initialDuration || 0) % 60000) / 1000);
        
        return {
            [t.timerName]: timer.name,
            [t.mode]: timer.mode === 'countdown' ? t.countdown : t.countup,
            [t.hours]: hours,
            [t.minutes]: minutes,
            [t.seconds]: seconds,
            [t.soundLabel]: timer.soundOn ? t.yes : t.no,
            [t.notification]: timer.notificationOn ? t.yes : t.no
        };
    });
    
    // Create workbook
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(timersData);
    
    // Auto-size columns
    const colWidths = [
        { wch: 25 }, // Tên Timer
        { wch: 12 }, // Chế độ
        { wch: 8 },  // Giờ
        { wch: 8 },  // Phút
        { wch: 8 },  // Giây
        { wch: 10 }, // Âm thanh
        { wch: 12 }  // Thông báo
    ];
    ws['!cols'] = colWidths;
    
    XLSX.utils.book_append_sheet(wb, ws, 'Timers');
    
    // Export file
    const fileName = `EIU-Timer-Pro-${new Date().toLocaleDateString('vi-VN').replace(/\//g, '-')}.xlsx`;
    XLSX.writeFile(wb, fileName);
}

function handleImport() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx,.xls';
    
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = new Uint8Array(event.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                
                // Read first sheet
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(firstSheet);
                
                let importCount = 0;
                const tVi = translations.vi;
                const tEn = translations.en;
                
                jsonData.forEach(row => {
                    // Support both languages
                    const name = row[tVi.timerName] || row[tEn.timerName];
                    const modeText = row[tVi.mode] || row[tEn.mode];
                    const mode = (modeText === tVi.countup || modeText === tEn.countup) ? 'countup' : 'countdown';
                    const hours = parseInt(row[tVi.hours] || row[tEn.hours]) || 0;
                    const minutes = parseInt(row[tVi.minutes] || row[tEn.minutes]) || 0;
                    const seconds = parseInt(row[tVi.seconds] || row[tEn.seconds]) || 0;
                    const durationMs = (hours * 3600 + minutes * 60 + seconds) * 1000;
                    
                    if (!name || durationMs === 0) return;
                    
                    const id = uid();
                    const soundText = row[tVi.soundLabel] || row[tEn.soundLabel];
                    const notifText = row[tVi.notification] || row[tEn.notification];
                    
                    const timer = {
                        id,
                        name,
                        mode,
                        soundOn: soundText === tVi.yes || soundText === tEn.yes,
                        notificationOn: notifText === tVi.yes || notifText === tEn.yes,
                        isRunning: false,
                        createdAt: Date.now(),
                        initialDuration: durationMs
                    };
                    
                    if (mode === 'countdown') {
                        timer.lastRemaining = durationMs;
                    } else {
                        timer.lastElapsed = 0;
                    }
                    
                    timers.set(id, timer);
                    sendToWorker('add', { timer: { ...timer, __el: undefined, __el_presentation: undefined } });
                    importCount++;
                });
                
                saveTimers();
                renderAllTimers();
                const t = translations[currentLang];
                alert(`✅ ${t.importSuccess} ${importCount} ${t.timersFromExcel}`);
            } catch (err) {
                console.error('Import error:', err);
                const t = translations[currentLang];
                alert(`❌ ${t.importError} ${err.message}`);
            }
        };
        reader.readAsArrayBuffer(file);
    };
    
    input.click();
}

// ===== Keyboard Shortcuts =====
function handleKeyPress(e) {
    // Check if typing in input
    if (e.target.matches('input, textarea, select')) return;
    
    switch(e.key.toLowerCase()) {
        case 'n':
            openAddModal();
            break;
        case 'p':
            togglePresets();
            break;
        case '?':
            openShortcutsModal();
            break;
        case 's':
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                showStats();
            }
            break;
        case 'escape':
            if (isPresentationMode) {
                exitPresentationMode();
            } else if (elements.shortcutsModal.classList.contains('active')) {
                closeModal(elements.shortcutsModal);
            } else if (elements.timerModal.classList.contains('active')) {
                closeModal(elements.timerModal);
            } else if (elements.statsModal.classList.contains('active')) {
                closeModal(elements.statsModal);
            } else if (elements.presetsModal.classList.contains('active')) {
                closeModal(elements.presetsModal);
            } else if (elements.presetFormModal.classList.contains('active')) {
                closeModal(elements.presetFormModal);
            }
            break;
    }
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Header Actions
    elements.addTimerBtn.addEventListener('click', openAddModal);
    elements.presetsBtn.addEventListener('click', togglePresets);
    elements.settingsBtn.addEventListener('click', showSettings);
    elements.languageBtn.addEventListener('click', toggleLanguage);
    // elements.statsBtn.addEventListener('click', showStats); // Removed stats feature
    elements.importBtn.addEventListener('click', handleImport);
    elements.exportBtn.addEventListener('click', handleExport);
    
    // Selection Toolbar
    elements.clearSelectionBtn.addEventListener('click', clearSelection);
    elements.presentSelectedBtn.addEventListener('click', handlePresentSelected);
    elements.deleteSelectedBtn.addEventListener('click', deleteSelected);
    
    // Presentation Mode
    elements.exitPresentationBtn.addEventListener('click', exitPresentationMode);
    elements.fullscreenToggleBtn.addEventListener('click', toggleFullscreen);
    
    // Sound Controls
    elements.enableSound.addEventListener('change', (e) => {
        const soundSettings = document.getElementById('soundSettings');
        if (soundSettings) {
            soundSettings.style.display = e.target.checked ? 'block' : 'none';
        }
    });
    
    elements.customSound?.addEventListener('change', (e) => {
        if (e.target.value === 'custom') {
            elements.soundFileInput?.click();
        }
    });
    
    elements.soundFileInput?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handleSoundFileUpload(file, false);
        }
    });
    
    elements.testSoundBtn?.addEventListener('click', () => {
        const soundType = elements.customSound?.value || '';
        playSoundByType(soundType);
    });
    
    // Settings Modal
    elements.settingsModalClose.addEventListener('click', () => closeModal(elements.settingsModal));
    elements.settingsModalOverlay.addEventListener('click', () => closeModal(elements.settingsModal));
    
    elements.defaultSound?.addEventListener('change', (e) => {
        if (e.target.value === 'custom') {
            elements.defaultSoundFileInput?.click();
        } else {
            settings.defaultSound = e.target.value;
            saveSettings();
        }
    });
    
    elements.defaultSoundFileInput?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handleSoundFileUpload(file, true);
        }
    });
    
    elements.testDefaultSoundBtn?.addEventListener('click', () => {
        const soundType = settings.defaultSound || '';
        playSoundByType(soundType);
    });
    
    elements.themeSelect?.addEventListener('change', (e) => {
        applyTheme(e.target.value);
    });
    
    elements.enableNotificationsByDefault?.addEventListener('change', (e) => {
        settings.notificationsByDefault = e.target.checked;
        saveSettings();
    });
    
    // Modal - Timer Form
    elements.modalClose.addEventListener('click', () => closeModal(elements.timerModal));
    elements.modalOverlay.addEventListener('click', () => closeModal(elements.timerModal));
    elements.cancelBtn.addEventListener('click', () => closeModal(elements.timerModal));
    elements.timerForm.addEventListener('submit', handleFormSubmit);
    elements.timerMode.addEventListener('change', updateTimeLabelAndHint);
    
    // Preset form mode change
    if (elements.presetMode) {
        elements.presetMode.addEventListener('change', () => {
            const mode = elements.presetMode.value;
            // Set default time based on mode
            if (mode === 'countdown') {
                elements.presetHours.value = 0;
                elements.presetMinutes.value = 25;
                elements.presetSeconds.value = 0;
            } else if (mode === 'countup') {
                elements.presetHours.value = 0;
                elements.presetMinutes.value = 0;
                elements.presetSeconds.value = 0;
            }
        });
    }
    
    // Modal - Stats
    elements.statsModalClose.addEventListener('click', () => closeModal(elements.statsModal));
    elements.statsModalOverlay.addEventListener('click', () => closeModal(elements.statsModal));
    
    // Shortcuts Modal
    elements.shortcutsModalClose.addEventListener('click', () => closeModal(elements.shortcutsModal));
    elements.shortcutsModalOverlay.addEventListener('click', () => closeModal(elements.shortcutsModal));
    
    // Presets Management
    elements.managePresetsBtn.addEventListener('click', showPresetsManager);
    elements.presetsModalClose.addEventListener('click', () => closeModal(elements.presetsModal));
    elements.presetsModalOverlay.addEventListener('click', () => closeModal(elements.presetsModal));
    elements.addPresetBtn.addEventListener('click', openPresetFormModal);
    
    // Preset Form Modal
    elements.presetFormModalClose.addEventListener('click', () => closeModal(elements.presetFormModal));
    elements.presetFormModalOverlay.addEventListener('click', () => closeModal(elements.presetFormModal));
    elements.cancelPresetBtn.addEventListener('click', () => closeModal(elements.presetFormModal));
    elements.presetForm.addEventListener('submit', handlePresetFormSubmit);
    
    // Default preset buttons
    document.querySelectorAll('.preset-card[data-preset]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const presetType = e.currentTarget.dataset.preset;
            handleDefaultPreset(presetType);
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyPress);
    
    // Fullscreen change listener to update button text
    document.addEventListener('fullscreenchange', updateFullscreenButton);
    document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
    document.addEventListener('msfullscreenchange', updateFullscreenButton);
}

function updateFullscreenButton() {
    const fullscreenText = elements.fullscreenToggleBtn?.querySelector('.fullscreen-text');
    if (!fullscreenText) return;
    
    const t = translations[currentLang];
    if (document.fullscreenElement) {
        fullscreenText.textContent = t.exitFullscreen || 'Thoát toàn màn hình';
    } else {
        fullscreenText.textContent = t.fullscreen || 'Toàn màn hình';
    }
}

function handleDefaultPreset(presetType) {
    try {
        const t = translations[currentLang];
        const presets = {
            'countdown-1m': { mode: 'countdown', duration: 60, nameKey: 'presetCountdown1m', time: '1m' },
            'countdown-3m': { mode: 'countdown', duration: 180, nameKey: 'presetCountdown3m', time: '3m' },
            'countup-1m': { mode: 'countup', duration: 60, nameKey: 'presetCountup1m', time: '1m' },
            'countup-3m': { mode: 'countup', duration: 180, nameKey: 'presetCountup3m', time: '3m' }
        };
        
        const preset = presets[presetType];
        if (!preset) {
            console.error('Preset not found:', presetType);
            return;
        }
        
        const totalMs = preset.duration * 1000;
        const timerName = `${t[preset.nameKey]} ${preset.time}`;
        
        const timer = {
            id: uid(),
            name: timerName,
            mode: preset.mode,
            initialDuration: totalMs,
            targetDuration: preset.mode === 'countup' ? totalMs : null,
            lastRemaining: preset.mode === 'countdown' ? totalMs : 0,
            lastElapsed: preset.mode === 'countup' ? 0 : 0,
            isRunning: false,
            soundOn: settings.notificationsByDefault !== false,
            notificationOn: settings.notificationsByDefault !== false,
            customSound: settings.defaultSound || '',
            createdAt: Date.now()
        };
        
        console.log('Creating timer from preset:', presetType, timer);
        
        timers.set(timer.id, timer);
        sendToWorker('add', { timer: { ...timer, __el: undefined, __editing: undefined } });
        saveTimers();
        renderAllTimers();
    } catch (error) {
        console.error('Error in handleDefaultPreset:', error);
        alert('Có lỗi khi tạo timer từ mẫu. Vui lòng thử lại.');
    }
}

// ===== Initialization =====
function init() {
    try {
        loadTimers();
        loadPresets();
        loadCustomSounds();
        
        // Load saved language
        const savedLang = localStorage.getItem('eiu_timer_lang');
        if (savedLang && translations[savedLang]) {
            currentLang = savedLang;
            elements.langText.textContent = currentLang.toUpperCase();
        }
        
        // Apply saved theme
        applyTheme(settings.theme || 'teal');
        
        setupEventListeners();
        updateLanguage();
        renderAllTimers();
        renderPresets();
        initWorker();
        requestNotificationPermission();
        
        // Resume audio context on first user interaction (important for mobile)
        const resumeAudio = () => {
            if (!audioContext) return;
            
            if (audioContext.state === 'suspended') {
                audioContext.resume().then(() => {
                    console.log('AudioContext resumed - sound is now enabled');
                }).catch(e => {
                    console.error('Failed to resume AudioContext:', e);
                });
            }
            // Remove all listeners after first interaction
            document.removeEventListener('click', resumeAudio);
            document.removeEventListener('touchstart', resumeAudio);
            document.removeEventListener('keydown', resumeAudio);
        };
        document.addEventListener('click', resumeAudio);
        document.addEventListener('touchstart', resumeAudio); // Mobile support
        document.addEventListener('keydown', resumeAudio);
        
        console.log('App initialized successfully');
    } catch (error) {
        console.error('Initialization error:', error);
        alert('Có lỗi khi khởi động ứng dụng. Vui lòng kiểm tra console (F12) để xem chi tiết.');
    }
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Expose for debugging
window.__app = { timers, stats, customPresets, worker };
