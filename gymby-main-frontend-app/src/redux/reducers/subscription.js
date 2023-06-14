import { v4 as uuidv4 } from 'uuid';

let orderId = uuidv4()
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
export const publicKey = process.env.REACT_APP_SUBSCRIPTION_PUBLIC_KEY;
export const privateKey = process.env.REACT_APP_SUBSCRIPTION_PRIVATE_KEY;


export const getData = (username) => {
    return (
    btoa(JSON.stringify(
        {
            "version": "3",
            "public_key": publicKey,
            "action": "subscribe",
            "amount": "6",
            "currency": "USD",
            "description": "Subscription payment",
            "order_id": orderId,
            "subscribe_date_start": formattedDate,
            "subscribe_periodicity": "month",
            "server_url":`https://gymby-api.azurewebsites.net/api/payments/webhook?username=${username}`
        })
    ))
}

export async function generateSignature(data) {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const keyBuffer = encoder.encode(privateKey);
    const concatenatedBuffer = new Uint8Array(keyBuffer.length + dataBuffer.length + keyBuffer.length);
    concatenatedBuffer.set(keyBuffer, 0);
    concatenatedBuffer.set(dataBuffer, keyBuffer.length);
    concatenatedBuffer.set(keyBuffer, keyBuffer.length + dataBuffer.length);

    const hashBuffer = await window.crypto.subtle.digest('SHA-1', concatenatedBuffer);
    const signature = btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));

    return signature;
}

