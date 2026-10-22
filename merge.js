
const defaultSettings = {
    "theme": "light",
    "language": "Indonesia",
    "notifications": {
        "email": true,
        "sms": false,
        "push": true
    }
};

const userSettings = {
    "theme": "dark",
    "notifications": {
        "sms": true
    }
};

function mergeSettings(defaults, user) {
    return {
        ...defaults,
        ...user,
        notifications: {
            ...defaults.notifications,
            ...user.notifications
        }
    };
}

const settings = mergeSettings(defaultSettings, userSettings);

console.log(settings);