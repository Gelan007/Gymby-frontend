import { v4 as uuidv4 } from 'uuid';

let orderId = uuidv4()
export const publicKey = 'sandbox_i61590184070'
export const privateKey = 'sandbox_8stztPC7ANo0eN26Bnec8XOYJGCxzbJbYeSGz8Il'

export const getData = (username) => {
    return (
    btoa(JSON.stringify(
        {
            "version": "3",
            "public_key": publicKey,
            "action": "subscribe",
            "amount": "1",
            "currency": "USD",
            "description": "Subscription payment",
            "order_id": orderId,
            "subscribe_date_start": "2023-06-07 00:00:00",
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

