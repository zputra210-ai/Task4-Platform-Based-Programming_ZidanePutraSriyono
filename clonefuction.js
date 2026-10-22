
function deepClone(value) {
    if (value === null || typeof value !== "object") {
        return value;
    }

    if (Array.isArray(value)) {
        const clone = [];

        for (let i = 0; i < value.length; i++) {
            clone[i] = deepClone(value[i]);
        }
        return clone;
    }

    const clone = {};
    for (const key in value) {
        if (Object.hasOwn(value, key)) {
            clone[key] = deepClone(value[key]);
        }
    }

    return clone;
}

const original = {
    nama: "Budi",
    umur: 20,
    alamat: {
        kota: "Jakarta",
        kodePos: 12345
    },
    hobi: ["membaca", "musik"]
};

const clone = deepClone(original);

// Ubah hasil clone
clone.nama = "Andi";
clone.alamat.kota = "Bandung";
clone.hobi[0] = "olahraga";

console.log("Original:", original);
console.log("Clone:", clone);
